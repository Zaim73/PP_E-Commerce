const {Product} = require('../models');

exports.products = async (req, res) => {
 try {
  const data = await findAll;
  res.render({data})
 } catch (error) {
  console.log("🚀 ~ exports.products= ~ error:", error)
  res.send(error.message)
 }
}

exports.addProducts = async (req, res) => {
 try {
  res.render('addProducts')
 } catch (error) {
  console.log("🚀 ~ exports.addProducts= ~ error:", error)
  res.send(error.message)
 }
}

exports.postProducts = async (req, res) => {
 try {
  const {name, price, stock, description, imgUrl, CategoryId} = req.body;
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
  await Product.findByPk(ProductId)
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
  await Product.findByPk(ProductId)
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
  await Product.destroy({
   where: {id}
  })
  res.redirect('/products')
 } catch (error) {
  console.log("🚀 ~ exports.delete ~ error:", error)
  res.send(error.message)
  
 }
}