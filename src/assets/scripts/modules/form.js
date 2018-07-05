import Vue from "vue";
new Vue({
  el: "#form",
  data() {
    return {
      parameters: {
        name: "",
        email: "",
        text: ""
      }
    };
  },
  methods: {
    addErrorClass(e) {
      e.preventDefault();
      e.target.classList.add("invalid");
      e.target.nextSibling.classList.add("error-message--active");
    },
    deleteErrorClass(e) {
      e.target.classList.remove("invalid");
      e.target.nextSibling.classList.remove("error-message--active");
    }
  }
});
