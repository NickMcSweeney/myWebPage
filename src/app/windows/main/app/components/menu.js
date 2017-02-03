window.components = window.components || {};
window.components.mainMenu = {

      components: {
        'menu-btn': window.components.menuBtn
      },

      template: `
      <div class="myView">
        <menu-btn btn_float="right_btn" name="photography" btn_img="frontend/images/photography.png">
          <h4 slot="title">Photography</h4>
          <h6 slot="sub_title">nature &amp; travel</h6>
        </menu-btn>

        <menu-btn btn_float="left_btn" name="programing" btn_img="frontend/images/programing.png">
          <h4 slot="title">Programing</h4>
          <h6 slot="sub_title">applications and more</h6>
        </menu-btn>
      </div>
      `
};
