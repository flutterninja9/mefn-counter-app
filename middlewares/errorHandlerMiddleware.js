function errorMiddleware(err, req, res, next) {
    res.json({
      status: req.status ? req.status : 500,
      message: err.toString(),
    })
}

module.exports = { errorMiddleware }
