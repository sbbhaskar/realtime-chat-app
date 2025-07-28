const User = require('./models/User');
const Message = require('./models/Message');
const Chat = require('./models/Chat');

const socketHandler = (io) => {
  io.on('connection', (socket) => {
    console.log('🔌 User connected:', socket.id);

    socket.on('setup', (userData) => {
      socket.join(userData._id);
      socket.emit('connected');
    });

    socket.on('join chat', (room) => {
      socket.join(room);
    });

    socket.on('typing', (room) => socket.in(room).emit('typing'));
    socket.on('stop typing', (room) => socket.in(room).emit('stop typing'));

    socket.on('new message', (message) => {
      const chat = message.chat;
      if (!chat.users) return;

      chat.users.forEach((user) => {
        if (user._id === message.sender._id) return;
        socket.in(user._id).emit('message received', message);
      });
    });

    socket.on('disconnect', () => {
      console.log('❌ User disconnected');
    });
  });
};

module.exports = socketHandler;
