<template>
  <div>
    <div class="gongadze-content project-container">
      <h4 class="headline-h4 headline-with-subtext">Команда Премії</h4>
      <div class="gongadze-content--condensed">
        <div class="team-members">
          <div class="team-member">
            <div class="member-photo"><img src="../../assets/images/oksana.png" srcset="../../assets/images/oksana-p-500.png 500w, ../../assets/images/oksana.png 636w" sizes="(max-width: 767px) 223px, (max-width: 991px) 23vw, 200px" alt=""></div>
            <div class="member-about">
              <div class="about__name">
                <h1 class="headline-h4 headline-lowercase">Оксана Мамченкова</h1>
              </div>
              <div class="about__description">
                <div class="about-text-container">
                  <div class="text-regular-16">координаторка Премії, журналістка, редакторка</div>
                </div>
              </div>
            </div>
          </div>
          <div class="team-member right-orientation">
            <div class="member-photo"><img src="../../assets/images/pavlo.png" srcset="../../assets/images/pavlo-p-500.png 500w, ../../assets/images/pavlo.png 636w" sizes="(max-width: 767px) 223px, (max-width: 991px) 24vw, 200px" alt=""></div>
            <div class="member-about right-orientation">
              <div class="about__name">
                <h1 class="headline-h4 headline-lowercase">Павло Білодід</h1>
              </div>
              <div class="about__description">
                <div class="about-text-container">
                  <div class="text-regular-16">куратор соціальних проектів powered <strong>KMBS</strong> alumni platform</div>
                </div>
              </div>
            </div>
          </div>
          <div class="team-member">
            <div class="member-photo"><img src="../../assets/images/tetyana.png" srcset="../../assets/images/tetyana-p-500.png 500w, ../../assets/images/tetyana.png 636w" sizes="(max-width: 767px) 223px, (max-width: 991px) 24vw, 200px" alt=""></div>
            <div class="member-about">
              <div class="about__name">
                <h1 class="headline-h4 headline-lowercase">Тетяна Терен</h1>
              </div>
              <div class="about__description">
                <div class="about-text-container">
                  <div class="text-regular-16">виконавча директорка Українського ПЕН, журналістка, ініціаторка Премії</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="contacts-container">
          <div class="w-layout-grid contacts-grid">
            <div class="contact-item">
              <div class="centered-block text-email">
                <div class="text-bold-18">З усіх додаткових питань та коментарів - звертайтеся, будь ласка, за адресою</div>
              </div>
              <a href="mailto:gongadzeprize@gmail.com" class="email-link">gongadzeprize@gmail.com</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'default',
    head () {
      return {
        title: 'Премія Георгія Ґонґадзе',
        meta: [
          { hid: 'description', name: 'description', content: 'Команда Премії' }
        ]
      }
    },
  }
</script>

<style lang="scss" scoped>
  .team-members {
    margin: 64px 0 54px;
  }

  img {
    filter: grayscale(100%);
  }

  .contact-item {
    max-width: 400px;
    margin: 0 auto;
  }

  .text-email {
    margin-bottom: 16px;
  }
</style>
