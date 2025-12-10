import mongoose from 'mongoose';

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  yearBorn: {
    type: Number,
    min: -4000,
    max: new Date().getFullYear() - 10,
  },
  nationality: {
    type: String,
    enum: ['American', 'British', 'Canadian', 'French', 'German', 'Other'],
    default: 'Canadian',
  },
  email: {
    type: String, 
    match: [/^[a-z]{2,}@[a-z]+\.[a-z]+/, "Invalid email"]
  }
});

const Author = mongoose.model('Author', authorSchema);

export default Author;
