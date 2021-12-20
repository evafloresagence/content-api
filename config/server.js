module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', '9090'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'e2094a5cedc0c0581fab009d1e7e2af9'),
    },
  },
  url: 'http://localhost:9090'//'http://marketing.aica.cu'
});
