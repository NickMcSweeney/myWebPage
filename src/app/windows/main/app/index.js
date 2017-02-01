function start(el) {

    return new Vue({
      el: el,

      components: {
        'menu-btn': window.components.menuBtn
      },

      template: `
        <menu-btn btn_float="right_btn" name="photography" btn_img="../../frontend/images/photography.png">
          <h4 slot="title">Photography</h4>
          <h6 slot="sub_title">nature &amp; travel</h6>
        </menu-btn>



      `
    });
}
