"use strict";
const Vue = require("vue/dist/vue.js");
const VueRouter = require('vue-router');

function registerComponents(components) {
  Object.keys(components).forEach(componentName => {
    Vue.component(componentName, components[componentName]);
  });
}

function buildRouter(json) {
  const routes = _parseRoutes(json);
  return new VueRouter({ routes });
}

function _parseRoutes(routes) {
  return routes.map(route => {
    if (route.component) {
      route.component = Vue.component(route.component);
      if (!route.component) console.warn(`No component found for route ${route.path}`);
      if (route.children) {
        // recursive for child routes...
        route.children = _parseRoutes(route.children);
      }
    }
    console.log(route);
    return route;
  });
};

module.exports = {
  registerComponents,
  buildRouter,
};
