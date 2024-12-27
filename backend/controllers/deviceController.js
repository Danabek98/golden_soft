const {Device} = require('../models/models')
const ApiError = require('../error/apiError')
const uuid = require('uuid')
const path = require('path')

class DeviceController{
    async create(req, res, next){
        //при неудачной попытке catch дает ошибку
        try{
            // получаем данные из тело запроса
            const {name,price, color, material, sale, gift_id, discreption, in_stock, category_id, weight, size} = req.body
            // получаем фотографию
            const {img} = req.files
            // даем название фотографии
            let fileName = uuid.v4() + ".jpg"
            // перетаскиваем в папку статик
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            // добавляем в БД
            const device = await Device.create({name, price, img:fileName, color, material, sale, gift_id, discreption, in_stock, category_id, weight, size})
            // Отправляем результат обратно
            return res.json(device)

        } catch(e){
            // в случае ошибки даем badrequest
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req, res){
        let {category_id, limit, page} = req.query
        // если не указано страница тогда 1
        page = page || 1
        // если не указано лимита тогда 9
        limit = limit || 9
        // если другая страница
        let offset = page * limit -limit
        let devices;
        //если не указана категория, findAndCountAll возвращает общий количество товаров потом товары
        if (!category_id){
            devices = await Device.findAndCountAll({limit, offset})
        } 
        // если указана категория
        if (category_id){
            devices = await Device.findAndCountAll({where:{category_id}, limit, offset})
        }
        return res.json(devices)
    }
    async getOne(req, res){
        const {id} = req.params
        const device = await Device.findOne({offsetwhere:{id}})
        return res.json(device)
    }

}

module.exports = new DeviceController()