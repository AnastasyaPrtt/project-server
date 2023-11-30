const User = require('../../models/user.models')

const create = async (req, res) => {
  try {
    const { email, role } = req.body

    const user = await User.create({
      email,
      role,
    })
    return res.json({ user })
  } catch (error) {
    return res.json('ошибка на сервере')
  }
}

const register = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({
      where: { email },
    })

    if (user || !user.password) {
      return res.json('Вам следует зарегистрироваться')
    }
  } catch (error) {}
}

const login = async (req, res) => {
  try {
    const { email } = req.body

    const user = User.findOne({
      where: { email },
    })
    return res.json({ user })
  } catch (error) {
    return res.sendStatus(500)
  }
}

module.exports = { create, register, login }
