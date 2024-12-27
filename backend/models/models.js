const sequelize = require('../db')
const {DataTypes} = require('sequelize')


// async function main() {
//     await sequelize.sync({ force: true });
//     console.log('Таблицы успешно пересозданы!');
// }
  
// main(); // Вызов функции
  
const User = sequelize.define('user', {
    id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    email:{type: DataTypes.STRING, unique: true},
    password:{type: DataTypes.STRING},
    role:{type:DataTypes.STRING, defaultValue: "USER"}
})

const Basket = sequelize.define('basket', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketDevice = sequelize.define('basket_device', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    device_id: {type: DataTypes.INTEGER},
    basket_id: {type: DataTypes.INTEGER, allowNull:false}
})

const Device = sequelize.define('device', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING, allowNull:false},
    color: {type: DataTypes.STRING, allowNull:false},
    material: {type: DataTypes.STRING, allowNull:false},
    sale: {type: DataTypes.INTEGER, defaultValue: 0},
    gift_id: {type: DataTypes.INTEGER},
    discreption: {type: DataTypes.STRING, allowNull: false},
    in_stock: {type: DataTypes.INTEGER},
    category_id: {type: DataTypes.INTEGER},
    weight: {type: DataTypes.INTEGER, allowNull: false},
    size: {type: DataTypes.STRING, allowNull: false}
})

const RecentlyWatched = sequelize.define('recently_watched', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    device_id:{type: DataTypes.INTEGER, allowNull:false},
    time: {type: DataTypes.DATE, allowNull: false}
})

const Comment = sequelize.define('comment', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    user_id:{type: DataTypes.INTEGER, allowNull:false},
    text: {type: DataTypes.STRING},
    rating: {type: DataTypes.INTEGER}
})

const Category = sequelize.define('category', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING, allowNull:false},
    img: {type: DataTypes.STRING, allowNull:false},
})

const Gift = sequelize.define('gift', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    device_id: {type: DataTypes.INTEGER},
    name:{type: DataTypes.STRING, allowNull:false}
})

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketDevice)
BasketDevice.belongsTo(Basket)

BasketDevice.hasMany(Device)
Device.belongsTo(BasketDevice)

Category.hasMany(Device)
Device.belongsTo(Category)

Gift.hasMany(Device)
Device.belongsTo(Gift)

User.hasMany(RecentlyWatched)
RecentlyWatched.belongsTo(User)

User.hasMany(Comment)
Comment.belongsTo(User)

Device.hasMany(Comment)
Comment.belongsTo(Device)

module.exports = {
    User,
    Basket,
    BasketDevice,
    Device,
    RecentlyWatched,
    Comment,
    Category,
    Gift
}