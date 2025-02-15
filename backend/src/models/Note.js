import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    default: ''
  },
  content: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: 'bg-white'
  }
}, {
  timestamps: true
});

export default mongoose.model('Note', noteSchema);