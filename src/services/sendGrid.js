import sgMail from '@sendgrid/mail'
const { SENDGRID_API_KEY, SENDER_EMAIL, SENDER_TEMPLATE_ID } = process.env
sgMail.setApiKey(SENDGRID_API_KEY)

// REVIEW: Change Object to be a more descriptive type
/**
 * 
 * @param {string} recipientEmail
 * @param {number} authCode 
 * @returns {Object}
 */
export function createEmailMsg(recipientEmail, authCode) {
  return {
    to: recipientEmail, // Recipient
    from: SENDER_EMAIL, // Sender
    templateId: SENDER_TEMPLATE_ID, 
    dynamicTemplateData: { authCode }
  }
}

/**
 * Create an auth code with N digits
 * @param {number} numDigits Number of digits in auth code
 * @returns {number} Returns an N-digit code
 */
export function generateAuthCode(numDigits) {
  if (numDigits <= 0) throw new Error(`Number of digits cannot be 0 or less. Received numDigits=${numDigits}`)
  const minValue = Math.pow(10, numDigits - 1)
  const maxValue = minValue * 9

  return Math.floor(minValue + Math.random() * maxValue)
}

export default sgMail
