import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  name: String,
  age: Number,
});

// userSchema.index({ email: 1 }, { unique: true });

export default mongoose.model('User', userSchema);
