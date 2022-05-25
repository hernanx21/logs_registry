module.exports = (req, res, next) => {
    const idUser = req.header('user_id')

    if(idUser !== '1'){
        return res.sendStatus(403)
    }

    next()
}