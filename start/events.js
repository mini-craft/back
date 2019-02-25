'use strict'

const Event = use('Event')
const Env = use('Env')
const Mail = use('Mail')

const Encryption = use('Encryption')

Event.on('user::created', async (user) => {


  await Mail.send('emails.subscription', { token: use('Encryption').base64Encode(user.token) }, message => {
    message.from(Env.get('MAIL_USERNAME'))
    message.to(user.user.email)
    message.subject('Bienvenue chez MiniCraft')
  }).catch(console.error)
})