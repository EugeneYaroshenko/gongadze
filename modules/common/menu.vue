<template>
  <div>
    <div class="menu-toggle" @click="toggleMenu">
      <div class="menu-toggle-icon menu-toggle__hide" v-if="menuShown"/>
      <div class="menu-toggle-icon menu-toggle__show" v-else/>
    </div>
    <div
      class="menu"
      :class="{'menu--shown': menuShown}">
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
              <li class="menu-subitem" v-for="(item, index) in menuStructure['gongadze'].subcategories" :key="index">
                <a :href="item.link" target="_blank" class="subitem-link w-inline-block" @click.native="hideMenu" v-if="item.link">
                  <div class="text-regular-20">{{ item.name }}</div>
                </a>
                <nuxt-link :to="item.slug" class="subitem-link w-inline-block" @click.native="hideMenu" v-else>
                  <div class="text-regular-20">{{ item.name }}</div>
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="menu-items__extended award-projects" ref="award-projects--web">
          <div class="menu_extended__floating award-projects">
            <ul role="list" class="menu-subitems">
              <li class="menu-subitem" v-for="(item, index) in projectsSubCateogries" :key="index">
                <nuxt-link :to="`/projects/${item.slug}`" class="subitem-link w-inline-block" @click.native="hideMenu">
                  <div class="text-regular-20">{{ item.name }}</div>
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="menu-items__extended about-award" ref="about-award--web">
          <div class="menu_extended__floating about-award">
            <ul role="list" class="menu-subitems">
              <li class="menu-subitem" v-for="(item, index) in menuStructure['about'].subcategories" :key="index">
                <nuxt-link :to="item.slug" class="subitem-link w-inline-block" @click.native="hideMenu">
                  <div class="text-regular-20">{{ item.name }}</div>
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
              class="menu-item__text w-inline-block w--current"
              :class="{'menu-item--current': $route.path === '/' }"
              @click.native="hideMenu"
            >
              <div class="text-bold-24">Головна</div>
            </nuxt-link>
          </div>
          <div class="menu-item" @mouseenter="hideExtendedMenu">
            <nuxt-link
              to="/news-feed"
              class="menu-item__text w-inline-block"
              @click.native="hideMenu"
              :class="{'menu-item--current': $route.path.includes('/news-feed') }"
            >
              <div class="text-bold-24">Новини</div>
            </nuxt-link>
          </div>
          <div class="menu-item" @mouseenter="hideExtendedMenu">
            <nuxt-link
              to="/publications"
              class="menu-item__text w-inline-block"
              @click.native="hideMenu"
              :class="{'menu-item--current': $route.path.includes('/publications') }"
            >
              <div class="text-bold-24">Публікації</div>
            </nuxt-link>
          </div>
          <div
            class="menu-item"
            @mouseenter="showExtendedMenu('award-projects')"
          >
            <div
              class="menu-item__text w-inline-block"
              @click.native="hideMenu"
              :class="{'menu-item--current': $route.path.includes('/projects') }"
            >
              <div class="text-bold-24">Проєкти Премії</div>
            </div>
          </div>
          <div
            class="menu-item"
            @mouseenter="showExtendedMenu('about-award')"
          >
            <nuxt-link
              to="/about"
              class="menu-item__text w-inline-block"
              @click.native="hideMenu"
              :class="{'menu-item--current': $route.path.includes('/about') }"
            >
              <div class="text-bold-24">Про Премію</div>
            </nuxt-link>
          </div>
          <div
            class="menu-item"
            @mouseenter="showExtendedMenu('georgiy-gongadze')"
          >
            <nuxt-link
              to="/georgiy-gongadze"
              class="menu-item__text w-inline-block"
              @click.native="hideMenu"
              :class="{'menu-item--current': $route.path.includes('/georgiy-gongadze') }"
            >
              <div class="text-bold-24">Георгій Ґонґадзе</div>
            </nuxt-link>
          </div>
        </div>
        <div class="menu-items__container menu-items--mobile">
          <div class="menu-items__names" v-if="mobileMenuItemsShown">
            <div class="menu-item">
              <nuxt-link
                to="/"
                class="menu-item__text w-inline-block w--current"
                @click.native="hideMenu"
                :class="{'menu-item--current': $route.path === '/' }"
              >
                <div class="text-bold-24">Головна</div>
              </nuxt-link>
            </div>
            <div class="menu-item">
              <nuxt-link
                id="menu-items__text"
                to="/news-feed"
                class="menu-item__text w-inline-block"
                @click.native="hideMenu"
                :class="{'menu-item--current': $route.path === '/news-feed' }"
              >
                <div class="text-bold-24">Новини</div>
              </nuxt-link>
            </div>
            <div class="menu-item">
              <nuxt-link
                to="/publications"
                class="menu-item__text w-inline-block"
                @click.native="hideMenu"
                :class="{'menu-item--current': $route.path === '/publications' }"
              >
                <div class="text-bold-24">Публікації</div>
              </nuxt-link>
            </div>
            <div class="menu-item">
              <div
                class="menu-item__text"
                @click="showSubMenu('award-projects--mobile')"
                :class="{'menu-item--current': $route.path === '/projects' }"
              >
                <div class="text-bold-24">Проєкти Премії</div>
              </div>
            </div>
            <div class="menu-item">
              <div
                class="menu-item__text"
                @click="showSubMenu('about-award--mobile')"
                :class="{'menu-item--current': $route.path === '/about' }"
              >
                <div class="text-bold-24">Про Премію</div>
              </div>
            </div>
            <div class="menu-item">
              <div
                class="menu-item__text"
                @click="showSubMenu('georgiy-gongadze--mobile')"
                :class="{'menu-item--current': $route.path === '/georgiy-gondadze' }"
              >
                <div class="text-bold-24">Георгій Ґонґадзе</div>
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
                  <div class="text-bold-24">Георгій Ґонґадзе</div>
                </div>
              </div>
              <div class="subname-items">
                <ul role="list" class="subname-items__list georgiy-gongadze">
                  <li class="subname-item" v-for="(item, index) in menuStructure['gongadze'].subcategories" :key="index">
                    <a :href="item.link" target="_blank" class="subname-item__link w-inline-block" @click.native="hideMenu" v-if="item.link">
                      <div class="text-regular-20">{{ item.name }}</div>
                    </a>
                    <nuxt-link :to="item.slug" class="subname-item__link w-inline-block" @click.native="hideMenu" v-else>
                      <div class="text-regular-20">{{ item.name }}</div>
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
                  <div class="text-bold-24">Проєкти Премії</div>
                </div>
              </div>
              <div class="subname-items">
                <ul role="list" class="subname-items__list award-projects">
                  <li class="subname-item" v-for="(item, index) in projectsSubCateogries" :key="item.name">
                    <nuxt-link :to="`/projects/${item.slug}`" class="subname-item__link w-inline-block" @click.native="hideMenu">
                      <div class="text-regular-20">{{ item.name }}</div>
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
                  <div class="text-bold-24">Про Премію</div>
                </div>
              </div>
              <div class="subname-items">
                <ul role="list" class="subname-items__list">
                  <li class="subname-item" @click="hideMenu">
                    <nuxt-link to="/about" class="subname-item__link w-inline-block">
                      <div class="text-regular-20">Засновники</div>
                    </nuxt-link>
                  </li>
                  <li class="subname-item" @click="hideMenu">
                    <nuxt-link to="/about/concept" class="subname-item__link w-inline-block">
                      <div class="text-regular-20">Концепція премії</div>
                    </nuxt-link>
                  </li>
                  <li class="subname-item" @click="hideMenu">
                    <nuxt-link to="/about/kapitula" class="subname-item__link w-inline-block" >
                      <div class="text-regular-20">Капітула премії</div>
                    </nuxt-link>
                  </li>
                  <li class="subname-item" @click="hideMenu">
                    <nuxt-link to="/about/laureates" class="subname-item__link w-inline-block">
                      <div class="text-regular-20">Лауреати Премії</div>
                    </nuxt-link>
                  </li>
                  <li class="subname-item" @click="hideMenu">
                    <nuxt-link to="/about/maecenas" class="subname-item__link w-inline-block">
                      <div class="text-regular-20">Меценати Премії</div>
                    </nuxt-link>
                  </li>
                  <li class="subname-item" @click="hideMenu">
                    <nuxt-link to="/about/team" class="subname-item__link w-inline-block">
                      <div class="text-regular-20">Команда Премії</div>
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="menu-icons" >
          <a href="https://facebook.com/gongadzeprize/" target="_blank" class="menu-icon facebook"></a>
          <a href="mailto:gongadzeprize@gmail.com" target="_blank" class="menu-icon mail"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { menuStructure } from '~/config/UI';
  import { mapState } from 'vuex';

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
    computed: {
      ...mapState({
                    categories: state => state.categories.categories,
                  }),
      menuStructure() {
        return menuStructure
      },
      projectsSubCateogries() {
        return this.categories.filter(category => category.parent === 4)
      }
    },
    methods: {
      toggleMenu () {
        this.menuShown = !this.menuShown
      },
      hideMenu () {
        this.backMobileMenu()
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
        this.mobileMenuItemsShown = false

        if (this.activeSubElement) {
          this.$refs[this.activeSubElement].style.opacity = 0
          this.$refs[this.activeSubElement].style.visibility = 'hidden'
        }

        this.$refs[`${element}`].style.opacity = 1
        this.$refs[`${element}`].style.visibility = 'visible'
        this.$refs[`${element}`].style.transform = 'translate3d(0, 0, 0)'

        this.activeSubElement = `${element}`
      },
      backMobileMenu() {
        this.mobileMenuItemsShown = true
        if (this.activeSubElement && this.$refs[this.activeSubElement]) {
          this.$refs[this.activeSubElement].style.opacity = 0
          this.$refs[this.activeSubElement].style.visibility = 'hidden'
          this.$refs[this.activeSubElement].style.transform = 'translate3d(40%, 0, 0)'
        }
      },
      hideExtendedMenu() {
        if (this.activeElement && this.$refs[this.activeElement].style) {
          this.$refs[this.activeElement].style.opacity = 0
          this.$refs[this.activeElement].style.visibility = 'hidden'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .menu-items__extended {
    transition: all 250ms ease-in;
  }

  .menu-toggle {
    position: fixed;
    top: 30px;
    right: 24px;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    cursor: pointer;
    z-index: 1100;
    background: #544ED9;
    border-radius: 24px;
    transition: all 200ms ease-in;
    box-shadow: none;


    &:hover {
      transform: scale(1.3);
      background: darken(#544ED9, 20%)
    }

    .menu-toggle-icon {
      background-position: 50% 50%;
      background-size: contain;
      background-repeat: no-repeat;
      height: 100%;
      width: 100%;
    }

    .menu-toggle__show {
      background-image: url('../../assets/images/menu-icon.svg');
    }

    .menu-toggle__hide {
      background-image: url('../../assets/images/close-icon.svg');
    }
  }

  .subname {
    transform: translate3d(40%, 0, 0);
    transition: all 350ms ease-in;
  }

  .menu-items__subnames {
    overflow-x: hidden;
  }

  @media screen and (max-width: 479px) {
    .menu-toggle {
      top: 20px;
    }
  }
</style>
