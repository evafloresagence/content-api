module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        /*host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'aica_marketing'),
        username: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD', '1234'),*/
        host: env('DATABASE_HOST', '10.25.27.74'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'marketing'),
        username: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD', 'postgres1*aica!'),
        schema: env('DATABASE_SCHEMA', 'public'), // Not Required*/
        /*ssl: {
          rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
        },*/
      },
      options: {},
    },
  },
});
