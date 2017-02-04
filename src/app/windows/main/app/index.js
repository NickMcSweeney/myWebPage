module.exports = {

      components: {
        'main-menu': require("./components/menu.js"),
        'side-bar': require("./components/sideBar.js"),
        'cover-panel': require("./components/coverPanel.js"),
        'cover-frame': require("./components/coverFrame.js"),
        'link-bar': require("./components/linkBar.js")
      },

      template: `
      <div class="welcome_panel">

        <div class="side-bar" :style="this.$store.state.style_width">
          <side-bar></side-bar>
          <cover-panel></cover-panel>
        </div>
        <transition name="fade">
          <div class="hidden_menu" v-if="$store.state.menu_view">
            <main-menu></main-menu>
            <div id="btm-bar" align="center">
              <link-bar></link-bar>
            </div>
          </div>
        </transition>
      </div>
      `
};
