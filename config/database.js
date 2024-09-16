module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ep-wild-recipe-a47hzyum.us-east-1.aws.neon.tech'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'verceldb'),
      user: env('DATABASE_USERNAME', 'default'),
      password: env('DATABASE_PASSWORD', 'YN7XTmcehwz5'),
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // Jika menggunakan SSL
      },
    },
    debug: false,
  },
});
