'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('Mailer')
      .service('myService')
      .getWelcomeMessage();
  },
};
