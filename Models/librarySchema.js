import mongoose from "mongoose";
// import validator from "validator"; // Uncomment if you plan to use validator

const librarySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    unique: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  author: {
    type: String,
    required: [true, 'Author is required'],
    
    maxlength: [50, 'Author name cannot exceed 50 characters']
  }
}, {
  timestamps: true
});

export const Library = mongoose.model('Library', librarySchema);
