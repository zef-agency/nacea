// eslint-disable-next-line import/no-anonymous-default-export
export default ({ env }) => ({
  proxy: true,
  url: env("APP_URL"), // Sets the public URL of the application.
  app: {
    keys: env.array("APP_KEYS"),
  },
});

// eslint-disable-next-line import/no-anonymous-default-export
/* export default ({ env }) => ({
  url: env("RENDER_EXTERNAL_URL"),
}); */
