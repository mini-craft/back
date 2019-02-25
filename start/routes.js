'use strict'

const Route = use('Route')
const link = '/api/v1'

Route.group(() => {
  Route.post('register', 'UserController.register')
  Route.get('verify/:token', 'UserController.verify')
  //Route.post('/login', 'UserController.login')
  /*Route.post('/update', 'UserController.update')
  Route.post('/password', 'UserController.updatePasswordByToken')*/
}).prefix(`${ link }/security/`).formats(['json'])