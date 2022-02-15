'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('bulky')
      .service('myService')
      .getWelcomeMessage();
  },
};
