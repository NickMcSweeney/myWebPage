module.exports = {

  state: {
    menu_view: false,
    style_width: "width:100vw",
    window: "welcome",
    galleries: true,
    gallery: false,
    show_lib: "photo-lib",
    gallery: "gallery_001",

    projects: {
      projectList: [
        {id: "", }
      ]
    }
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
