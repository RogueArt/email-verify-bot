import { Database } from '@devsnowflake/quick.db'
import config from '../../config.js'

// Create a new database with the following path
const { dbPath } = config
export default new Database()
