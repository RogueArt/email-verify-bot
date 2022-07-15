
export const AUTH_CODE_NUM_DIGITS = 6
export const ERROR_MSGS = {
  // Validate email
  insufficientArgs: 'Please provide a valid email address in order to be verified!',
  invalidEmailFormat: 'Please provide a correctly formatted email address in order to be verified!',
  unallowedDomain: (allowedDomains) => `Please provide an email address that ends with any of the following domains: \`${allowedDomains.join(', ')}\``,
  emailAlreadyRegistered: (email) => `Unable to verify you. Email "${email}" has already been registered with an account.`,
  couldNotSendEmail: (email) => `Unable to send email to ${email}. Please contact the admins for additional support.`,

  // Validate auth code
  authCodeNonNumeric: 'Please provide only digits from 0-9 in your auth code!',
  authCodeLengthMismatch: `Please provide a valid ${AUTH_CODE_NUM_DIGITS}-digit auth code!`,
  authCodeCodeMismatch: 'You provided an invalid auth code. Please try again using \`!verify <code>\`!',
  couldNotFindUser: (username) => `Error. Could not find user ${username} from Discord. Contact the admins for help.`,
  couldNotFindRole: 'Error. Could not find the verified role ID from Discord. Contact the admins for help',
  couldNotAddRole: 'Error, could not add verified role to your account. The admins have been contacted.',
}
export const SUCCESS_MSGS = {
  sentVerificationEmail: (email) => `Sent a verification email to ${email}! Verify using \`!verify <code>\`. Please check if your spam folder if you haven't received it yet.`,
  successfulVerification: (username) => `Thanks ${username}! You've now been verified and can access the server!`,
}