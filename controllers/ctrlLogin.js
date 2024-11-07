const {User} = require('../models')

exports.home = async (req, res) => {
 try {
  res.render('home') 
 } catch (error) {
  console.log("🚀 ~ exports.home= ~ error:", error)
  res.send(error.message)
 }
}

exports.login = async (req, res) => {
 try {
 res.render('home') 
 } catch (error) {
  console.log("🚀 ~ exports.login= ~ error:", error)
  res.send(error.message)
 }
}

exports.loginPage = async (req, res) => {
 try {
 const {name, password} = req.body;
 const user = await User.findOne({
  where: {name}
 })
 res.redirect('/products')
 } catch (error) {
  console.log("🚀 ~ exports.loginPage= ~ error:", error)
  res.send(error.message)
 }
}

exports.register = async (req, res) => {
 try {
 res.render('register')  
 } catch (error) {
  console.log("🚀 ~ exports.register= ~ error:", error)
  res.send(error.message)
 }
}

exports.regisPage = async (req, res) => {
 try {
   const {name, gender, email, password} = req.body;
   const newUser = await User.create({name, gender, email, password})
   res.redirect('/login')
 } catch (error) {
  console.log("🚀 ~ exports.regisPage= ~ error:", error)
  res.send(error.message)
 }
}

exports.logOut = async (req, res) => {
 try {
  req.session.destroy(function (err) {
    if (err) {
      return res.send(err.message);
    }
    return res.redirect('/login');
  });
} catch (error) {
  console.log("🚀 ~ exports.logOut= ~ error:", error)
  res.send(error.message);
}
}