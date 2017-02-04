const Vue = require("vue/dist/vue.js");
const Vuex = require("vuex");

Vue.use(Vuex);
const store = new Vuex.Store(require("../store"));

Vue.use(require("@welocalize/useful-shit").vue);

return new Vue({
  el: '#app',

  components: {
    'welcome': require("./main/app/index.js")
  },

  // store: Web.store,
  store,

  template: `
    <welcome></welcome>
  `
});
