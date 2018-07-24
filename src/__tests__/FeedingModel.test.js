import moment from 'moment';
import expect from 'expect';
import { Feeding } from '../../server/models/Feeding';

let time = moment.now();
let food = 'bread';
let location = 'Beacon Hill Park';
let duckQuantity = 20;
let foodType = 'baking';
let foodInGrams = 40;

let values;

beforeEach(() => {
  values = {
    time,
    food,
    location,
    duckQuantity,
    foodType,
    foodInGrams
  };
})

describe('feeding model', () => {
  it('should be consider this instance valid', (done) => {
    let feeding = new Feeding(values);
    feeding.validate((err) => {
      expect(err).toBeFalsy();
      done();
    });
  })

  it('should be invalid if time is a string', (done) => {
    let feeding = new Feeding({
      ...values,
      time: 'hey'
    });
    feeding.validate((err) => {
      expect(err.errors).toBeTruthy();
      done();
    });
  })

  // and so on, more model tests...
});