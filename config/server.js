module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS", [
      "a56A3tQiHZUI35pMSQQo8g==",
      "4eUPSM/0qEs88vBS2MdhvA==",
      "g6VAXswsjhxhBop7RJsocQ==",
      "9Cf4iI/KT9Ce2gldx/rMmQ==",
    ]),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
