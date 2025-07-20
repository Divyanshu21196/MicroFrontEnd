const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

remotes: {
  'feature': 'https://micro-frontend-angular-guide-git-main-divyanshu21196s-projects.vercel.app/remoteEntry.js'
},

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
