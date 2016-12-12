	import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

const usersSchema = new Schema({
  name: { type: 'String', required: true },
  number: { type: 'String', required: true },
  email: { type: 'String', required: true },
  password: { type: 'String', required: true },
  city: {type: 'String', required: true},
  locality: {type: 'String', required: true}
});

export default mongoose.model('Users', usersSchema);