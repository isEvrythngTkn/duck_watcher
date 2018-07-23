var { Feeding }= require('../models/Feeding');

const createFeeding = (values) => {
  let feeding = new Feeding(values);
  console.log('here is a feeding', feeding);
}

module.exports = { createFeeding };