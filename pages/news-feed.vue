<template>
  <div>
    <div class="gongadze-content">
      <div class="gongadze-content__headline">
        <h3 class="headline-h3">новини</h3>
      </div>
      <div class="gongadze-content--condensed">
        <div class="w-layout-grid news-grid">
          <div id="w-node-fb8a0860ffac-a1c07547" class="main-news">
            <div class="main-news-image"></div>
            <div class="main-news-text-container">
              <a href="#" class="main-news-text w-inline-block">
                <div class="main-news-date">
                  <div class="text-light-14">9 КВІТНЯ 2019</div>
                </div>
                <div class="main-news-name">
                  <div class="text-bold-18">Фіналісти Премії імені Георгія Ґонґадзе 2020 року Богдан Логвиненко, Павло Казарін і Роман Вінтонів дадуть онлайн-інтерв’ю 11, 14 і 16 квітня, відповідно</div>
                </div>
                <div class="main-news-action">
                  <div class="text-bold-18">ЧИТАТИ</div>
                </div>
              </a>
            </div>
          </div>
          <div v-for="(post, index) in allNews" :key="index">
            <news :post="post" :redirect-to="redirectTo"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import news from '~/modules/newsFeed/news'

  export default {
    layout: 'default',
    computed: {
      ...mapState({
                    allNews: state => state.data.posts.by_categories['Новини'],
                  })
    },
    components: {
      news
    }
  }
</script>

<style lang="scss" scoped>
</style>
