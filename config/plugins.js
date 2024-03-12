module.exports = ({ env }) => ({
  // ...
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET", "+dsOg7UX7s6R2YowItq7nA=="),
      jwt: {
        expiresIn: "7d",
      },
    },
  },
  // ...
});
