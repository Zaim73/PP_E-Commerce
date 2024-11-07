const {Product, Category} = require('../models');
const {Op} = require('sequelize');
const formatCurrency = require('../helpers/formatCurrency');
const bcrypt = require('bcryptjs')

exports.products = async (req, res) => {
 let {search} = req.query;
 try {
  if (!search) {
   search = '';
  }
  const data = await Product.findAll({
   include: {
       model: Category,  
       required: false  
   },
   order: [["price", "ASC"]],
   where: {
       name: {
           [Op.iLike]: `%${search}%` 
       }
   }
});
  res.render({data, formatCurrency, msg: ''})
 } catch (error) {
  console.log("🚀 ~ exports.products= ~ error:", error)
  res.send(error.message)
 }
}

exports.addProducts = async (req, res) => {
 try {
  const data = await Product.findAll()
  res.render('addProducts', {data})
 } catch (error) {
  console.log("🚀 ~ exports.addProducts= ~ error:", error)
  res.send(error.message)
 }
}

exports.postProducts = async (req, res) => {
 try {
  const {name, price, stock, description, imgUrl, CategoryId} = req.body;
  if (!name || !price || !stock || !description || !imgUrl) {
   return res.send({ msg: 'Field cannot be empty!' });
   }
  await Product.create({name, price, stock, description, imgUrl, CategoryId})
  res.redirect('/products')
 } catch (error) {
  console.log("🚀 ~ exports.postProducts= ~ error:", error)
  res.send(error.message)
 }
}

exports.buy = async (req, res) => {
 try {
  const {ProductId} = req.params;
  const {name, price, stock, description, imgUrl, CategoryId} = req.body;
  if (!name && !price && !stock && !description && !imgUrl && !CategoryId) {
   return res.send({ msg: 'Please fiil the field!' });
}
  await Product.findByPk(ProductId)
  if (!data) {
   return res.send({ msg: 'products not found!' });
}
  await Product.update({name, price, stock, description, imgUrl, CategoryId})
  res.redirect('/products')
 } catch (error) {
  console.log("🚀 ~ exports.buy= ~ error:", error)
  res.send(error.message)
 }
}

exports.update = async (req, res) => {
 try {
  const {id} = req.params;
  const data = await Product.findByPk(id)
   // res.send(data)
   if (!data) {
    return res.send({ msg: 'product is not found!' });
}
  res.render({data})  
 } catch (error) {
  console.log("🚀 ~ exports.update= ~ error:", error)
  res.send(error.message)
 }
}

exports.postUpdate = async (req, res) => {
 try {
  const {ProductId} = req.params;
  const {name, price, stock, description, imgUrl, CategoryId} = req.body;
  if (!name && !price && !stock && !description && !imgUrl && !CategoryId) {
   return res.send({ msg: 'Please fiil the field!' });
}
  await Product.findByPk(ProductId)
  if (!data) {
   return res.send({ msg: 'product is not found!' });
}
  await Product.update({name, price, stock, description, imgUrl, CategoryId})
  res.redirect('/products');
 const data = await Product.findByPk(id)
 res.render({data})  
 } catch (error) {
  console.log("🚀 ~ exports.update= ~ error:", error)
  res.send(error.message)
 }
}

exports.deleteProduct = async (req, res) => {
 try {
  const {id} = req.params;
  await Product.findByPk(id)
  if (!data) {
   return res.send({ msg: 'Product is not found' });
}
  await Product.destroy({
   where: {id}
  })
  res.redirect('/products')
 } catch (error) {
  console.log("🚀 ~ exports.delete ~ error:", error)
  res.send(error.message)
  
 }
}