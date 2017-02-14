
"use strict";

const { PROJECT_STATUS } = window.constants;

module.exports = {
  name: "project-list",
  template:`
    <article class="project-list-article">
      <section class="project-search">
        <div class="search-container">
          <input type="text" @keydown.left.stop="" @keydown.right.stop="" placeholder="Search by keywords (program, rates, skills, etc)" v-model="searchString"/>
          <i class="icon-mag" @click="search"></i>
        </div>
        <router-link to="project/new" class="add-container">
          <i id="add-button" class="icon-close"></i>
          <span>Add new project.</span>
        </router-link>
      </section>

      <section>
        <tab-list>
          <!-- @change-tab="setProjectFilter" -->
          <tab
            v-for="filter in filters"
            :header="filter.charAt(0).toUpperCase() + filter.slice(1)"
          ></tab>
        </tab-list>
      </section>

      <section>
        <transition-group
          tag="ul"
          name="list-slide"
          class="project-list"
        >
          <li
            v-for="(project, index) in filteredProjects"
            :key="project.id"
            :project="project"
            :index="index"
            :focused="index === focused"
            @set-focus="setFocus"
            is="project-list-item"
          ></li>
        </transition-group>
      </section>
    </article>
  `,
  // mixins: [require("@welocalize/useful-shit").vue.mixins.routeData],
  data() {
    return {
      show: true,
      fetching: false,
      filters: ["active", "pending", "completed"],
      selectedFilter: 0,
      searchString: "",
      focused: -1,
    };
  },
  computed: {
    haveProjects() {
      return this.$store.state.projects.projectList.length > 0;
    },
    emptyListString() {
      return this.filter === "current" ? "No current" : "No past";
    },
    activeFilter() {
      return this.filters[this.selectedFilter];
    },
    filteredProjects() {
      const projects = this.$store.getters[`projects/${this.activeFilter}Projects`];
      if (this.searchString) return projects.filter(proj => JSON.stringify(proj).toLowerCase().includes(this.searchString.toLowerCase()));
      return projects;
    },
  },
  methods: {
    // fetchRouteData() {
    //   this.$store.dispatch("projects/fetchProjects");
    // },
    // setProjectFilter(index) {
    //   if (typeof index !== "number" || index < 0 || index >= this.filters.length) throw new Error("Tried to select an invalid filter.");
    //   this.selectedFilter = index;
    // },
    search() {
      console.log("search");
    },
    setFocus({ index }) {
      this.focused = index;
      const project = this.filteredProjects[this.focused];
      this.$store.dispatch("normalizer/fetchProject", { request_id: project.id })
        .then(() => {
          this.$store.dispatch("contextTray/setFocusAndOpen", { focus: `project:${project.id}` });
        });
    },
    // keydown(ev) {
    //   if (ev.keyCode === 40 && this.focused + 1 < this.filteredProjects.length) {
    //     this.setFocus({ index: this.focused + 1 });
    //     ev.stopPropagation();
    //   } else if (ev.keyCode === 38 && this.focused - 1 >= 0) {
    //     this.setFocus({ index: this.focused - 1 });
    //     ev.stopPropagation();
    //   } else if (ev.keyCode === 13 && this.focused !== -1) {
    //     const project = this.filteredProjects[this.focused];
    //     if (project) {
    //       this.$router.push(`/project/${project.id}`);
    //       ev.preventDefault();
    //       ev.stopPropagation();
    //     }
    //   }
    // },
  },
  // mounted() {
  //   document.body.addEventListener("keydown", this.keydown);
  // },
  // beforeDestroy() {
  //   document.body.removeEventListener("keydown", this.keydown);
  // },
  locales: require("./lang"),
  components: {
    "project-list-item": require("./projectListItem"),
  },
};
