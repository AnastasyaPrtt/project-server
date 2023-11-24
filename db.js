require('dotenv').config()
import { Sequelize } from 'sequelize'

const db = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USER,
	process.env.DB_PASSWORD,
	{
		dialect: 'postgres',
		logging: env.DB_LOG ? console.log : false,
		host: process.env.DB_HOST,
		port: process.env.DB_PORT
	}
)
export default db

export function openConnection() {
	return db.authenticate()
}

export function closeConnection() {
	return db.close()
}