import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

// how  document look like
const userSchema = mongoose.Schema({
    name: String,
    hobbies: String,
    email: String,
    phone: Number
});

// autoIncrement.initialize(mongoose.connection);
// userSchema.plugin(autoIncrement.plugin, 'user');
const postUser = mongoose.model('user', userSchema);

export default postUser;
