"use strict";

const VueRouter = require("vue-router");
const Vue = require("vue/dist/vue.js");

function registerComponents(components) {
  Object.keys(components).forEach(componentName => {
    Vue.component(componentName, components[componentName]);
  });
}

function buildRouter(json) {
  let routes = json.map(route => {
    if (route.component) {
      route.component = Vue.component(route.component);
      if (!route.component) console.warn(`No component found for route ${route.path}`);
    }
    return route;
  });

  return new VueRouter({ routes });
}

function registerVue() {
  if (window && window.CONFIG.debug && window.Vue && window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
    window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit("init", Vue);
  }
}

function registerVuex(store) {
  if (window && window.CONFIG.debug && window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
    if (!store) throw new Error("You must pass an instance of Vuex to registerVuex");
    window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit("vuex:init", store);
  }
}

module.exports = {
  registerComponents,
  buildRouter,
  registerVue,
  registerVuex
};
