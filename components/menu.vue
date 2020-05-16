<template>
  <div>
    <div class="menu-show" @click="showMenu" />
    <div class="menu" v-if="menuShown">
      <div class="close-icon" @click="hideMenu"></div>
      <div
        class="menu-extended"
        :class="{'menu-extended--shown': extendedMenuShown}"
      >
        <div
          class="menu-items__extended georgiy-gongadze"
          ref="georgiy-gongadze--web"
        >
          <div class="menu_extended__floating georgiy-gongadze">
            <ul role="list" class="menu-subitems">
              <li class="menu-subitem">
                <nuxt-link to="/georgiy-gongadze" class="subitem-link w-inline-block" @click.native="hideMenu">
                  <div class="text-regular-20">біографія</div>
                </nuxt-link>
              </li>
              <li class="menu-subitem">
                <nuxt-link to="/georgiy-gongadze/memories" class="subitem-link w-inline-block" @click.native="hideMenu">
                  <div class="text-regular-20">спогади</div>
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="menu-items__extended award-projects" ref="award-projects--web">
          <div class="menu_extended__floating award-projects">
            <ul role="list" class="menu-subitems">
              <li class="menu-subitem">
                <nuxt-link to="/projects/publications" class="subitem-link w-inline-block" @click.native="hideMenu">
                  <div class="text-regular-20">Публікації</div>
                </nuxt-link>
              </li>
              <li class="menu-subitem">
                <nuxt-link to="/projects/journalism-sovereign-ukraine" class="subitem-link w-inline-block" @click.native="hideMenu">
                  <div class="text-regular-20">Журналістика незалежної України:<br>Історія від першої особи</div>
                </nuxt-link>
              </li>
              <li class="menu-subitem">
                <nuxt-link to="/projects/journalism-change" class="subitem-link w-inline-block" @click.native="hideMenu">
                  <div class="text-regular-20">Журналістика змін</div>
                </nuxt-link>
              </li>
              <li class="menu-subitem">
                <nuxt-link to="/projects/profession-stay" class="subitem-link w-inline-block" @click.native="hideMenu">
                  <div class="text-regular-20">Лишаюсь у професії</div>
                </nuxt-link>
              </li>
              <li class="menu-subitem">
                <nuxt-link to="/projects/social-enterprize" class="subitem-link w-inline-block" @click.native="hideMenu">
                  <div class="text-regular-20">Історії соціального підприємництва</div>
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="menu-items__extended about-award" ref="about-award--web">
          <div class="menu_extended__floating about-award">
            <ul role="list" class="menu-subitems">
              <li class="menu-subitem">
                <nuxt-link to="/about" class="subitem-link w-inline-block" @click.native="hideMenu">
                  <div class="text-regular-20">Засновники</div>
                </nuxt-link>
              </li>
              <li class="menu-subitem">
                <nuxt-link to="/about/concept" class="subitem-link w-inline-block" @click.native="hideMenu">
                  <div class="text-regular-20">концепція премії</div>
                </nuxt-link>
              </li>
              <li class="menu-subitem">
                <nuxt-link to="/about/kapitula" class="subitem-link w-inline-block" @click.native="hideMenu">
                  <div class="text-regular-20">капітула премії</div>
                </nuxt-link>
              </li>
              <li class="menu-subitem">
                <nuxt-link to="/about/laureates" class="subitem-link w-inline-block" @click.native="hideMenu">
                  <div class="text-regular-20">лауреати премії</div>
                </nuxt-link>
              </li>
              <li class="menu-subitem">
                <nuxt-link to="/about/maecenas" class="subitem-link w-inline-block" @click.native="hideMenu">
                  <div class="text-regular-20">меценати премії</div>
                </nuxt-link>
              </li>
              <li class="menu-subitem">
                <nuxt-link to="/about/contacts" class="subitem-link w-inline-block" @click.native="hideMenu">
                  <div class="text-regular-20">Контакти</div>
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="menu-items">
        <div class="language-selector">
          <div class="lang-code selected">
            <div class="text-semibold-16">UA</div>
          </div>
          <div class="lang-code">
            <div class="text-semibold-16">EN</div>
          </div>
        </div>
        <div class="menu-items__container menu-items--desktop">
          <div class="menu-item">
            <nuxt-link
              to="/"
              aria-current="page"
              class="menu-item__text menu-item--current w-inline-block w--current"
              @click.native="hideMenu"
            >
              <div class="text-bold-28">Головна</div>
            </nuxt-link>
          </div>
          <div class="menu-item">
            <nuxt-link to="/news" class="menu-item__text w-inline-block" @click.native="hideMenu">
              <div class="text-bold-28">Новини</div>
            </nuxt-link>
          </div>
          <div
            class="menu-item"
            @mouseenter="showExtendedMenu('award-projects')"
            @mouseleave="hideExtendedMenu('award-projects')"
          >
            <nuxt-link to="/projects/publications" class="menu-item__text w-inline-block" @click.native="hideMenu">
              <div class="text-bold-28">Проєкти Премії</div>
            </nuxt-link>
          </div>
          <div
            class="menu-item"
            @mouseenter="showExtendedMenu('about-award')"
            @mouseleave="hideExtendedMenu('about-award')"
          >
            <nuxt-link to="/about" class="menu-item__text w-inline-block" @click.native="hideMenu">
              <div class="text-bold-28">Про Премію</div>
            </nuxt-link>
          </div>
          <div
            class="menu-item"
            @mouseenter="showExtendedMenu('georgiy-gongadze')"
            @mouseleave="hideExtendedMenu('georgiy-gongadze')"
          >
            <nuxt-link to="/georgiy-gongadze" class="menu-item__text w-inline-block" @click.native="hideMenu">
              <div class="text-bold-28">Георгій Ґонґадзе</div>
            </nuxt-link>
          </div>
        </div>
        <div class="menu-items__container menu-items--mobile">
          <div class="menu-items__names" v-if="mobileMenuItemsShown">
            <div class="menu-item">
              <nuxt-link to="/" aria-current="page" class="menu-item__text w-inline-block w--current" @click.native="hideMenu">
                <div class="text-bold-28">Головна</div>
              </nuxt-link>
            </div>
            <div class="menu-item">
              <nuxt-link id="menu-items__text" to="/news-feed" class="menu-item__text w-inline-block" @click.native="hideMenu">
                <div class="text-bold-28">Новини</div>
              </nuxt-link>
            </div>
            <div class="menu-item">
              <div class="menu-item__text" @click="showSubMenu('award-projects--mobile')">
                <div class="text-bold-28">Проєкти Премії</div>
              </div>
            </div>
            <div class="menu-item">
              <div class="menu-item__text"  @click="showSubMenu('about-award--mobile')">
                <div class="text-bold-28">Про Премію</div>
              </div>
            </div>
            <div class="menu-item">
              <div class="menu-item__text" @click="showSubMenu('georgiy-gongadze--mobile')">
                <div class="text-bold-28">Георгій Ґонґадзе</div>
              </div>
            </div>
          </div>
          <div class="menu-items__subnames">
            <div ref="georgiy-gongadze--mobile" class="subname georgiy-gongadze">
              <div class="subname-control">
                <div class="back-block">
                  <div class="back-icon" @click="backMobileMenu"></div>
                </div>
                <div class="control-name">
                  <div class="text-bold-28">Георгій Ґонґадзе</div>
                </div>
              </div>
              <div class="subname-items">
                <ul role="list" class="subname-items__list georgiy-gongadze">
                  <li class="subname-item">
                    <nuxt-link to="/georgiy-gongadze" class="subname-item__link w-inline-block" @click.native="hideMenu">
                      <div>біографія</div>
                    </nuxt-link>
                  </li>
                  <li class="subname-item">
                    <nuxt-link to="/georgiy-gongadze/memories" class="subname-item__link w-inline-block" @click.native="hideMenu">
                      <div>спогади</div>
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="subname award-projects" ref="award-projects--mobile">
              <div class="subname-control">
                <div class="back-block">
                  <div class="back-icon" @click="backMobileMenu"></div>
                </div>
                <div class="control-name">
                  <div class="text-bold-28">Проєкти Премії</div>
                </div>
              </div>
              <div class="subname-items">
                <ul role="list" class="subname-items__list award-projects">
                  <li class="subname-item">
                    <nuxt-link to="projects" class="subname-item__link w-inline-block" @click.native="hideMenu">
                      <div>ПУБЛІКАЦІЇ</div>
                    </nuxt-link>
                  </li>
                  <li class="subname-item">
                    <nuxt-link to="projects/journalism-sovereign-ukraine" class="subname-item__link w-inline-block" @click.native="hideMenu">
                      <div>ЖУРНАЛІСТИКА НЕЗАЛЕЖНОЇ УКРАЇНИ:<br>ІСТОРІЯ ВІД ПЕРШОЇ ОСОБИ</div>
                    </nuxt-link>
                  </li>
                  <li class="subname-item">
                    <nuxt-link to="projects/journalism-change" class="subname-item__link w-inline-block" @click.native="hideMenu">
                      <div>ЖУРНАЛІСТИКА ЗМІН</div>
                    </nuxt-link>
                    <nuxt-link to="projects/profession-stay" class="subname-item__link w-inline-block" @click.native="hideMenu">
                      <div>ЛИШАЮСЬ У ПРОФЕСІЇ</div>
                    </nuxt-link>
                    <nuxt-link to="projects/social-enterprize" class="subname-item__link w-inline-block" @click.native="hideMenu">
                      <div>Історії соціального прідприємництва</div>
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="subname about-award" ref="about-award--mobile">
              <div class="subname-control">
                <div class="back-block">
                  <div class="back-icon" @click="backMobileMenu"></div>
                </div>
                <div class="control-name">
                  <div class="text-bold-28">Про Премію</div>
                </div>
              </div>
              <div class="subname-items">
                <ul role="list" class="subname-items__list">
                  <li class="subname-item">
                    <nuxt-link to="about" class="subname-item__link w-inline-block" @click.native="hideMenu">
                      <div>Засновники</div>
                    </nuxt-link>
                  </li>
                  <li class="subname-item">
                    <nuxt-link to="about/concept" class="subname-item__link w-inline-block" @click.native="hideMenu">
                      <div>концепція премії</div>
                    </nuxt-link>
                  </li>
                  <li class="subname-item">
                    <nuxt-link to="about/kapitula" class="subname-item__link w-inline-block" @click.native="hideMenu">
                      <div>Капітула Премії</div>
                    </nuxt-link>
                  </li>
                  <li class="subname-item">
                    <nuxt-link to="about/laureates" class="subname-item__link w-inline-block" @click.native="hideMenu">
                      <div>Лауреати Премії</div>
                    </nuxt-link>
                  </li>
                  <li class="subname-item">
                    <nuxt-link to="about/maecenas" class="subname-item__link w-inline-block" @click.native="hideMenu">
                      <div>Меценати Премії</div>
                    </nuxt-link>
                  </li>
                  <li class="subname-item">
                    <nuxt-link to="about/contacts" class="subname-item__link w-inline-block" @click.native="hideMenu">
                      <div>Контакти</div>
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="menu-icons">
          <div class="menu-icon facebook"></div>
          <div class="menu-icon instagram"></div>
          <div class="menu-icon"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        menuShown: false,
        extendedMenuShown: false,
        activeElement: null,
        mobileMenuItemsShown: true,
        activeSubElement: null,
      }
    },

    methods: {
      showMenu () {
        console.log('here')
        this.menuShown = true
      },
      hideMenu () {
        this.menuShown = false
        this.mobileMenuItemsShown = true
        this.extendedMenuShown = false
      },
      showExtendedMenu(element) {
        this.extendedMenuShown = true
        if (this.activeElement) {
          this.$refs[this.activeElement].style.opacity = 0
          this.$refs[this.activeElement].style.visibility = 'hidden'
        }

        this.$refs[`${element}--web`].style.opacity = 1
        this.$refs[`${element}--web`].style.visibility = 'visible'

        this.activeElement = `${element}--web`
        // this.$refs[`${element}--web`].style.opacity = 1
      },
      showSubMenu(element) {
        console.log(element, this.$refs[`${element}`])
        this.mobileMenuItemsShown = false

        if (this.activeSubElement) {
          this.$refs[this.activeSubElement].style.opacity = 0
          this.$refs[this.activeSubElement].style.visibility = 'hidden'
        }

        this.$refs[`${element}`].style.opacity = 1
        this.$refs[`${element}`].style.visibility = 'visible'

        this.activeSubElement = `${element}`
      },
      backMobileMenu() {
        this.mobileMenuItemsShown = true
        if (this.activeSubElement) {
          this.$refs[this.activeSubElement].style.opacity = 0
          this.$refs[this.activeSubElement].style.visibility = 'hidden'
        }
      },
      hideExtendedMenu() {
        // this.$refs[`${element}--web`].style.opacity = 0
      }
    },

  // // mobile
  // $('#about-award__mobile').click(function() {
  //   $('.menu-items__names').hide();
  //   $('.menu-items__subnames').show();
  //   $('.subname.about-award').fadeIn();
  // })
  // $('#georgiy-gongadze__mobile').click(function() {
  //   $('.menu-items__names').hide();
  //   $('.menu-items__subnames').show();
  //   $('.subname.georgiy-gongadze').fadeIn();
  // })
  // $('#award-projects__mobile').click(function() {
  //   $('.menu-items__names').hide();
  //   $('.menu-items__subnames').show();
  //   $('.subname.award-projects').fadeIn();
  // })
  // $('.back-icon').click(function() {
  //   $('.subname').hide();
  //   $('.menu-items__names').show();
  //   $('.menu-items__subnames').hide();
  // })
  }
</script>

<style lang="scss" scoped>
</style>
