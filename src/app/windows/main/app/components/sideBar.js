module.exports = {

      components: {
      },

      template: `
      <div class="side-bar_menu">
        <h1 class="name_title">
          Nicholas James Shindler
        </h1>
        <transition name='fade-delay' mode="out-in">
          <ul class="side_menu" v-if="!$store.state.menu_view">
            <li><a>Brewing</a></li>
            <li><a>Photography</a></li>
            <li><a>Design</a></li>
            <li><a>Programing</a></li>
            <li><a>Credentials</a></li>
          </ul>
          <h5 class="side_description" v-if="$store.state.menu_view">
          This is some kind of blurb about some kind of bulshit kind of stuff.
          </h5>
        </transition>
      </div>
      `

};

// <li><router-link to="/brewing">Brewing</router-link></li>
// <li><router-link to="/photography">Photography</router-link></li>
// <li><router-link to="/design">Design</router-link></li>
// <li><router-link to="/programing">Programing</router-link></li>
// <li><router-link to="/credentials">Credentials</router-link></li>
