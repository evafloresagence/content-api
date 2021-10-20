module.exports = ({ env }) => ({
  upload: {
    provider: "tp-minio",
    providerOptions: {
      accessKey: env("MINIO_ACCESS_KEY"),
      secretKey: env("MINIO_SECRET_KEY"),
      bucket: env("MINIO_BUCKET"),
      endPoint: env("MINIO_ENDPOINT"),
      port: parseInt(env("MINIO_PORT"), 10),
      useSSL: env("MINIO_USE_SSL", false),
      folder: "upload",
      isDocker: true,
      host: env("MINIO_HOST")
    }
  }
});
