<template lang="pug">
  tr(v-if="editmode === false")
    td {{skill.title}}
    td
      span {{skill.percent}} %
    td
     button() Delete

  tr(v-else)
    td
      input(
        type="text"
        v-model="newSkill.title"
        )
    td
      input(
        type="text"
        v-model="newSkill.percents"
        )
      span %
    td
      button(@click="addSkill") Add
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    editmode: {
      type: Boolean,
      default: false
    },
    skill: {
      type: Object,
      default: () => {}
    },
    typeId: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      newSkill: {
        title: "",
        percents: "",
        category: this.typeId
      }
    };
  },
  methods: {
    ...mapActions(["addNewSkill"]),
    addSkill() {
      this.addNewSkill(this.newSkill);
    }
  }
};
</script>
