/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  appDirectory: 'app',
  browserBuildDirectory: 'public/build',
  publicPath: '/build/',
  serverBuildDirectory: 'build',
  devServerPort: 8002,
  future: {
    v2_errorBoundary: true,
    v2_routeConvention: true,
  },
  serverDependenciesToBundle:['axios']
};
