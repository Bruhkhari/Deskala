const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateLoginInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  data.Address = !isEmpty(data.Address) ? data.Address : "";
  data.DOB = !isEmpty(data.DOB) ? data.DOB : "";
  data.State = !isEmpty(data.State) ? data.State : "";
  data.Age = !isEmpty(data.Age) ? data.Age : "";
  data.Pincode = !isEmpty(data.Pincode) ? data.Pincode : "";
  // name checks
  if (Validator.isEmpty(data.name)) {
    errors.name = "name field is required";
  }// Address checks
  if (Validator.isEmpty(data.Address)) {
    errors.Address = "Address field is required";
  }// DOB checks
  if (Validator.isEmpty(data.DOB)) {
    errors.DOB = "DOB field is required";
  }// State checks
  if (Validator.isEmpty(data.State)) {
    errors.State = "State field is required";
  }// Age checks
  if (Validator.isEmpty(data.Age)) {
    errors.Age = "Age field is required";
  }// Pincode checks
  if (Validator.isEmpty(data.Pincode)) {
    errors.Pincode = "Pincode field is required";
  }
 
  return {
    errors,
    isValid: isEmpty(errors)
  };
  

}