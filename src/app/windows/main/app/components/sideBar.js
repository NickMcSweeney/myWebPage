window.components = window.components || {};
window.components.sideBar = {

      components: {
      },

      template: `
      <div class="side-bar_menu">
        <h1 class="name_title">
          Nicholas James Shindler
        </h1>
        <transition name='fade-delay' mode="out-in">
          <ul class="side_menu" v-if="!$store.state.menu_view">
            <li><a href="">Brewing</a><br></li>
            <li><a href="">Photography</a><br></li>
            <li><a href="">Design</a><br></li>
            <li><a href="">Programing</a><br></li>
            <li><a href="">Credentials</a></li>
          </ul>
          <h5 class="side_description" v-if="$store.state.menu_view">
          This is some kind of blurb about some kind of bulshit kind of stuff.
          </h5>
        </transition>
      </div>
      `

};
