module.exports = app => {
  class Page extends app.Controller {
    async index(ctx) {
      const { path } = ctx;
      const pagesMap = {
        "/": "index",
        "/chat": "chat",
        "/spider": "spider"
      };

      await ctx.render(pagesMap[path], { global: JSON.stringify({ user: null }) });
    }
  }

  return Page;
};
