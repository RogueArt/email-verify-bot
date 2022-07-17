import { Database } from '@devsnowflake/quick.db'
import config from '../../config.js'
import { getSevenDaysFromNow } from '../utils/lib.js'

// Create a new database with the following path
const { dbPath } = config
const db = new Database()

// Wrapper to help simplify database usage
class DatabaseHelper {
  constructor(db) {
    this.db = db
  }

  hasEmail(username) {
    return this.db.has(`${username}.email`)
  }

  addUserAccount(username, email, authCode) {
    this.db.set(`${username}.email`, email)
    this.db.set(`${username}.isActive`, false) // Mark them as inactive
    this.db.set(`${username}.authCode`, authCode)
    // Set code to expire in 7 days from now
    this.db.set(`${username}.expiresAt`, getSevenDaysFromNow())
  }

  getAuthCode(username) {
    return this.db.get(`${username}.authCode`)
  }

  setAccountActiveness(username, isActive) {
    this.db.set(`${username}.isActive`, isActive)
  }
}

export default new DatabaseHelper(db)
