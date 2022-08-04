'use strict'
import nodemailer from 'nodemailer'
import config from '../../config.js'

const { emailConfig } = config

const transporter = nodemailer.createTransport({
    service: process.env.SENDER_SERVICE,
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.SENDER_PASS, // generated ethereal password
    },
  })

async function sendAuthEmail(authCode, email) {
  return await transporter.sendMail({
    from: emailConfig.from, // sender address
    to: email, // list of receivers
    subject: emailConfig.subject, // Subject line
    html: '<html><b>Hello world to you good sir!</b></html>', // html body
  })
}
