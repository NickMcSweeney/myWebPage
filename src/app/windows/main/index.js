module.exports = {

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
