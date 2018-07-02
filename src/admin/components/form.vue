<template lang="pug">
  .about-me__form-blur
    .about-me__form
    .form__wrapper
      .form__title связаться со мной
      form.form(action="#")
        label(for="name").visuallyhidden Введите имя
        input#name(type="text", required, v-model='parameters.name', @invalid='addErrorClass', @focus='deleteErrorClass', placeholder="Введите имя").form__input
        label(for="email").visuallyhidden Введите email
        input#email(type="email", required, v-model='parameters.email', @invalid='addErrorClass', @focus='deleteErrorClass', placeholder="Введите email").form__input
        label(for="textarea").visuallyhidden Введите сообщение
        textarea#textarea(v-model='parameters.text', cols="10", rows="8", placeholder="Ваше сообщение").form__textarea
      .form__buttons
        button.form__button(type="submit") Отправить
        button.form__button(type="reset") Очистить
      pre {{data}}
</template>
<script>
export default {
  name:'App',
  data() {
    return {
      parameters: {
        name: '',
        email: '',
        text: ''
      }
    }
  },
  methods: {
    addError (e) {
      console.log(e);
    e.target.classList.add('invalid')
    e.target.nextSibling.classList.add('error-message--active')
    },
    deleteErrorClass (e) {
      e.target.classList.remove('invalid')
    e.target.nextSibling.classList.remove('error-message--active')
    }
  }
}
</script>
<style>

</style>

