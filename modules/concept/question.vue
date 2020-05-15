<template>
  <div class="question-block">
    <div
      class="question"
      :class="{'question--selected': isQuestionToggled}"
      @click="toggleQuestion">
      <div class="question-text">
        <div class="text-semibold-24"> {{ question }}</div>
      </div>
      <div
        class="arrow-icon"
        :class="{'arrow-icon--close': isQuestionToggled}"
      ></div>
    </div>
    <div
      class="question-answer"
      :class="{'question-answer--selected': isQuestionToggled}"
    >
      <div class="text-regular-16" v-html="answer">

      </div>
      <div class="concept-small-text" v-if="smallText.length">
        <div class="text-semibold-12">{{ smallText }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      question: {
        type: String,
        default: '',
        required: true
      },
      answer: {
        type: String,
        default: '',
        required: true
      },
      smallText: {
        type: String,
        default: '',
        required: false
      }
    },
    data () {
      return {
        isQuestionToggled: false
      }
    },
    methods: {
      toggleQuestion () {
        this.isQuestionToggled = !this.isQuestionToggled
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
