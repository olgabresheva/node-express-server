import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  email: String,
  password: {
    type: String,
    required: true,
    select: false,
  },
});

export default mongoose.model('User', userSchema);
