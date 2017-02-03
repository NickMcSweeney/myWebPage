Vue.use(Vuex);
window.Web = window.Web || {};

Web.store = new Vuex.Store({
  state: {
    menu_view: false,
    style_width: "width:100vw"
  },

  mutations: {
    toggle_menu: function(state, value) {
      state.menu_view = value;
    },
    adj_width: function(state, value) {
      state.style_width = value;
    },
  }

});
