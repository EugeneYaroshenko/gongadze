<template>
  <div>
    <div class="gongadze-content project-container">
      <h4 class="headline-h4">Лауреати Премії</h4>
      <div class="laureate">
        <div class="laureate-visual">
          <div class="laureate-visual-back">
            <div
              data-poster-url="../../assets/videos/gongadze-placeholder-full-poster-00001.jpg"
              data-video-urls="../../assets/videos/gongadze-placeholder-full-transcode.mp4,../videos/gongadze-placeholder-full-transcode.webm"
              data-autoplay="true" data-loop="true" data-wf-ignore="true"
              class="background-laureate w-background-video w-background-video-atom">
              <video
                autoplay=""
                loop=""
                :style="{ backgroundImage: 'url(../../assets/videos/gongadze-placeholder-full-poster-00001.jpg)'}" muted="" playsinline="" data-wf-ignore="true" data-object-fit="cover"><source src="../../assets/videos/gongadze-placeholder-full-transcode.mp4" data-wf-ignore="true"><source src="../../assets/videos/gongadze-placeholder-full-transcode.webm" data-wf-ignore="true"></video></div>
            <div class="white-line white-line-2"></div>
            <div class="white-line white-line-3"></div>
          </div>
          <div class="laureate-photo laureate-shadow"></div>
          <div class="laureate-year">
            <div class="laureate-year-2020">2020</div>
          </div>
        </div>
        <div class="laureate-about">
          <h1 class="headline-h1">Вахтанґ<br>Кіпіані</h1>
          <div class="laureate-text">
            <div>Першим лауреатом Премії став Вахтанг Кіпіані – журналіст, історик, головний редактор інтернет-видання “Історична правда” та однойменного тележурналу на каналі ZIK, а згодом “Еспресо”, а також засновник Музею-архіву преси.</div>
          </div>
          <div class="laureate-text">
            <div>Фіналістами Премії-2019 також стали керівник незалежної медійної екосистеми The Ukrainians Media Тарас Прокопишин, а також перший заступник головного редактора газети “Дзеркало тижня”, автор програм “Апокриф” на радіо “НВ” та “Гра у класику” на телеканалі ZIK Сергій Рахманін.</div>
          </div>
        </div>
      </div>
      <div class="laureate">
        <div class="laureate-about">
          <h1 class="headline-h1">Вахтанґ<br>Кіпіані</h1>
          <div class="laureate-text">
            <div>Першим лауреатом Премії став Вахтанг Кіпіані – журналіст, історик, головний редактор інтернет-видання “Історична правда” та однойменного тележурналу на каналі ZIK, а згодом “Еспресо”, а також засновник Музею-архіву преси.</div>
          </div>
          <div class="laureate-text">
            <div>Фіналістами Премії-2019 також стали керівник незалежної медійної екосистеми The Ukrainians Media Тарас Прокопишин, а також перший заступник головного редактора газети “Дзеркало тижня”, автор програм “Апокриф” на радіо “НВ” та “Гра у класику” на телеканалі ZIK Сергій Рахманін.</div>
          </div>
        </div>
        <div class="laureate-visual visual-right">
          <div class="laureate-visual-back laureate-visual-right">
            <div
              data-poster-url="https://uploads-ssl.webflow.com/5ea6e7ceb109710500251a81/5ec44cfb3586a609708f9655_gogol-placeholder (1)-poster-00001.jpg"
              data-video-urls="https://uploads-ssl.webflow.com/5ea6e7ceb109710500251a81/5ec44cfb3586a609708f9655_gogol-placeholder (1)-transcode.mp4,https://uploads-ssl.webflow.com/5ea6e7ceb109710500251a81/5ec44cfb3586a609708f9655_gogol-placeholder (1)-transcode.webm"
              data-autoplay="true"
              data-loop="true" data-wf-ignore="true"
              class="background-laureate right-video w-background-video w-background-video-atom">
              <video
                autoplay=""
                loop=""
                :style="{ backgroundImage: 'url(https://uploads-ssl.webflow.com/5ea6e7ceb109710500251a81/5ec44cfb3586a609708f9655_gogol-placeholder (1)-poster-00001.jpg)'}"
                muted="" playsinline=""
                data-wf-ignore="true" data-object-fit="cover">
                <source src="https://uploads-ssl.webflow.com/5ea6e7ceb109710500251a81/5ec44cfb3586a609708f9655_gogol-placeholder (1)-transcode.mp4"
                        data-wf-ignore="true">
                <source src="https://uploads-ssl.webflow.com/5ea6e7ceb109710500251a81/5ec44cfb3586a609708f9655_gogol-placeholder (1)-transcode.webm" data-wf-ignore="true"></video></div>
            <div class="white-line"></div>
            <div class="white-line white-line-2"></div>
          </div>
          <div class="laureate-photo laureate-2019 laureate-right laureate-shadow"></div>
          <div class="laureate-year laureate-right">
            <div class="laureate-year-2019">2019</div>
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
          { hid: 'description', name: 'description', content: 'Лауреати Премії' }
        ]
      }
    },
  }
</script>

<style lang="scss" scoped>
</style>
