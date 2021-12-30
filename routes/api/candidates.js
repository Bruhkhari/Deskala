const express = require("express");
const router = express.Router();
// Load input validation
const validateEntryInput = require("../../validation/entry");
// Load Candidate model
const Candidate = require("../../models/Candidate");

// @route POST api/users/entry
// @desc Register user
// @access Public
router.post("/entry", (req, res) => {
    // Form validation
  const { errors, isValid } = validateEntryInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    else {
        const newCandidate = new Candidate({
          name: req.body.name,
          Address: req.body.Address,
          DOB  : req.body.DOB ,
          State: req.body.State,
          Age: req.body.Age,
          Pincode: req.body.Pincode
        });
          newCandidate
            .save()
            .then(candidate => {
              return res.json(candidate);
            })
            .catch(err => console.log(err));
        };
});
module.exports = router;