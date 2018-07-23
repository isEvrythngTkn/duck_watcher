const formatResponse = (success = true, values = {}, error = "") => {
  return {
    success,
    values,
    error
  };
}

module.exports = { formatResponse };