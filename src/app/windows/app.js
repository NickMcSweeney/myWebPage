function start(el) {

    return new Vue({
      el: el,

      components: {
        'welcome': window.components.welcome
      },

      store: Web.store,

      template: `
        <welcome></welcome>
      `
    });
};
