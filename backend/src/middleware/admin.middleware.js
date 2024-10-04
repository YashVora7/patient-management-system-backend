const jwt = require("jsonwebtoken");

const admin = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .json({ message: "Access denied. No token provided." });
    }

    let decoded = jwt.verify(token, "admin");

    req.user = decoded;

    next();
  } catch (error) {
    res.status(500).json({ error, details: error.message });
  }
};

module.exports = admin;
