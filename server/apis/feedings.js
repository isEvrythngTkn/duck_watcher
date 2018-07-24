var { Feeding } = require('../models/Feeding');
var { formatResponse } = require('./utils');

const createFeeding = async (values) => {
  let response;

  try {
    let feeding = new Feeding(values);
    await feeding.save();
    response = formatResponse(true, values);
  } catch (err) {
    response = formatResponse(false, values, err._message);
  }

  return response;
}

module.exports = { createFeeding };