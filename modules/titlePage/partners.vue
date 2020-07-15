<template>
  <div class="partners-container">
    <h1 class="headline-h4 first-page-headline">Партнери</h1>
    <div class="partners-multicolumn">
      <div class="partners-column">
        <div class="partners-block">
          <div class="partner-subheading">
            <div class="text-semibold-16">Засновники</div>
          </div>
          <div class="w-layout-grid partners-grid founders-grid">
            <a href="https://pen.org.ua" target="_blank" class="partner-icon__container w-inline-block">
              <div class="partner-icon pen-ukraine"></div>
            </a>
            <a href="https://www.pravda.com.ua" target="_blank" class="partner-icon__container w-inline-block">
              <div class="partner-icon ukrainska-pravda"></div>
            </a>
            <a href="https://www.facebook.com/kmbsalumni/" target="_blank" class="partner-icon__container w-inline-block">
              <div class="partner-icon kmbs-alumni"></div>
            </a>
          </div>
        </div>
      </div>
      <div class="partners-column extra-column">
        <div class="partner-subheading">
          <div class="text-semibold-16">Інформаційні партнери</div>
        </div>
        <div class="partners-block">
          <div class="w-layout-grid partners-grid">
            <a href="https://culture.suspilne.media" target="_blank" class="partner-icon__container w-inline-block">
              <div class="partner-icon ua-kultura"></div>
            </a>
            <a id="w-node-d1d144c1321a-af057138" href="https://www.radiosvoboda.org" target="_blank" class="partner-icon__container w-inline-block">
              <div class="partner-icon radio-svoboda"></div>
            </a>
            <a href="https://detector.media/" target="_blank" class="partner-icon__container w-inline-block">
              <div class="partner-icon detector-media"></div>
            </a>
            <a href="https://internews.ua" target="_blank" class="partner-icon__container w-inline-block">
              <div class="partner-icon internews-ukraine"></div>
            </a>
            <a href="https://imi.org.ua" target="_blank" class="partner-icon__container w-inline-block">
              <div class="partner-icon imi-logo"></div>
            </a>
            <a href="https://nachasi.com" target="_blank" class="partner-icon__container w-inline-block">
              <div class="partner-icon na-chasi"></div>
            </a>
            <a href="https://mind.ua" target="_blank" class="partner-icon__container w-inline-block">
              <div class="partner-icon mind-logo"></div>
            </a>
            <a href="https://hromadske.ua" target="_blank" class="partner-icon__container w-inline-block">
              <div class="partner-icon hromadske-logo"></div>
            </a>
            <a href="https://espreso.tv/" target="_blank" class="partner-icon__container w-inline-block">
              <div class="partner-icon espreso-logo"></div>
            </a>
            <a href="http://www.reporters.media/" target="_blank" class="partner-icon__container w-inline-block">
              <div class="partner-icon reporters-logo"></div>
            </a>
          </div>
        </div>
      </div>
      <div class="partners-column">
        <div class="partner-subheading">
          <div class="text-semibold-16"> Організаційні партнери</div>
        </div>
        <div class="partners-block">
          <div class="w-layout-grid partners-grid organizational-partners-grid">
            <a href="http://twiga.com.ua/" target="_blank" class="partner-icon__container w-inline-block">
              <div class="partner-icon twiga"></div>
            </a>
            <a href="https://kmbs.ua/" target="_blank" class="partner-icon__container w-inline-block">
              <div class="partner-icon kmbs-logo"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>

  .partners-block {
    margin-bottom: auto;
  }

  .partners-grid {
    justify-items: center;
    grid-column-gap: 8px;
    grid-row-gap: 8px;
    -ms-grid-columns: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    -ms-grid-rows: auto;
    grid-template-rows: auto;
  }

  .founders-grid {
    -ms-grid-columns: 1fr;
    grid-template-columns: 1fr;
  }

  .partners-grid.organizational-partners-grid {
    max-width: 600px;
    margin-right: auto;
    margin-left: auto;
    -ms-grid-columns: 1fr;
    grid-template-columns: 1fr;
  }

  .partner-icon__container {
    width: 100%;
    max-width: 150px;
    padding: 8px 12px;
    border-radius: 8px;
  }

  .partner-subheading {
    margin-top: 40px;
    margin-bottom: 12px;
    text-align: center;
  }

  .partner-icon {
    height: 60px;
    max-width: 150px;
    background-image: url('https://d3e54v103j8qbb.cloudfront.net/img/example-bg.png');
    background-position: 50% 50%;
    background-size: contain;
    background-repeat: no-repeat;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
  }

  .partner-icon:hover {
    -webkit-filter: grayscale(0%);
    filter: grayscale(0%);
  }

  .partner-icon.ua-kultura {
    background-image: url('../../assets/images/UA_Kultura_logo.png');
    background-position: 50% 50%;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .partner-icon.radio-svoboda {
    background-image: url('../../assets/images/radio-svoboda_compact-brandmark.svg');
    background-position: 50% 50%;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .partner-icon.internews-ukraine {
    background-image: url('../../assets/images/internews-ukraine-01.svg');
  }

  .partner-icon.mind-logo {
    background-image: url('../../assets/images/mind_logo-01.svg');
  }

  .partner-icon.detector-media {
    background-image: url('../../assets/images/detector-media_vv.svg');
    background-position: 50% 50%;
    background-size: cover;
  }

  .partner-icon.imi-logo {
    background-image: url('../../assets/images/ІМІ.png');
  }

  .partner-icon.na-chasi {
    background-image: url('../../assets/images/Na-chasi-0.svg');
  }

  .partner-icon.hromadske-logo {
    background-image: url('../../assets/images/Logo-O-2.png');
  }

  .partner-icon.pen-ukraine {
    background-image: url('../../assets/images/pen-ukraine.svg');
    background-size: contain;
  }

  .partner-icon.ukrainska-pravda {
    background-image: url('../../assets/images/pravda.png');
  }

  .partner-icon.kmbs-alumni {
    background-image: url('../../assets/images/kmbs-icon.svg');
  }

  .partner-icon.twiga {
    background-image: url('../../assets/images/logo.png');
    background-position: 50% 100%;
  }

  .partner-icon.kmbs-logo {
    background-image: url('../../assets/images/kmbs-grey.svg');
    background-position: 50% 100%;
    background-size: contain;
  }

  .partner-icon.espreso-logo {
    background-image: url('../../assets/images/ESPRESO_FULL-LOGO-04.png');
  }

  .partner-icon.reporters-logo {
    background-image: url('../../assets/images/reporters_1.svg');
  }

  .partner {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-right: auto;
    margin-left: auto;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }


  .partners-container {
    margin-top: 54px;
    padding: 40px 16px 8px;
  }

  .partners {
    width: 800px;
    margin-right: auto;
    margin-left: auto;
  }

  .partners-multicolumn {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
  }

  .partners-column {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    width: 100%;

    &.extra-column {
      flex: 2;
    }
  }

  @media screen and (max-width: 991px) {
    .partner-icon.internews-ukraine {
      background-size: contain;
    }
    .partner-icon.detector-media {
      background-size: contain;
    }
    .partners-container {
      padding-top: 24px;
    }
  }

  @media screen and (max-width: 767px) {
    .partners-grid {
      grid-column-gap: 24px;
      grid-row-gap: 28px;
      -ms-grid-columns: 1fr 1fr;
      grid-template-columns: 1fr 1fr;
    }

    .partners-grid.organizational-partners-grid {
      max-width: 400px;
      -ms-grid-columns: 1fr 1fr;
      grid-template-columns: 1fr 1fr;
    }
    .partners-container {
      padding-right: 12px;
      padding-left: 12px;
    }
    .partners {
      width: 100%;
    }
  }

  @media screen and (max-width: 479px) {
    .partners-grid {
      -ms-grid-columns: 1fr 1fr;
      grid-template-columns: 1fr 1fr;
    }

    .founders-grid {
      grid-column-gap: 24px;
      grid-row-gap: 28px;
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr;
    }

    .partners-multicolumn {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
    }
  }

  #w-node-d1d144c1321a-af057138 {
    -ms-grid-row: span 1;
    grid-row-start: span 1;
    -ms-grid-row-span: 1;
    grid-row-end: span 1;
    -ms-grid-column: span 1;
    grid-column-start: span 1;
    -ms-grid-column-span: 1;
    grid-column-end: span 1;
  }
</style>
