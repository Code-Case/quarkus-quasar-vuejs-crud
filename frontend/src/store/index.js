import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {

    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING
  });
  /* eslint-disable global-require */
  /*
  if (process.env.DEV && module.hot) {
    module.hot.accept(["./news"], () => {
      const newNews = require("./news").default;
      Store.hotUpdate({ modules: { news: newNews } });
    });
  }
  */

  return Store;
}
