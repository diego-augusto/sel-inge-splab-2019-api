exports.permit = function (...allowed) {

    const isAllowed = role => allowed.indexOf(role) > -1;

    return (req, res, next) => {

        console.log(req.user.role)

        if (req.user && isAllowed(req.user.role)) {
            next();
        }
        else {
            res.status(403).json({ message: "Forbidden" });
        }
    }
}