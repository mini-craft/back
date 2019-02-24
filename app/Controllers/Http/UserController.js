'use strict'

class UserController {

  async index ({ response }) {
    return response.status(200).json({
      data: 'Hello, World!'
    })
  } 

}

module.exports = UserController
