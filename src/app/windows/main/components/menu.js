module.exports = {

      components: {
        'menu-btn': require("./menuBtn.js")
      },

      template: `
      <div class="myView">
        <menu-btn navTo="/photography/lib" btn_float="right_btn" name="photography" btn_img="frontend/images/photography.png">
          <h4 slot="title">Photography</h4>
          <h6 slot="sub_title">nature &amp; travel</h6>
        </menu-btn>

        <menu-btn navTo="/programing" btn_float="left_btn" name="programing" btn_img="frontend/images/programing.png">
          <h4 slot="title">Programing</h4>
          <h6 slot="sub_title">applications and more</h6>
        </menu-btn>

        <menu-btn navTo="/brewing" btn_float="right_btn" name="brewing" btn_img="frontend/images/brewing.png">
          <h4 slot="title">Brewing</h4>
          <h6 slot="sub_title">ideas, recipies, plans</h6>
        </menu-btn>

        <menu-btn navTo="/design" btn_float="left_btn" name="design" btn_img="frontend/images/design.png">
          <h4 slot="title">Design</h4>
          <h6 slot="sub_title">projects I've designed</h6>
        </menu-btn>
      </div>
      `
};
