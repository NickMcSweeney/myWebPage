module.exports = {

  data: function () {
    return {
      img_source: "frontend/images/photo/" + this.$store.state.gallery + ".png"
    }
  },

  template: `
    <div>
      <h1>hello world</h1>
      <img :src=img_source>
    </div>
  `
}
