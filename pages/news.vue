<template>
  <div>
    <div v-if="postsFetched" class="gongadze-content">
      <div class="gongadze-content__headline">
        <h3 class="headline-h3">ПРОЄКТИ ПРЕМІЇ</h3>
      </div>
      <div class="gongadze-content--condensed">
        <div class="article-container">
          <div class="article__info">
            <div class="article-date">
              <div class="text-light-14 lowercase"> {{ posts.data[0].acf.date_published }}</div>
            </div>
            <div class="article-name">
              <div class="text-bold-28">{{ posts.data[0].post_title }}</div>
            </div>
          </div>
          <div class="article__photo" :style="{ backgroundImage: `url('${posts.data[0].featured_image}')` }"/>
          <div class="article__text">
            <div class="text-regular-20">Місце під сонцем. У дитинстві Павло й не думав, як це – не читати. Книжки йому подобались, і вони лежали повсюди: на кухні, під ліжком, на поличках. Десять тисяч томів домашньої бібліотеки! <br><br>Спостерігаючи за батьком, літературознавцем і філологом Володимиром Казаріним, хлопець і собі планував продовжити сімейну традицію. “Нехай і не в таких масштабах, як батько, але думалось, що на роль шкільного вчителя російської мови та літератури вже напевне зійду“, – згадує він ті часи. <br><br>Але потім стався 2004 рік, і студент-філолог супроводив на регіональний державний телеканал ГТРК “Крим” однокурсницю. Її покликали розповісти про те, як в університетах сьогодні святкують День студента. У кадр посадили обох, а після ефіру Казаріну запропонували спробувати себе ведучим. <br><br>Цей щасливий збіг мав досить утилітарну причину: хлопців на регіональному телебаченні завжди бракувало. Зазвичай там невисокі зарплати. У суспільстві заведено, що чоловіки мають заробляти багато, тож мало-хто затримувався надовго. <br><br>“Так мені не довелось зубами виривати собі місце під сонцем, – каже Казарін. – Воно просто в якийсь момент виявилось у зоні досяжності“.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  // <div v-html="posts.data[0].post_content"></div>

  export default {
    layout: 'default',
    created () {
      this.$store.dispatch('data/getPosts')
    },
    computed: {
      ...mapState({
                    posts: state => state.data.posts,
                    postsFetched: state => state.data.request.fetched,
                  })
    }
  }
</script>

<style lang="scss" scoped>
</style>
