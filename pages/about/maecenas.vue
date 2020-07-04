<template>
  <div>
    <div class="gongadze-content big-preview">
      <div class="project-preview publications-preview">
        <div class="project-preview__overlay"/>
        <div class="project-preview__description">
          <div class="description__name">
            <h1 class="headline-h1">Меценати</h1>
          </div>
          <div class="description__about">
            <div class="text-regular-20">Меценатами Премії можуть стати виключно випускники Києво-Могилянської
              Бізнес-Школи, представники powered KMBS alumni platform. Їх об’єднує спільний досвід навчання і прагнення
              створювати системні зміни в Україні.</div>
            <br/>
            <div class="text-regular-20">Меценати своїми внесками забезпечують незалежність та незаангажованість
              Премії від впливів, а також, як досвідченні управлінці, долучасються до вирішення стратегічних питань
              розвитку Премії</div>
          </div>
        </div>
        <div class="navdown-container" v-scroll-to="'#materials'">
          <div class="arrow-down arrow-down__first"></div>
          <div class="arrow-down arrow-down__second"></div>
        </div>
      </div>
      <div class="gongadze-content--condensed project-container" id="materials">
        <div class="kapitula-years">
          <div class="w-layout-grid kapitula-years-container">
            <div class="kapitula-year-block" :class="{'year-selected': currentMaecenas === 2020 }">
              <div id="year-2020" class="kapitula-year" @click="showMaecenas('2020')">2020</div>
            </div>
            <div class="kapitula-year-block" :class="{'year-selected': currentMaecenas === 2019 }">
              <div id="year-2019" class="kapitula-year" @click="showMaecenas('2019')">2019</div>
            </div>
          </div>
        </div>
        <div class="maecenas-grid" ref="2020" :class="{'maecenas-grid--shown': currentMaecenas === 2020 }">
          <div class="maecenas">
            <div class="maecenas-image artemenko"></div>
            <div class="maecenas-content">
              <div class="text-bold-18">Антон Артеменко</div>
              <nuxt-link
                to="/article/?cat_id=10&title=anton-artemenko-metsenatstvo--tse-bazhannya-schos-stvoriti-blagodiinist--bazhannya-podilitis"
                class="maecenas-button">інтерв&#x27;ю
              </nuxt-link>
            </div>
          </div>
          <div class="maecenas">
            <div class="maecenas-image brusilovskiy"></div>
            <div class="maecenas-content">
              <div class="text-bold-18">Олег Брусиловський</div>
              <nuxt-link to="/article/?cat_id=10&title=oleg-brusilovskii-pro-dopomogu-za-vnutrishnim-poklikom"
                         class="maecenas-button">інтерв&#x27;ю
              </nuxt-link>
            </div>
          </div>
          <div class="maecenas">
            <div class="maecenas-image volkovetskiy"></div>
            <div class="maecenas-content">
              <div class="text-bold-18">Ярослав Волковецький</div>
            </div>
          </div>
          <div class="maecenas">
            <div class="maecenas-image demchenko"></div>
            <div class="maecenas-content">
              <div class="text-bold-18">Микола Демченко</div>
              <nuxt-link
                to="/article/?cat_id=10&title=mikola-demchenko-u-sotsialnih-proektah-nema-konkurentsii-voni-stvoreni-dlya-spilnogo-blaga"
                class="maecenas-button">інтерв&#x27;ю
              </nuxt-link>
            </div>
          </div>
          <div class="maecenas">
            <div class="maecenas-image dulepov"></div>
            <div class="maecenas-content">
              <div class="text-bold-18">Сергій Дулепов</div>
              <nuxt-link to="/article/?cat_id=10&title=sergii-dulpov-metsenat--tse-toi-hto-pidtrimu-abo-initsiyu-zmini"
                         class="maecenas-button">інтерв&#x27;ю
              </nuxt-link>
            </div>
          </div>
          <div class="maecenas">
            <div class="maecenas-image diyadik"></div>
            <div class="maecenas-content">
              <div class="text-bold-18">Максим Дядик</div>
              <nuxt-link
                to="/article/?cat_id=10&title=maksim-dyadik-metsenatstvo---tse-sotsialne-pidprimnitstvo-yake-ruha-suspilstvo-vpered"
                class="maecenas-button">інтерв&#x27;ю
              </nuxt-link>
            </div>
          </div>
          <div class="maecenas">
            <div class="maecenas-image isak"></div>
            <div class="maecenas-content">
              <div class="text-bold-18">Андрій Ісак</div>
              <nuxt-link
                to="/article/?cat_id=10&title=andrii-sak-chim-lyudina-schaslivisha-tim-legshe-vona-dilitsya-z-inshimi"
                class="maecenas-button">інтерв&#x27;ю
              </nuxt-link>
            </div>
          </div>
          <div class="maecenas">
            <div class="maecenas-image kvashenko"></div>
            <div class="maecenas-content">
              <div class="text-bold-18">роман квашенко</div>
              <nuxt-link
                to="/article/?cat_id=10&title=roman-kvashenko-hotilosya-b-schob-potrebi-v-metsenatstvi-ta-blagodiinosti-ne-bulo"
                class="maecenas-button">інтерв&#x27;ю
              </nuxt-link>
            </div>
          </div>
          <div class="maecenas">
            <div class="maecenas-image maslova"></div>
            <div class="maecenas-content">
              <div class="text-bold-18">Марина Маслова</div>
              <nuxt-link to="/article/?cat_id=10&title=marina-masalova-pro-metsenatstvo-i-stalii-rozvitok"
                         class="maecenas-button">інтерв&#x27;ю
              </nuxt-link>
            </div>
          </div>
          <div class="maecenas">
            <div class="maecenas-image mishchenki"></div>
            <div class="maecenas-content">
              <div class="text-bold-18">родина міщенків</div>
              <nuxt-link to="/article/?cat_id=10&title=roman-mischenko-mistetstvo-rozshiryu-gorizonti-tomu-scho-vono--pro-maibutn"
                         class="maecenas-button">інтерв&#x27;ю
              </nuxt-link>
            </div>
          </div>
          <div class="maecenas">
            <div class="maecenas-image novitskiy"></div>
            <div class="maecenas-content">
              <div class="text-bold-18">Дмитро Новицький</div>
              <nuxt-link to="/article/?cat_id=10&title=dmitro-novitskii-metsenatstvo--tse-istoriya-pro-maibutn"
                         class="maecenas-button">інтерв&#x27;ю
              </nuxt-link>
            </div>
          </div>
          <div class="maecenas">
            <div class="maecenas-image perebiy"></div>
            <div class="maecenas-content">
              <div class="text-bold-18">Людмила Перебийнос</div>
            </div>
          </div>
          <div class="maecenas">
            <div class="maecenas-image prosolenko"></div>
            <div class="maecenas-content">
              <div class="text-bold-18">Оксана Просоленко</div>
            </div>
          </div>
          <div class="maecenas">
            <div class="maecenas-image sushko"></div>
            <div class="maecenas-content">
              <div class="text-bold-18">Микола Сушко</div>
              <nuxt-link to="/article/?cat_id=10&title=mikola-sushko-use-zhittya-ya-zaimayus-remontom-svitu"
                         class="maecenas-button">інтерв&#x27;ю
              </nuxt-link>
            </div>
          </div>
          <div class="maecenas">
            <div class="maecenas-image tkachuk"></div>
            <div class="maecenas-content">
              <div class="text-bold-18">Олександр ткачук</div>
              <nuxt-link to="/article/?cat_id=10&title=oleksandr-tkachuk-metsenatstvo--tse-pro-rozvitok-i-stvorennya-novogo"
                         class="maecenas-button">інтерв&#x27;ю
              </nuxt-link>
            </div>
          </div>

          <div class="maecenas">
            <div class="maecenas-image"></div>
            <div class="maecenas-content">
              <div class="text-bold-18">Дмитро Чернов</div>
              <nuxt-link to="/article/?cat_id=10&title=dmitro-chernov-pro-metsenatstvo-i-tsinnosti"
                         class="maecenas-button">інтерв&#x27;ю
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="maecenas-grid" ref="2019" :class="{'maecenas-grid--shown': currentMaecenas === 2019 }">
          <div class="maecenas">
            <div class="maecenas-image brunners"></div>
            <div class="maecenas-content">
              <div class="text-bold-18">родина бруннерів</div>
            </div>
          </div>
          <div class="maecenas">
            <div class="maecenas-image brusilovskiy"></div>
            <div class="maecenas-content">
              <div class="text-bold-18">Олег Брусиловський</div>
              <nuxt-link to="/article/?cat_id=10&title=oleg-brusilovskii-pro-dopomogu-za-vnutrishnim-poklikom"
                         class="maecenas-button">інтерв&#x27;ю
              </nuxt-link>
            </div>
          </div>
          <div class="maecenas">
            <div class="maecenas-image volkovetskiy"></div>
            <div class="maecenas-content">
              <div class="text-bold-18">Ярослав Волковецький</div>
            </div>
          </div>
          <div class="maecenas">
            <div class="maecenas-image viknenskiy"></div>
            <div class="maecenas-content">
              <div class="text-bold-18">родина вікнянських</div>
              <nuxt-link to="/article/?cat_id=10&title=mikola-viknyanskii-pro-metsenatstvo-zaradi-zagalnoi-bezpeki"
                         class="maecenas-button">інтерв&#x27;ю
              </nuxt-link>
            </div>
          </div>
          <div class="maecenas">
            <div class="maecenas-image demchenko"></div>
            <div class="maecenas-content">
              <div class="text-bold-18">Микола Демченко</div>
              <nuxt-link
                to="/article/?cat_id=10&title=mikola-demchenko-u-sotsialnih-proektah-nema-konkurentsii-voni-stvoreni-dlya-spilnogo-blaga"
                class="maecenas-button">інтерв&#x27;ю
              </nuxt-link>
            </div>
          </div>
          <div class="maecenas">
            <div class="maecenas-image dulepov"></div>
            <div class="maecenas-content">
              <div class="text-bold-18">Сергій Дулепов</div>
              <nuxt-link to="/article/?cat_id=10&title=sergii-dulpov-metsenat--tse-toi-hto-pidtrimu-abo-initsiyu-zmini"
                         class="maecenas-button">інтерв&#x27;ю
              </nuxt-link>
            </div>
          </div>
          <div class="maecenas">
            <div class="maecenas-image diyadik"></div>
            <div class="maecenas-content">
              <div class="text-bold-18">Максим Дядик</div>
              <nuxt-link
                to="/article/?cat_id=10&title=maksim-dyadik-metsenatstvo---tse-sotsialne-pidprimnitstvo-yake-ruha-suspilstvo-vpered"
                class="maecenas-button">інтерв&#x27;ю
              </nuxt-link>
            </div>
          </div>
          <div class="maecenas">
            <div class="maecenas-image kvashenko"></div>
            <div class="maecenas-content">
              <div class="text-bold-18">роман квашенко</div>
              <nuxt-link
                to="/article/?cat_id=10&title=roman-kvashenko-hotilosya-b-schob-potrebi-v-metsenatstvi-ta-blagodiinosti-ne-bulo"
                class="maecenas-button">інтерв&#x27;ю
              </nuxt-link>
            </div>
          </div>
          <div class="maecenas">
            <div class="maecenas-image mishchenki"></div>
            <div class="maecenas-content">
              <div class="text-bold-18">родина міщенків</div>
              <nuxt-link to="/article/?cat_id=10&title=roman-mischenko-mistetstvo-rozshiryu-gorizonti-tomu-scho-vono--pro-maibutn"
                         class="maecenas-button">інтерв&#x27;ю
              </nuxt-link>
            </div>
          </div>
          <div class="maecenas">
            <div class="maecenas-image perebiy"></div>
            <div class="maecenas-content">
              <div class="text-bold-18">Людмила Перебийнос</div>
            </div>
          </div>
          <div class="maecenas">
            <div class="maecenas-image"></div>
            <div class="maecenas-content">
              <div class="text-bold-18">Дмитро Чернов</div>
              <nuxt-link to="/article/?cat_id=10&title=dmitro-chernov-pro-metsenatstvo-i-tsinnosti"
                         class="maecenas-button">інтерв&#x27;ю
              </nuxt-link>
            </div>
          </div>
          <div class="maecenas">
            <div class="maecenas-image tkachuk"></div>
            <div class="maecenas-content">
              <div class="text-bold-18">Олександр ткачук</div>
              <nuxt-link to="/article/?cat_id=10&title=oleksandr-tkachuk-metsenatstvo--tse-pro-rozvitok-i-stvorennya-novogo"
                         class="maecenas-button">інтерв&#x27;ю
              </nuxt-link>
            </div>
          </div>
          <div class="maecenas">
            <div class="maecenas-image sushko"></div>
            <div class="maecenas-content">
              <div class="text-bold-18">Микола Сушко</div>
              <nuxt-link to="/article/?cat_id=10&title=mikola-sushko-use-zhittya-ya-zaimayus-remontom-svitu"
                         class="maecenas-button">інтерв&#x27;ю
              </nuxt-link>
            </div>
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
          { hid: 'description', name: 'description', content: 'Меценати Премії' }
        ]
      }
    },
    data() {
      return {
        currentMaecenas: 2020
      }
    },
    methods: {
      showMaecenas(year) {
        this.currentMaecenas = +year
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
