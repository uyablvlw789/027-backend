module.exports = {
  seo: {
    enabled: true,
  },
  "upload-plugin-cache": {
    enabled: true,
    config: {
      maxAge: 86_400_000,
      dynamic: true,
      lruCache: {
        max: 1000,
      },
    },
  },
};
