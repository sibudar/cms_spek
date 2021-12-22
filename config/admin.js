module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b4d13c53d420c3d59e97301856e8f08b'),
  },
});
