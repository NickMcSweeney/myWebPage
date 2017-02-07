module.exports = {

    components: {
      'photo-link': require("./links.js"),
    },

    data: function () {
      return {
        gallerys: [
          {name: "", img_src: "", orient_class: "", loc: ""},
        ]
      }
    },

    template: `
      <div class="lib">
        <photo-link v-for="gallery in gallerys" :name="gallery.name" :src="gallery.ing_src" :style="gallery.orient_class"></photo-link>
      </div>
    `
}
