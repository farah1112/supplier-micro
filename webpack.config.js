const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'suppliermicro',  // host 
  filename: "remoteEntry.js",

  exposes: {
    './RemoteApp': './src/app/remote/remote.component.ts' // accessible via l host 
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
