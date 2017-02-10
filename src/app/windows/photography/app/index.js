module.exports = {

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
