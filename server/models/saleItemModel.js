const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/auction1');

const schema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  insuranceCompany: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  userID: {
    type: String,
    required: true
  }
});

schema.set('toJSON', {
  virtuals: true
});

module.exports = mongoose.model('saleItem', schema);
