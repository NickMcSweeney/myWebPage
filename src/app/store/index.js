module.exports = {

  state: {
    menu_view: false,
    style_width: "width:100vw",
    window: "photography",
    galleries: true,
    gallery: false,
    gallery_show: ""
  },

  mutations: {
    toggle_menu: function(state, value) {
      state.menu_view = value;
    },
    adj_width: function(state, value) {
      state.style_width = value;
    },
  }

}
