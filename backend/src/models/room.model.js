const roomSchema = new mongoose.Schema({
  roomId: { 
    type: String, 
    required: true, 
    unique: true 
},
  ownerId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
},
  participants: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' 
}],
  currentCode: { 
    type: String, 
    default: '' 
},
  language: { 
    type: String, 
    default: 'javascript' 
},
  whiteboardElements: { 
    type: Array, 
    default: [] 
},
}, { timestamps: true });

const room = mongoose.model('Room', roomSchema);

module.exports = room;