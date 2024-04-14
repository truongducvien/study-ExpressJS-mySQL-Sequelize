const trimObjectProperties = (obj) => {
  const result = obj;
  if (result && typeof result === 'object') {
    Object.entries(result).forEach(([key, value]) => {
      if (typeof value === 'object') {
        return trimObjectProperties(result[key]);
      }
      if (typeof value === 'string') {
        result[key] = value.trim().replace(/\s+/g, ' ');
      }
      return result;
    });
  }

  return result;
};

/**
 * Auto trim the request data before being processed by the controller:
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const trimRequest = (req, res, next) => {
  if (req?.body) trimObjectProperties(req.body);
  if (req?.params) trimObjectProperties(req.params);
  if (req?.query) trimObjectProperties(req.query);
  next();
};

module.exports = { trimRequest };
