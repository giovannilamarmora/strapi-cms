module.exports =  ({ env }) => ({
	connection: {
		client: 'mysql',
		connection: {
		host: env('DATABASE_HOST', 'mysqldb'),
			port: env.int('DATABASE_PORT', 3306),
			database: env('DATABASE_NAME', 'strapi'),
			user: env('DATABASE_USERNAME', '4dm1nR007'),
			password: env('DATABASE_PASSWORD', '18IlI64uF&MY'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
