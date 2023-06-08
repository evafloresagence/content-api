/*module.exports = ({ env }) => ({
  upload: {
    provider: "tp-minio",
    providerOptions: {
      accessKey: env("MINIO_ACCESS_KEY", 'admin'),
      secretKey: env("MINIO_SECRET_KEY", 'Desarrollo'),
      bucket: env("MINIO_BUCKET", 'content-api'),
      endPoint: env("MINIO_ENDPOINT", '192.168.205.249'),
      port: parseInt(env("MINIO_PORT", '9020'), 10),
      useSSL: env("MINIO_USE_SSL", false),
      folder: "upload",
      isDocker: true,
      host: env("MINIO_HOST", 'marketing.aica.cu')
    }
  }
});*/
module.exports = ({ env }) => ({
  upload: {
    provider: 'minio-ce',
    providerOptions: {
      accessKey: env("MINIO_ACCESS_KEY", 'admin'),
      secretKey: env("MINIO_SECRET_KEY", 'Desarrollo'),
      bucket: env("MINIO_BUCKET", 'content-api'),
      endPoint: env("MINIO_ENDPOINT", '192.168.205.249'),
      port: parseInt(env("MINIO_PORT", '9020'), 10),
      useSSL: env("MINIO_USE_SSL", false),
      folder: "upload",
      isDocker: true,
      host: env("MINIO_HOST", 'marketing.aica.cu')
    }
  },
});
