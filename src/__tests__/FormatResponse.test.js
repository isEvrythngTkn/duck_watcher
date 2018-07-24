var { formatResponse } = require('../../server/apis/utils');

describe("format response", () => {
  it("formats a successful request response", () => {
    const success = true;
    const values = { a: 'a', b: 'b' };
    const error = "";

    const expectedResponse = {
      success,
      values,
      error
    };
    expect(formatResponse(success, values)).toEqual(expectedResponse);
  });

  it("formats a failed request response", () => {
    const success = false;
    const values = { a: 'a', b: 'b' };
    const error = "An error has occured";

    const expectedResponse = {
      success,
      values,
      error
    };
    expect(formatResponse(success, values, error)).toEqual(expectedResponse);
  });  
});