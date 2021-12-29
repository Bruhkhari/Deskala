const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateRegisterInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  
  data.email = !isEmpty(data.email) ? data.email : "";
  data.phonenumber = !isEmpty(data.phonenumber) ? data.phonenumber : "";
  data.password = !isEmpty(data.password) ? data.password : "";

// Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  // phonenumber checks
  if (Validator.isEmpty(data.phonenumber)) {
    errors.phonenumber = "Phone Number field is required";
  }
  if (!Validator.isMobilePhone(data.phonenumber,'en-IN')) {
        errors.phonenumber = "Phone Number must be Indian";
  }
// Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  if (!Validator.isStrongPassword(data.password, { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 })) {
    errors.password = "Password should contain at least One Uppercase , One lowercase, One Numeric, One Special Character";
  }


return {
    errors,
    isValid: isEmpty(errors)
  };
};