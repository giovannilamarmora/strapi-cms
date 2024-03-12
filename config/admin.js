module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "+eAHi8KvmMfhGC1WRTNDWQ=="),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT", "q7zQzKdX/mw/ENu1THrBUQ=="),
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT", "1U5B4SkLMzupPdlMmom+3w=="),
    },
  },
  flags: {
    nps: env.bool("FLAG_NPS", true),
    promoteEE: env.bool("FLAG_PROMOTE_EE", true),
  },
});
