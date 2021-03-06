const bcrypt = require('bcrypt')

const signUpValidation = require('../helper/signupValidation')
const addUser = require('../database/queries/addUser')

const signup = async (req, res) => {
  const data = req.body.values
  const { error } = signUpValidation(data)
  if (!error) {
    const secretPassword = data.password
    const hashPassword = (password) => bcrypt.hash(password, 10)

    data.password = await hashPassword(secretPassword)
    addUser(data)
      .then(response => res.status(200).json({
        message: 'Successfully registered'
      }))
      .catch(err => res.status(400).json({
        message: err.message
      }))
  } else res.status(400).json({ err: error.message })
}

module.exports = signup
