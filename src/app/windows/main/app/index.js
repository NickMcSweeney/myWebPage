window.components = window.components || {};
window.components.welcome = {

      components: {
        'main-menu': window.components.mainMenu,
        'side-bar': window.components.sideBar,
        'cover-panel': window.components.coverPanel,
        'cover-frame': window.components.coverFrame
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
          </div>
        </transition>

      </div>
      `
};
