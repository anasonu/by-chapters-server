const isCreator = (req, res, next) => {
    if(req.payload._id != req.body.author._id) {
        res.status(405).json({
            errorMessage: "No estás autorizado a realizar estos cambios",
        });
        return;
    } else {
        next();
    };
};

module.exports = isCreator;