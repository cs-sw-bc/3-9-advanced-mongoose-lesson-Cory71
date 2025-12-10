import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: {
    type: String,   
    required: true,
    minlength: 1,
  },
  ISBN: {
    type: String,
    minLength: 13,
    maxLength: 13
  },
  genre: {
    type: String,
    enum: ["DRAMA", "SCI-FI", "FANTASY", "MYSTERY"],
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
  },
  review: {
    reviewer: String,
    review: String,
  }
});

const Book = mongoose.model('Book', bookSchema);
export default Book;