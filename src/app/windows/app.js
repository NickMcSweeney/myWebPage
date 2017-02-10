const Vue = require("vue/dist/vue.js");
const Vuex = require("vuex");
const VueRouter = require('vue-router');
const startup = require("../frontend/scripts/vueStartup.js");

startup.registerComponents(require('../components'));
startup.registerComponents(require("./photography/components"));
startup.registerComponents(require("./main/components"));
startup.registerComponents(require("./design/components"));
startup.registerComponents(require("./brewing/components"));
startup.registerComponents(require("./code/components"));
startup.registerComponents(require("./credentials/components"));

Vue.use(Vuex);
Vue.use(VueRouter);
const store = new Vuex.Store(require("../store"));
const router = startup.buildRouter(require('../routes.json'));
const routerSync = require('vuex-router-sync');

Vue.use(require("@welocalize/useful-shit").vue);

return new Vue({
  el: '#app',

  router,

  store,

  template: `
      <transition name="component-fade" mode="out-in">
        <router-view></router-view>
      </transition>
  `
});
  // <router-view></router-view>
// <component :is="$store.state.window"></component>
