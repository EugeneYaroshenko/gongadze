<template>
  <div class="email-subscribe__container">
    <div class="email-subscribe">
      <div class="email-subscribe__title">
        <h3>Підписка на розсилку</h3>
      </div>
      <div class="thanks" v-if="saved">
        <p class="text-bold-18">Дякуємо! Ваш емейл збережений</p>
      </div>
      <div v-else>
        <div class="email-subscribe__input">
          <input type="text" placeholder="Емейл" name="mail" required v-model="email">
        </div>
        <div class="email-subscribe__button">
          <div class="button" :class="{'enabled': email.length && validateEmail}" @click.prevent.stop="saveEmail">Підписатися</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { menuStructure } from '~/config/UI';

  export default {
    data() {
      return {
        email: '',
        saved: false
      }
    },
    computed: {
      validateEmail() {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(this.email).toLowerCase());
      }
    },
    methods: {
      saveEmail () {
        this.$store.dispatch('subscription/saveSubscriptionEmail', this.email)
        this.saved = true
      },
    }
  }
</script>

<style lang="scss" scoped>
  .email-subscribe__container {
    padding: 32px 24px;
    background: #121212;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .email-subscribe {
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
  }

  .email-subscribe__title {
    text-align: center;
    margin-bottom: 32px;
    color: #ffffff;
  }

  .email-subscribe__input {
    margin-bottom: 24px;
  }
  .email-subscribe__input input {
    padding: 16px 12px;
    border: 1px solid #121212;

    &:focus {
      outline: 0;
    }
  }

  .email-subscribe__button .button {
    background-color: #544ED9;
    padding: 12px 12px;
    color: #fff;
    cursor: pointer;
    transition: all .15s ease-in;
    outline: 0;
    border: none;
    opacity: .8;
    pointer-events: none;
    text-align: center;

    &:hover {
      background-color: darken(#544ED9, 20%);
    }

    &.enabled {
      opacity: 1;
      pointer-events: all;
    }
  }

  .thanks {
    text-align: center;
    padding: 32px 0;
    color: #fff;
  }
</style>
