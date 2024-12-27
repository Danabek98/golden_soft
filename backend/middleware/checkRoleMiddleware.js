const jwt = require('jsonwebtoken')

module.exports = function(role){
    return function (req, res, next){
        // если метод запроса options тогда пропускаем
        if(req.method === 'OPTIONS'){
            next()
        }
        try{
            // в header сначала тип токена а потом сам токен, поэтому так отделяем токен
            const token = req.headers.authorization.split(' ')[1]
            if(!token){
                return res.status(401).json({message: "Не авторизован"})
            }
            // Проверка токена на валидность
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            if(decoded.role !== role){
                return res.status(403).json({message: "Нет доступа"})
            }
            req.user = decoded
            next()
        } catch(e){
            res.status(401).json({message: "Не авторизован"})
        }
    }
    
}










