module.exports = {
  
      components: {
      },

      props: [],

      data: function () {
        return {
          show: true,
        }
      },

      methods: {
        pushCover() {
          console.log("hello")
          this.$store.commit('toggle_menu', this.show)
          this.show = false
          this.$store.commit('adj_width', "width:16vw")
        },
      },

      template: `
      <div id="cont" :style="this.$store.state.style_width">
        <transition name="slide">
          <img v-if="show" class="background-img" src="frontend/images/Cover_photo.png">
        </transition>
        <div id="hide">
          <transition name="slide-fade">
            <p v-if="show" @click="pushCover" class="prompt">click to enter . . . </p>
          </transition>
          <transition name="slide-fade">
            <img v-if="show" class="cvr-arrow" @click="pushCover" src="frontend/icons/arrow.png">
          </transition>
        </div>

      </div>
      `

};
