'use strict'

const Persona = use('Persona')
const Encryption = use('Encryption')

class UserController {

  async register ({ request, auth, response }) {
    const payload = request.only(['username', 'email', 'password', 'password_confirmation'])

    const user = await Persona.register(payload)
    const token = await auth.newRefreshToken().generate(user)

    return response.status(200).json({ token })
  }

  async verify ({ params, response }) {
    const { token } = params
    await Persona.verifyEmail(use('Encryption').base64Decode(token))
  
    return response.json(200).json({ status: 'active' })
  }

  /*async login ({ request, auth, response }) {
    const payload = request.only(['uid', 'password'])
    const user = await Persona.verify(payload)

    const token = await auth.login(user)
    response.status(200).json({ token })
  }

  async update ({ request, auth, response }) {
    const payload = request.only(['firstname', 'email'])
    const { user } = auth
    const u = await Persona.updateProfile(user, payload)

    return response.json(200).json({ u })
  }

  async updatePassword ({ request, auth, response }) {
    const payload = request.only(['old_password', 'password', 'password_confirmation'])
    const { user } = auth
    const u = await Persona.updatePassword(user, payload)

    return response.json(200).json({ u })
  }

  async updatePasswordByToken ({ request, params, response }) {
    const { token } = params
    const payload = request.only(['password', 'password_confirmation'])
  
    const user = await Persona.updatePasswordByToken(token, payload)

    return response.status(200).json({ user })
  }



  async verifyEmail ({ params, session, response }) {
    const user = await Persona.verifyEmail(params.token)
  
    //Send data in json
  }*/

}

module.exports = UserController
