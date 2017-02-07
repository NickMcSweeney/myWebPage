module.exports = {

    props: ['name', 'src', 'style', 'loc'],

    template: `
      <img :class="style" :name="name" :src="src" @click="$store.state.gallery_show=loc">
    `
}
