'use strict'
import nodemailer from 'nodemailer'
import config from '../../config.js'

import ejs from 'ejs'
import fs from 'fs'
import url from 'url'
const { emailConfig } = config

const transporter = nodemailer.createTransport({
  service: process.env.SENDER_SERVICE,
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.SENDER_PASS, // generated ethereal password
  },
})

function getEmailTemplate(authCode) {
  // Get file path
  const templateURL = new URL(emailConfig.emailTemplatePath, import.meta.url)
  const filePath = url.fileURLToPath(templateURL.href)

  // Read and template the HTML
  const htmlContent = fs.readFileSync(filePath, 'utf-8')
  const htmlRenderized = ejs.render(htmlContent, { authCode })
  return htmlRenderized
}

export async function sendAuthEmail(authCode, email) {
  return await transporter.sendMail({
    from: emailConfig.from, // sender address
    to: email, // list of receivers
    subject: emailConfig.subject, // Subject line
    html: getEmailTemplate(authCode), // html body
  })
}