const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  paymentId: String,
  propertyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'properties',
  },
});

const Purchase=mongoose.model("Purchase",purchaseSchema);

module.exports=Purchase;