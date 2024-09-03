module.exports = {
  appUrl: '/subscriptions/overview',
  debug: true,
  useProxy: true,
  proxyVerbose: true,
  sassPrefix: '.subscriptions-dashboard-ui, .subscriptionsDashboardUi',
  /**
   * Change to false after your app is registered in configuration files
   */
  interceptChromeConfig: false,
  /**
   * Add additional webpack plugins
   */
  plugins: [],
  _unstableHotReload: process.env.HOT === 'true',
  moduleFederation: {
    exclude: ['react-router-dom'],
    shared: [
      {
        'react-router-dom': {
          singleton: true,
          import: false,
          version: '^6.8.0',
        },
      },
    ],
  },
};
