module.exports = {

    props: ['name', 'source', 'imgStyle'],

    methods: {
      toggle_gallery () {
        console.log(this.$store.state.gallery)
        this.$store.state.gallery = this.name
        console.log(this.$store.state.gallery)
      }
    },

    template: `
    <div @click="toggle_gallery">
      <router-link to="/photography/gallery">
        <!--  -->
          <img :class="imgStyle" :name="name" :src="source"></img>
        <!--  -->
      </router-link>
    </div>
    `
}
