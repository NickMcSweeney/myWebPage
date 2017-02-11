module.exports = {

      template: `
        <div class="photo_page">
          <page-title id="photo_title"></page-title>
          <transition name="component-fade" mode="out-in">
            <router-view></router-view>
          </transition>
          <footer-bar></footer-bar>
        </div>
      `
};
