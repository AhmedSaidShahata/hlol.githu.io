module.exports = {
  publicPath:'/hlol.githu.io/',
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/scss/shared/variables.scss";
          @import "@/scss/shared/mixins.scss";
          @import "@/scss/shared/functions.scss";
        `
      }
    }
  }
}
