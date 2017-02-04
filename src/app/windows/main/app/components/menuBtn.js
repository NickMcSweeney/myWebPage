module.exports = {

  props: ['btn_img','name','btn_float'],

  template: `
    <div :class="btn_float" @click="nav" :name="name">
      <div class="img">
        <img id='IMG' :src="btn_img">
      </div>
      <div class="text">
        <slot name="title"></slot>
        <slot name="sub_title"></slot>
      </div>
    </div>
  `,

  methods: {
    nav() {
      console.log("go to next page")
    }
  }
}
