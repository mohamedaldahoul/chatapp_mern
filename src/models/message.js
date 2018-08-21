const mongoose = require('mongoose');
const { Schema } = mongoose;

module.exports = mongoose.model('Message',
  new Schema({
    body:{
      type: String,
      require: true
    },
    users:{ 
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
}), {
  timestamps: true
})