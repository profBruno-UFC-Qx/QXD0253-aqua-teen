module.exports = ({ env }) => ({
  'users-permissions': { config: { jwtSecret: env('JWT_SECRET'), jwt: { expiresIn: '8h' } } },
  upload: { config: { sizeLimit: 5 * 1024 * 1024, breakpoints: { small: 500, medium: 750, large: 1000 } } }
});
