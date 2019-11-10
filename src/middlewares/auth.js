const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  const token = authorization.split(' ')[1];

  jwt.verify(token, process.env.CHAVEJWT || 'macaconaovoa', (err, response) => {
    if (err) {
      return res.status().json({
        data: 'unauthorized',
      });
    }
    req.user = response.user.id;
    return next();
  });
};
