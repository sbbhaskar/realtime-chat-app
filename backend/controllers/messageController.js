const asyncHandler = require('express-async-handler');
const Message = require('../models/Message');
const User = require('../models/User');
const Chat = require('../models/Chat');

// Send message
const sendMessage = asyncHandler(async (req, res) => {
  const { content, chatId } = req.body;

  if (!content || !chatId) {
    console.log('Invalid message data');
    return res.sendStatus(400);
  }

  let newMessage = {
    sender: req.user._id,
    content,
    chat: chatId,
  };

  let message = await Message.create(newMessage);

  message = await message.populate('sender', 'name pic');
  message = await message.populate('chat');
  message = await User.populate(message, {
    path: 'chat.users',
    select: 'name pic email',
  });

  await Chat.findByIdAndUpdate(chatId, { latestMessage: message });

  res.json(message);
});

// Get all messages of a chat
const allMessages = asyncHandler(async (req, res) => {
  const messages = await Message.find({ chat: req.params.chatId })
    .populate('sender', 'name pic email')
    .populate('chat');

  res.json(messages);
});

module.exports = { sendMessage, allMessages };
