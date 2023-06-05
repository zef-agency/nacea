module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        // eslint-disable-next-line camelcase
        cloud_name: env("CLOUDINARY_NAME"),
        // eslint-disable-next-line camelcase
        api_key: env("CLOUDINARY_KEY"),
        // eslint-disable-next-line camelcase
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        uploadStream: {
          folder: env("CLOUDINARY_FOLDER", "NACEA"),
        },
        delete: {},
      },
    },
  },
  // ...
});
