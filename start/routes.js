'use strict'

const Route = use('Route')
const link = 'api/v1/'

Route.group(() => {
  Route.get('/', 'UserController.index')

}).prefix(`${ link }`).formats(['json'])