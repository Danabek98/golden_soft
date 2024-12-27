const ApiError = require('../error/apiError')
// для хэширование данных
const bcrypt = require('bcrypt')
// для token
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')
const { configDotenv } = require('dotenv')
// функция для создание токена из данных, указываем как шифровать, и сколько токен живет
const generateJwt = (id, email, role) =>{
    return jwt.sign(
        {id, email, role}, 
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}
 
class UserController{
    async registration(req, res, next){
        // получаем из тело запроса данные
        const {email, password, role} = req.body
        // если не указан пароль или емаил возвращаем ошибку
        if(!email || !password){
            return next(ApiError.badRequest('некорректный емаил или пароль'))
        }
        // проверяем нету ли уже зарегистрированных с этим емаилом
        const candidate = await User.findOne({where:{email}})
        if(candidate){
            return next(ApiError.badRequest('Пользователь с таким емаилом уже существует'))
        }
        // если проблем нету начинаем хешировать
        const hashPassword = await bcrypt.hash(password, 5)
        // создаем пользователя
        const user = await User.create({email, role, password: hashPassword})
        const basket = await Basket.create({userId: user.id})
        // создаем токен 
        const token = generateJwt(user.id, user.email, user.role)
        res.json({token})
    }

    async login(req, res, next){
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if(!user){
            return next(ApiError.badRequest('Пользователь не наиден'))
        }
        // сравниваем два пароля
        let comparePassword = bcrypt.compareSync(password, user.password)
        if(!comparePassword){
            return next(ApiError.badRequest('Неверный пароль'))
        }
        // создаем токен 
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    async check(req, res, next){
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
}

module.exports = new UserController()