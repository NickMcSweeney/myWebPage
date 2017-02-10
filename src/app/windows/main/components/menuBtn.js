module.exports = {

  props: ['btn_img','name','btn_float','navTo'],

  template: `
    <router-link :to="navTo">
      <div :class="btn_float" :name="name">
        <div class="img">
          <img id='IMG' :src="btn_img">
        </div>
        <div class="text">
          <slot name="title"></slot>
          <slot name="sub_title"></slot>
        </div>
      </div>
    </router-link>
  `
}
