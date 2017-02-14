const { PROJECT_STATUS } = window.constants;

module.exports = {
  template: `
    <li
      @click="setFocus(project.id)"
      @dblclick="doubleClick"
      class="list-slide-item project-list-item"
      :class="selectedClass"
    >
      <div class="col-1">
        <h5 :title="project.account.name">{{project.account.name}}</h5>
        <h5 :title="project.title">{{project.patent.title}}</h5>
        <h5>Due date</h5>
      </div>
      
      <div class="col-2">
        <h5>Adjusted word count: 10,214</h5>
        <router-link
          class="view-tasks-link"
          :to="'/project/' + project.id"
        >
          View tasks
        </router-link>
      </div>
    </li>
  `,
  props: {
    project: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    focused: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    selectedClass() {
      return {
        selected: this.focused,
      };
    },
    status() {
      const PROJECT_VM = {
        [PROJECT_STATUS.approval]: {
          statusText: "Quote",
          class: "status-urgent",
        },
        [PROJECT_STATUS.approved]: {
          statusText: "Quote approved",
          class: "status-healthy",
        },
        [PROJECT_STATUS.needsAssignment]: {
          statusText: "Needs assignment",
          class: "status-lookout",
        },
        [PROJECT_STATUS.translationNeedsAssignment]: {
          statusText: "Translation needs assignment",
          class: "status-lookout",
        },
        [PROJECT_STATUS.translationInProgress]: {
          statusText: "Translation in progress",
          class: "status-healthy",
        },
        [PROJECT_STATUS.proofreadingNeedsAssignment]: {
          statusText: "Proofreading needs assignment",
          class: "status-lookout",
        },
        [PROJECT_STATUS.proofreadingInProgress]: {
          statusText: "Proofreading in progress",
          class: "status-healthy",
        },
        [PROJECT_STATUS.formattingNeedsAssignment]: {
          statusText: "Formatting needs assignment",
          class: "status-lookout",
        },
        [PROJECT_STATUS.formattingInProgress]: {
          statusText: "Formatting in progress",
          class: "status-healthy",
        },
        [PROJECT_STATUS.qualityNeedsAssignment]: {
          statusText: "QA needs assignment",
          class: "status-lookout",
        },
        [PROJECT_STATUS.qualityInProgress]: {
          statusText: "QA in progress",
          class: "status-healthy",
        },
        [PROJECT_STATUS.matecat]: {
          statusText: "Processing files",
          class: "status-healthy",
        },
        [PROJECT_STATUS.ready]: {
          statusText: "Ready for work",
          class: "status-healthy",
        },
        [PROJECT_STATUS.inProgress]: {
          statusText: "In progress",
          class: "status-healthy",
        },
        [PROJECT_STATUS.complete]: {
          statusText: "Complete",
          class: "status-done",
        },
        [PROJECT_STATUS.waiting]: {
          statusText: "Processing files",
          class: "status-healthy",
        },
      };
      
      return PROJECT_VM[this.project.status] || { statusText: this.project.status, class: "status-healthy" };
    },
  },
  methods: {
    setFocus() {
      this.$emit("set-focus", { index: this.index });
    },
    doubleClick() {
      console.log("double click");
      this.$router.push(`/project/${this.project.id}`);
    },
  },
};
