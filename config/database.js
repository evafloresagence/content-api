module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '192.168.208.86'),
        port: env.int('DATABASE_PORT', '5432'),
        database: env('DATABASE_NAME', 'marketing'),
        username: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD', 'postgres1*aica!'),
        /*ssl: {
          rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
        },*/
      },
      options: {},
    },
  },
});
