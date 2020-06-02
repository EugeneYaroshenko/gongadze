<template>
  <footer class="footer">
    <div class="footer-top">
      <nuxt-link to="/" aria-current="page" class="w-inline-block w--current">
        <div class="footer-logo"></div>
      </nuxt-link>
      <div class="footer-icons" style="display: none">
        <div class="footer-icon facebook"></div>
        <div class="footer-icon instagram"></div>
        <div class="footer-icon twitter"></div>
      </div>
    </div>
    <ul role="list" class="footer-list">
      <li class="footer-list__item">
        <nuxt-link to="/news-feed" class="footer-link__container">
          <div class="text-regular-16">Новини</div>
        </nuxt-link>
      </li>
      <li class="footer-list__item">
        <div class="footer-link__container">
          <div class="text-regular-16">Проєкти Премії</div>
        </div>
        <ul role="list" class="footer-item__list">
          <li class="footer-sublink-item">
            <nuxt-link to="/projects/journalism-change" class="footer-sublink w-inline-block">
              <div class="text-regular-12">Журналістика змін</div>
            </nuxt-link>
          </li>
          <li class="footer-sublink-item">
            <nuxt-link to="/projects/profession-stay" class="footer-sublink w-inline-block">
              <div class="text-regular-12">Лишаюсь у професії</div>
            </nuxt-link>
          </li>
          <li class="footer-sublink-item">
            <nuxt-link to="/projects/stories-social-entrepreneurship" class="footer-sublink w-inline-block">
              <div class="text-regular-12">Історії соціального підприємництва</div>
            </nuxt-link>
          </li>
        </ul>
      </li>
      <li class="footer-list__item">
        <nuxt-link to="/publications" class="footer-link__container">
          <div class="text-regular-16">Публікації</div>
        </nuxt-link>
      </li>
      <li class="footer-list__item">
        <div class="footer-link__container">
          <div class="text-regular-16">Про Премію</div>
        </div>
        <ul role="list" class="footer-item__list">
          <li class="footer-sublink-item">
            <nuxt-link to="/about" class="footer-sublink w-inline-block">
              <div class="text-regular-12">Засновники</div>
            </nuxt-link>
          </li>
          <li class="footer-sublink-item">
            <nuxt-link to="/about/concept" class="footer-sublink w-inline-block">
              <div class="text-regular-12">Концепція Премії</div>
            </nuxt-link>
          </li>
          <li class="footer-sublink-item">
            <nuxt-link to="/about/kapitula" class="footer-sublink w-inline-block">
              <div class="text-regular-12">Капітула Премії</div>
            </nuxt-link>
          </li>
          <li class="footer-sublink-item">
            <nuxt-link to="/about/laureates" class="footer-sublink w-inline-block">
              <div class="text-regular-12">Лауреати Премії</div>
            </nuxt-link>
          </li>
          <li class="footer-sublink-item">
            <nuxt-link to="/about/maecenas" class="footer-sublink w-inline-block">
              <div class="text-regular-12">Меценати Премії</div>
            </nuxt-link>
          </li>
          <li class="footer-sublink-item">
            <nuxt-link to="/about/team" class="footer-sublink w-inline-block">
              <div class="text-regular-12">Команда Премії</div>
            </nuxt-link>
          </li>
        </ul>
      </li>
      <li class="footer-list__item">
        <div class="footer-link__container">
          <div class="text-regular-16">Георгій Ґонґадзе</div>
        </div>
        <ul role="list" class="footer-item__list">
          <li class="footer-sublink-item">
            <nuxt-link to="/georgiy-gongadze" class="footer-sublink w-inline-block">
              <div class="text-regular-12">Біографія</div>
            </nuxt-link>
          </li>
          <li class="footer-sublink-item">
            <nuxt-link to="/georgiy-gongadze/memories" class="footer-sublink w-inline-block">
              <div class="text-regular-12">Спогади</div>
            </nuxt-link>
          </li>
          <li class="footer-sublink-item">
            <a target="http://gongadze.reporters.media/" class="footer-sublink w-inline-block">
              <div class="text-regular-12">Спецпроєкт з Reporters</div>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </footer>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  a {
    text-decoration: none;
    color: #333333;
  }

  .footer {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-top: 64px;
    padding: 18px 24px 64px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
  }

  .footer-logo {
    width: 80px;
    height: 100px;
    background-image: url('../assets/images/footer-icon.svg');
    background-position: 0px 0px;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .footer-list {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    margin-bottom: 0px;
    padding-left: 0px;
    -webkit-box-flex: 0;
    -webkit-flex: 0 auto;
    -ms-flex: 0 auto;
    flex: 0 auto;
    list-style-type: none;
  }

  .footer-list__item {
    display: block;
    padding-top: 8px;
    padding-right: 16px;
    padding-bottom: 8px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-align-self: flex-start;
    -ms-flex-item-align: start;
    align-self: flex-start;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    min-width: 100px;
  }

  .footer-list__item:hover {
    text-decoration: none;
  }

  .text-regular-14 {
    font-size: 14px;
    letter-spacing: 0.02em;
  }

  .text-regular-14:hover {
    text-decoration: none;
  }

  .footer-icon {
    width: 20px;
    height: 20px;
    margin-right: 24px;
    padding-right: 0px;
    background-image: url('https://d3e54v103j8qbb.cloudfront.net/img/example-bg.png');
    background-position: 50% 50%;
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
  }

  .footer-icon.facebook {
    background-image: url('../assets/images/Group.svg');
    background-position: 50% 50%;
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
  }

  .footer-icon.instagram {
    background-image: url('../assets/images/Group-11.svg');
  }

  .footer-icon.twitter {
    margin-right: 0px;
    background-image: url('../assets/images/Group-1.svg');
  }

  .footer-icons {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding-top: 16px;
    padding-bottom: 16px;
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    align-self: center;
  }

  .footer-top {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    margin-bottom: 16px;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: stretch;
    -webkit-align-items: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
  }

  .footer-item__list {
    margin-top: 12px;
    padding-left: 0;
    list-style-type: none;
  }

  .footer-sublink {
    width: 100%;
    color: #333;
    text-decoration: none;
  }

  .footer-sublink:hover {
    text-decoration: underline;
  }

  .text-regular-12 {
    font-size: 0.8em;
    line-height: 1.5em;
  }

  .footer-sublink-item {
    margin-bottom: 8px;
  }

  .footer-link__container {
    font-weight: 600;
  }

  a.footer-link__container:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 991px) {
    .footer-list {
      padding-left: 32px;
    }

    .footer-icons {
      -webkit-box-flex: 0;
      -webkit-flex: 0 auto;
      -ms-flex: 0 auto;
      flex: 0 auto;
    }
  }

  @media screen and (max-width: 767px) {
    .footer-logo {
      width: 73.47px;
      height: 95px;
    }
    .footer-icon {
      width: 16px;
      height: 16px;
      margin-right: 12px;
    }
  }
  @media screen and (max-width: 479px) {
    .footer {
      padding-right: 16px;
      padding-left: 16px;
    }
    .footer-list {
      padding-top: 0px;
      padding-bottom: 0px;
      padding-left: 12px;
    }
    .footer-list__item {
      padding-top: 12px;
      padding-bottom: 12px;
    }
    .text-regular-14 {
      -webkit-box-flex: 0;
      -webkit-flex: 0 auto;
      -ms-flex: 0 auto;
      flex: 0 auto;
    }
    .footer-icon {
      margin-right: 16px;
    }
    .footer-icons {
      padding-top: 14px;
      padding-bottom: 20px;
      -webkit-box-flex: 0;
      -webkit-flex: 0 auto;
      -ms-flex: 0 auto;
      flex: 0 auto;
    }
  }
</style>
