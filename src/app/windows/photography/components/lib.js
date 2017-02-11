module.exports = {

    components: {

    },

    data: function () {
      return {
        gallerys: [
          {name: "test_001", img_src: "frontend/images/photo/001.svg", orient_class: "landscape", style: "sm_lan"},
          {name: "test_002", img_src: "frontend/images/photo/002.svg", orient_class: "portrait", style: "lg_port"},
          {name: "test_003", img_src: "frontend/images/photo/003.png", orient_class: "portrait", style: "lg_port"},
          {name: "test_004", img_src: "frontend/images/photo/004.png", orient_class: "landscape", style: "sm_lan"},
          {name: "test_005", img_src: "frontend/images/photo/003.png", orient_class: "portrait", style: "lg_port"},
          {name: "test_006", img_src: "frontend/images/photo/002.svg", orient_class: "portrait", style: "lg_port"},
          {name: "test_007", img_src: "frontend/images/photo/004.png", orient_class: "landscape", style: "sm_lan"},
          {name: "test_008", img_src: "frontend/images/photo/001.svg", orient_class: "landscape", style: "sm_lan"},
          {name: "test_009", img_src: "frontend/images/photo/002.svg", orient_class: "portrait", style: "lg_port"},
          {name: "test_010", img_src: "frontend/images/photo/004.png", orient_class: "landscape", style: "sm_lan"},
          {name: "test_011", img_src: "frontend/images/photo/001.svg", orient_class: "landscape", style: "sm_lan"},
          {name: "test_012", img_src: "frontend/images/photo/003.png", orient_class: "portrait", style: "lg_port"},
          {name: "test_013", img_src: "frontend/images/photo/002.svg", orient_class: "portrait", style: "lg_port"},
          {name: "test_014", img_src: "frontend/images/photo/001.svg", orient_class: "landscape", style: "sm_lan"},
          {name: "test_015", img_src: "frontend/images/photo/004.png", orient_class: "landscape", style: "sm_lan"},
          {name: "test_014", img_src: "frontend/images/photo/003.png", orient_class: "portrait", style: "lg_port"},
        ]
      }
    },

    template: `
      <div class="lib" align="center">
        <ul>
          <li v-for="gallery in gallerys"><photo-link :class="gallery.orient_class" :name="gallery.name" :source="gallery.img_src" :imgStyle="gallery.style"></photo-link></li>
        </ul>
      </div>
    `
}
