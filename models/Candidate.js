const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const CandidateSchema = new Schema({
  
  Name: {
    type: String,
    required: true
  },
  Address: {
    type: String,
    required: true
  },
  DOB: {
    type: String,
    required: true
  },
  State: {
    type: String,
    required: true
  },
  Age: {
    type: String,
    required: true
  },
  Pincode: {
    type: String,
    required: true
  },
  Date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Candidate = mongoose.model("candidates", CandidateSchema);