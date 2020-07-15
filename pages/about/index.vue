<template>
  <div>
    <div class="gongadze-content">
      <div class="gongadze-content--condensed project-container">
        <h4 class="headline-h4">Засновники</h4>
        <div class="text-regular-20 zasnovniki-text">Премія була заснована <strong>Українським ПЕН</strong> у партнерстві з powered <strong>KMBS alumni platform</strong> та виданням <strong>“Українська правда”</strong></div>
        <div>
          <div class="founders">
            <div class="another-founder">
              <a href="https://pen.org.ua/" target="_blank" class="link-block__founder w-inline-block">
                <div class="founder-about">
                  <div class="founder-title">
                    <div class="founder-icon main"><img src="../../assets/images/pen-icon.svg" alt=""></div>
                  </div>
                  <div class="founder-block">
                    <div class="text-bold-24 centered-block">Український ПЕН</div>
                    <div class="founder-description">Культурна і правозахисна громадська організація, що об’єднує українських інтелектуалів – письменників, журналістів, науковців, видавців, перекладачів, правозахисників, культурних менеджерів. Є одним із 146 національних центрів Міжнародного ПЕН. Також є співзасновником Премій імені Василя Стуса та імені Юрія Шевельова.<br></div>
                  </div>
                </div>
              </a>
            </div>
            <div class="another-founder">
              <a href="https://mind.ua/kmbs_alumni" target="_blank" class="link-block__founder w-inline-block">
                <div class="founder-about">
                  <div class="founder-title">
                    <div class="founder-icon"><img src="../../assets/images/kmbs-icon.svg" alt=""></div>
                  </div>
                  <div class="founder-block">
                    <div class="text-bold-24 centered-block">powered KMBS alumni platform</div>
                    <div class="founder-description">Спільнота випускників Києво-Могилянської Бізнес-Школи. На базі платформи випускники об’єднуються, ініціюють та втілюють проєкти, одним із яких стала Премія імені Георгія Ґонґадзе.<br></div>
                  </div>
                </div>
              </a>
            </div>
            <div class="another-founder">
              <a href="https://www.pravda.com.ua/" target="_blank" class="link-block__founder w-inline-block">
                <div class="founder-about">
                  <div class="founder-title">
                    <div class="founder-icon"><img src="../../assets/images/pravda-icon.svg" alt=""></div>
                  </div>
                  <div class="founder-block">
                    <div class="text-bold-24 centered-block">Українська Правда</div>
                    <div class="founder-description">Онлайн-видання, засноване 2000-го року Георгієм Ґонґадзе та Оленою Притулою. Є одним із найвідвідуваніших медіа в Україні та об’єднує кілька проєктів, серед яких “Економічна правда”, “Українська правда. Життя”, “Європейська правда” та інші.<br></div>
                  </div>
                </div>
              </a>
            </div>
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
          { hid: 'description', name: 'description', content: 'Засновники Премії' }
        ]
      }
    },
  }
</script>

<style lang="scss" scoped>
  .founders {
    display: flex;
    flex-flow: row nowrap;
    margin-top: 64px;
  }

  @media screen and (max-width: 900px) {
    .founders {
      flex-flow: column nowrap;
    }

    .another-founder {
      width: 100%;
    }
  }
</style>
