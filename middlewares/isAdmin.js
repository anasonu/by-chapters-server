const isAdmin = (req, res, next) => {
 
    if(!req.payload.admin) {
        res.status(405).json({
            errorMessage: "No estás autorizado a realizar estos cambios",
        });
        return;
    } else {
        next();
    };
};

module.exports = isAdmin;