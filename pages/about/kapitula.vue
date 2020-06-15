<template>
  <div>
    <div class="gongadze-content">
      <div class="gongadze-content--condensed project-container">
        <h4 class="headline-h4">Капітула Премії</h4>
        <div class="kapitula-about">
          <div class="kapitula-text-container">
            <div class="text-regular-16">Капітула Премії імені Георгія Ґонґадзе складається із 9 осіб. Незалежно від
              року до складу Капітули входять член сім’ї Георгія Ґонґадзе, президент Українського ПЕН, представники видання
              “Українська правда” та powered KMBS alumni platform, а також лауреат Премії минулого року.
            </div>
          </div>
          <div class="kapitula-text-container">
            <div class="text-regular-16">П’ять представників Капітули відповідають за запрошення чотирьох додаткових
              членів, які обираються з-поміж українських медіаекспертів, медіаменеджерів, моральних авторитетів та
              провідних інтелектуалів.
            </div>
          </div>
          <div class="kapitula-text-container">
            <div class="text-regular-16">Запрошені члени Капітули можуть перебувати в її складі не більше 3 років.</div>
          </div>
        </div>
        <h1 class="headline-h5">СКЛАД КАПІТУЛИ</h1>
        <div class="kapitula-years">
          <div class="w-layout-grid kapitula-years-container">
            <div class="kapitula-year-block" :class="{'year-selected': currentKapitula === 2020 }">
              <div id="year-2020" class="kapitula-year" @click="showKapitula('2020')">2020</div>
            </div>
            <div class="kapitula-year-block" :class="{'year-selected': currentKapitula === 2019 }">
              <div id="year-2019" class="kapitula-year" @click="showKapitula('2019')">2019</div>
            </div>
          </div>
        </div>
        <div ref="kapitula-2020" class="w-layout-grid kapitula-grid sklad-container" :class="{'sklad-container--shown': currentKapitula === 2020 }">
          <div id="w-node-53c5f4f00f64-6f0eff8c" class="kapitula-member">
            <div class="kapitula-member__photo gongadze"></div>
            <div class="kapitula-member__about">
              <div class="kapitula-about__name">
                <div class="text-bold-18">Мирослава Ґонґадзе</div>
              </div>
              <div class="kapitula-about__description">
                <div class="text-regular-14">дружина Георгія, журналістка, головна редакторка і керівниця Української
                  служби “Голосу Америки”
                </div>
              </div>
            </div>
          </div>
          <div id="w-node-dc8ea869f0fb-6f0eff8c" class="kapitula-member">
            <div class="kapitula-member__photo kulikov"></div>
            <div class="kapitula-member__about">
              <div class="kapitula-about__name">
                <div class="text-bold-18">Андрій Курков</div>
              </div>
              <div class="kapitula-about__description">
                <div class="text-regular-14">президент Українського ПЕН, письменник</div>
              </div>
            </div>
          </div>
          <div id="w-node-ea4b40235cbe-6f0eff8c" class="kapitula-member">
            <div class="kapitula-member__photo pritula"></div>
            <div class="kapitula-member__about">
              <div class="kapitula-about__name">
                <div class="text-bold-18">Олена Притула</div>
              </div>
              <div class="kapitula-about__description">
                <div class="text-regular-14">журналістка, співзасновниця і власниця видання “Українська правда”</div>
              </div>
            </div>
          </div>
          <div id="w-node-89a99cd33f4d-6f0eff8c" class="kapitula-member">
            <div class="kapitula-member__photo kipiani"></div>
            <div class="kapitula-member__about">
              <div class="kapitula-about__name">
                <div class="text-bold-18">Вахтанґ Кіпіані</div>
              </div>
              <div class="kapitula-about__description">
                <div class="text-regular-14">журналіст, засновник видання “Історична правда” та автор однойменної
                  телепрограми, засновник Музею-архіву преси, перший лауреат Премії імені Георгія Ґонґадзе (2019)
                </div>
              </div>
            </div>
          </div>
          <div id="w-node-f277c37a9faf-6f0eff8c" class="kapitula-member">
            <div class="kapitula-member__photo sushko"></div>
            <div class="kapitula-member__about">
              <div class="kapitula-about__name">
                <div class="text-bold-18">Микола Сушко</div>
              </div>
              <div class="kapitula-about__description">
                <div class="text-regular-14">меценат Премії, представник Асоціації випускників Києво-Могилянської
                  бізнес-школи
                </div>
              </div>
            </div>
          </div>
          <div id="w-node-a9b44a4dd2f3-6f0eff8c" class="kapitula-member">
            <div class="kapitula-member__photo denisenko"></div>
            <div class="kapitula-member__about">
              <div class="kapitula-about__name">
                <div class="text-bold-18">Лариса Денисенко</div>
              </div>
              <div class="kapitula-about__description">
                <div class="text-regular-14">журналістка, письменниця, правозахисниця</div>
              </div>
            </div>
          </div>
          <div id="w-node-202a23062d1c-6f0eff8c" class="kapitula-member">
            <div class="kapitula-member__photo marinovich"></div>
            <div class="kapitula-member__about">
              <div class="kapitula-about__name">
                <div class="text-bold-18"><strong>Мирослав Маринович</strong></div>
              </div>
              <div class="kapitula-about__description">
                <div class="text-regular-14">правозахисник, публіцист, релігієзнавець, віцеректор Українського
                  католицького університету у Львові та почесний президент Українського ПЕН
                </div>
              </div>
            </div>
          </div>
          <div id="w-node-0428bddcbb52-6f0eff8c" class="kapitula-member">
            <div class="kapitula-member__photo kozlovskiy"></div>
            <div class="kapitula-member__about">
              <div class="kapitula-about__name">
                <div class="text-bold-18">Ігор Козловський</div>
              </div>
              <div class="kapitula-about__description">
                <div class="text-regular-14">релігієзнавець, письменник, член Українського ПЕН</div>
              </div>
            </div>
          </div>
          <div id="w-node-78871d136d87-6f0eff8c" class="kapitula-member">
            <div class="kapitula-member__photo mostova"></div>
            <div class="kapitula-member__about">
              <div class="kapitula-about__name">
                <div class="text-bold-18">Юлія Мостова</div>
              </div>
              <div class="kapitula-about__description">
                <div class="text-regular-14">журналістка, співзасновниця та головна редактора видання “Дзеркало тижня”
                </div>
              </div>
            </div>
          </div>
        </div>
        <div ref="kapitula-2019" class="w-layout-grid kapitula-grid sklad-container" :class="{'sklad-container--shown': currentKapitula === 2019 }">
          <div id="w-node-56a79826ed3c-6f0eff8c" class="kapitula-member">
            <div class="kapitula-member__photo gongadze"></div>
            <div class="kapitula-member__about">
              <div class="kapitula-about__name">
                <div class="text-bold-18">Мирослава Ґонґадзе</div>
              </div>
              <div class="kapitula-about__description">
                <div class="text-regular-14">дружина Георгія, журналістка, головна редакторка і керівниця Української
                  служби “Голосу Америки”
                </div>
              </div>
            </div>
          </div>
          <div id="w-node-56a79826ed45-6f0eff8c" class="kapitula-member">
            <div class="kapitula-member__photo kulikov"></div>
            <div class="kapitula-member__about">
              <div class="kapitula-about__name">
                <div class="text-bold-18">Андрій Курков</div>
              </div>
              <div class="kapitula-about__description">
                <div class="text-regular-14">президент Українського ПЕН, письменник</div>
              </div>
            </div>
          </div>
          <div id="w-node-56a79826ed4e-6f0eff8c" class="kapitula-member">
            <div class="kapitula-member__photo pritula"></div>
            <div class="kapitula-member__about">
              <div class="kapitula-about__name">
                <div class="text-bold-18">Олена Притула</div>
              </div>
              <div class="kapitula-about__description">
                <div class="text-regular-14">журналістка, співзасновниця і власниця видання “Українська правда”</div>
              </div>
            </div>
          </div>
          <div id="w-node-56a79826ed57-6f0eff8c" class="kapitula-member">
            <div class="kapitula-member__photo demchenko"></div>
            <div class="kapitula-member__about">
              <div class="kapitula-about__name">
                <div class="text-bold-18"><strong>Микола Демченко</strong></div>
              </div>
              <div class="kapitula-about__description">
                <div class="text-regular-14">голова Асоціації випускників Києво-Могилянської Бізнес-Школи, співзасновник
                  юридичної компанії “Правое дело”
                </div>
              </div>
            </div>
          </div>
          <div id="w-node-56a79826ed60-6f0eff8c" class="kapitula-member">
            <div class="kapitula-member__photo glibovitskyi"></div>
            <div class="kapitula-member__about">
              <div class="kapitula-about__name">
                <div class="text-bold-18"><strong>Євген Глібовицький</strong></div>
              </div>
              <div class="kapitula-about__description">
                <div class="text-regular-14">експерт зі стратегій, керівник експертної компанії pro.mova, член
                  Несторівської групи, член наглядової ради Суспільного мовлення
                </div>
              </div>
            </div>
          </div>
          <div id="w-node-56a79826ed69-6f0eff8c" class="kapitula-member">
            <div class="kapitula-member__photo lasareva"></div>
            <div class="kapitula-member__about">
              <div class="kapitula-about__name">
                <div class="text-bold-18"><strong>Алла Лазарева</strong></div>
              </div>
              <div class="kapitula-about__description">
                <div class="text-regular-14">журналістка, перекладачка, власна кореспондентка журналу “Український
                  тиждень” у Франції
                </div>
              </div>
            </div>
          </div>
          <div id="w-node-56a79826ed72-6f0eff8c" class="kapitula-member">
            <div class="kapitula-member__photo savruk"></div>
            <div class="kapitula-member__about">
              <div class="kapitula-about__name">
                <div class="text-bold-18"><strong>Олександр Саврук</strong></div>
              </div>
              <div class="kapitula-about__description">
                <div class="text-regular-14">декан Києво-Могилянської Бізнес-Школи</div>
              </div>
            </div>
          </div>
          <div id="w-node-56a79826ed7b-6f0eff8c" class="kapitula-member">
            <div class="kapitula-member__photo denisenko"></div>
            <div class="kapitula-member__about">
              <div class="kapitula-about__name">
                <div class="text-bold-18"><strong>Лариса Денисенко</strong></div>
              </div>
              <div class="kapitula-about__description">
                <div class="text-regular-14">журналістка, письменниця, правозахисниця</div>
              </div>
            </div>
          </div>
          <div id="w-node-1b03b411cd9c-6f0eff8c" class="kapitula-member">
            <div class="kapitula-member__photo plohiy"></div>
            <div class="kapitula-member__about">
              <div class="kapitula-about__name">
                <div class="text-bold-18"><strong>Сергій Плохій</strong></div>
              </div>
              <div class="kapitula-about__description">
                <div class="text-regular-14">професор історії, директор Українського наукового інституту Гарвардського
                  університету
                </div>
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
          { hid: 'description', name: 'description', content: 'Капітула Премії' }
        ]
      }
    },
    data() {
      return {
        currentKapitula: 2020
      }
    },
    methods: {
      showKapitula(year) {
        this.currentKapitula = +year
        console.log(this.currentKapitula)
      }
    }

    //   $('#year-2019').click(function() {
    //   $('#year-2020').parent().removeClass('year-selected');
    //   $(this).parent().addClass('year-selected');
    //   $('#kapitula-2020').hide();
    //   $('#kapitula-2019').show();
    // })
    // $('#year-2020').click(function() {
    //   $('#year-2019').parent().removeClass('year-selected');
    //   $(this).parent().addClass('year-selected');
    //   $('#kapitula-2019').hide();
    //   $('#kapitula-2020').show();
    // })
  }
</script>

<style lang="scss" scoped>
</style>
