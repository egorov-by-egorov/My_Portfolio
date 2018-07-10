const skills = {
  state: {
    data: []
  },
  actions: {
    addNewSkill(store, skill) {
      console.log(skill);
      return this.$axios
        .post("/skills", skill)
        .then(response => {
          console.log("addSkill", response);
        })
        .catch(e => console.error(e));
    },
    fetchSkills() {
      return this.$axios.get(`/skills/#id`).then(response => {
        console.log(response);
      }).catch(e => console.error(e));
    },
  }
};

export default skills;
