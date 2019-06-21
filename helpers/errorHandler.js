const errorHandler = (err, req, res, next) => {
  if (err.type) {
    res.status(err.status).json({
      error: {
        message: err.message,
        status: err.status,
        developerMessage: err.developerMessage
      }
    });
  } else {
    res.status(500).json(err);
  }
};

module.exports = errorHandler;
