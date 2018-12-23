function auth (req, res, next) {
    req.isAuthenticated()
        ? next()
        : res.json({
            isAuth: false
        });
}

module.exports = { auth }