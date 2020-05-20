<template>
  <div>
    <div class="menu-toggle" @click="toggleMenu">
      <div class="menu-toggle-icon menu-toggle__hide" v-if="menuShown"/>
      <div class="menu-toggle-icon menu-toggle__show" v-else/>
    </div>
    <div class="menu" v-if="menuShown">
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
                <nuxt-link to="/projects/stories-social-entrepreneurship" class="subitem-link w-inline-block" @click.native="hideMenu">
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
                <nuxt-link to="/about/team" class="subitem-link w-inline-block" @click.native="hideMenu">
                  <div class="text-regular-20">Команда Премії</div>
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="menu-items" >
        <div class="language-selector" style="display:none">
          <div class="lang-code selected">
            <div class="text-semibold-16">UA</div>
          </div>
          <div class="lang-code">
            <div class="text-semibold-16">EN</div>
          </div>
        </div>
        <div class="menu-items__container menu-items--desktop">
          <div class="menu-item" @mouseenter="hideExtendedMenu">
            <nuxt-link
              to="/"
              aria-current="page"
              class="menu-item__text menu-item--current w-inline-block w--current"
              @click.native="hideMenu"
            >
              <div class="text-bold-28">Головна</div>
            </nuxt-link>
          </div>
          <div class="menu-item" @mouseenter="hideExtendedMenu">
            <nuxt-link to="/news-feed" class="menu-item__text w-inline-block" @click.native="hideMenu">
              <div class="text-bold-28">Новини</div>
            </nuxt-link>
          </div>
          <div class="menu-item" @mouseenter="hideExtendedMenu">
            <nuxt-link to="/publications" class="menu-item__text w-inline-block" @click.native="hideMenu">
              <div class="text-bold-28">Публікації</div>
            </nuxt-link>
          </div>
          <div
            class="menu-item"
            @mouseenter="showExtendedMenu('award-projects')"
          >
            <div class="menu-item__text w-inline-block" @click.native="hideMenu">
              <div class="text-bold-28">Проєкти Премії</div>
            </div>
          </div>
          <div
            class="menu-item"
            @mouseenter="showExtendedMenu('about-award')"
          >
            <nuxt-link to="/about" class="menu-item__text w-inline-block" @click.native="hideMenu">
              <div class="text-bold-28">Про Премію</div>
            </nuxt-link>
          </div>
          <div
            class="menu-item"
            @mouseenter="showExtendedMenu('georgiy-gongadze')"
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
              <nuxt-link to="/publications" class="menu-item__text w-inline-block" @click.native="hideMenu">
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
                    <nuxt-link to="projects/journalism-change" class="subname-item__link w-inline-block" @click.native="hideMenu">
                      <div>ЖУРНАЛІСТИКА ЗМІН</div>
                    </nuxt-link>
                    <nuxt-link to="projects/profession-stay" class="subname-item__link w-inline-block" @click.native="hideMenu">
                      <div>ЛИШАЮСЬ У ПРОФЕСІЇ</div>
                    </nuxt-link>
                    <nuxt-link to="projects/stories-social-entrepreneurship" class="subname-item__link w-inline-block" @click.native="hideMenu">
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
                    <nuxt-link to="about/team" class="subname-item__link w-inline-block" @click.native="hideMenu">
                      <div>Команда Премії</div>
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="menu-icons" style="display:none">
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
      toggleMenu () {
        this.menuShown = !this.menuShown
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
        if (this.activeElement) {
          this.$refs[this.activeElement].style.opacity = 0
          this.$refs[this.activeElement].style.visibility = 'hidden'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .menu-toggle {
    position: fixed;
    top: 30px;
    right: 24px;
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    cursor: pointer;
    z-index: 1100;
    background: rgba(#fcfcfe, .8);
    border-radius: 24px;
    transition: all 300ms ease-in;
    box-shadow: none;


    &:hover {
      box-shadow: 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0281146), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0403893), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.05), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0596107), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0718854), 0px 100px 80px rgba(0, 0, 0, 0.1);
    }

    .menu-toggle-icon {
      background-position: 50% 50%;
      background-size: contain;
      background-repeat: no-repeat;
      height: 100%;
      width: 100%;
    }

    .menu-toggle__show {
      background-image: url('../assets/images/menu-icon.png');
    }

    .menu-toggle__hide {
      background-image: url('../assets/images/close-icon.svg');
    }
  }

  @media screen and (max-width: 479px) {
    .menu-toggle {
      top: 20px;
    }
  }
</style>
