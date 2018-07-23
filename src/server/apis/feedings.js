var { Feeding } = require('../models/Feeding');
var { formatResponse } = require('./utils');

const createFeeding = async (values) => {
  let feeding = new Feeding(values);
  await feeding.save((err) => {
    if (err) {
      return formatResponse(false, values, err);
    } else {
      return formatResponse(true, values);
    }
  });
}

module.exports = { createFeeding };