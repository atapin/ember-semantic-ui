/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-semantic-ui',

  included: function (app) {
    app.import('bower_components/semantic-ui/dist/themes/default/assets/fonts/icons.eot');
    app.import('bower_components/semantic-ui/dist/themes/default/assets/fonts/icons.otf');
    app.import('bower_components/semantic-ui/dist/themes/default/assets/fonts/icons.svg');
    app.import('bower_components/semantic-ui/dist/themes/default/assets/fonts/icons.ttf');
    app.import('bower_components/semantic-ui/dist/themes/default/assets/fonts/icons.woff');

    app.import('bower_components/semantic-ui/dist/themes/default/assets/images/flags.png');

    app.import({
      development: 'bower_components/semantic-ui/dist/semantic.css',
      production: 'bower_components/semantic-ui/dist/semantic.min.css'
    });

    app.import({
      development: 'bower_components/semantic-ui/dist/semantic.js',
      production: 'bower_components/semantic-ui/dist/semantic.min.js'
    });
  }
};
