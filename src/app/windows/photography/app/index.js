module.exports = {

      components: {
        'page-title': require("./components/title.js"),
        'photo-lib': require("./components/lib.js"),
        'photo-gallery': require("./components/gallery.js"),
        'footer-bar': require("./components/footer.js")
      },

      template: `
      <div class="photo_page">
        <page-title id="photo_title"></page-title>
        <transition name="component-fade" mode="out-in">
          <component :is="$store.state.show_lib"></component>
        </transition>
        <footer-bar></footer-bar>
      </div>
      `
};
