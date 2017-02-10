module.exports = {

    components: {
      
    },

    data: function () {
      return {
        gallerys: [
          {name: "test_001", img_src: "./frontend/images/photo/001.svg", orient_class: "", loc: ""},
          {name: "test_002", img_src: "", orient_class: "", loc: ""},
          {name: "test_003", img_src: "", orient_class: "", loc: ""},
          {name: "test_004", img_src: "", orient_class: "", loc: ""},
        ]
      }
    },

    template: `
      <div class="lib">
        <photo-link v-for="gallery in gallerys" :name="gallery.name" :src="gallery.ing_src" :style="gallery.orient_class"></photo-link>
      </div>
    `
}
