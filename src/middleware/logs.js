const logRequest = (req, res, next) => {
  console.log("terjadi request ke Path: ", req.path);
  next();
};

module.exports = logRequest;
