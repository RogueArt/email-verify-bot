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
