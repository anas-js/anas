<script setup lang="ts">
const h1 = ref();
const svg = ref() as Ref<HTMLDivElement>;

const boxWord = ref() as Ref<HTMLDivElement>;
const skillsSection = ref();

const spanBarLoading = ref();

const projectsBoxs = ref() as Ref<HTMLDivElement>;
const education = ref() as Ref<HTMLDivElement>;
onMounted(() => {
  document.fonts.ready.then(() => {
  $gsap().to(svg.value.querySelector("path"), {
    strokeDasharray: 42461.4296875,
    scrollTrigger: {
      scrub: 3,
      start: "180px center",
      end: "+=14892 end",
      trigger: svg.value,
    },
  });

  $gsap().to(svg.value.querySelector("path"), {
    scrollTrigger: {
      trigger: svg.value,
      pin: true,
      start: "600px center",
      end: "+=400px center",
      // markers : true,
    },
  });

  $gsap().to(svg.value.querySelector("path"), {
    scrollTrigger: {
      trigger: svg.value,
      pin: true,
      start: "3200px center",
      end: "+=400px center",
      //  markers : true,
    },
  });

  $gsap().to(svg.value.querySelector("path"), {
    scrollTrigger: {
      trigger: svg.value,
      pin: true,
      start: "9000px center",
      end: "+=400px center",
      // markers: true,
      //  markers : true,
    },
  });


  $gsap().to(boxWord.value, {
    scrollTrigger: {
      trigger: boxWord.value,
      pin: true,
      start: "center center",
      end: "2000 center",
    // pinSpacing :false
    },
  });

 
  $gsap().to(boxWord.value.querySelectorAll(".box-more h2"), {
    y: (i, e) => {
      // 80
      return (e.clientHeight/1.3) * (i + 1);
    },
    opacity: 1,
    // stagger : 0.4,
    scrollTrigger: {
      scrub: 1,
      trigger: boxWord.value,
      start: "20% center",
      end: "bottom center",
      
      // markers : true,
    },
  });

  // console.log(boxWord.value.querySelector(".box-more h2")?.clientHeight)
  $gsap().to(boxWord.value, {
    // x: -2000,
  
    x: -((boxWord.value.querySelector(".box-more h2")?.clientHeight * 40) / 2.7),
    scrollTrigger: {
      scrub: 1,
      trigger: ".learn",
      start: "top center", // 130px
      end: "bottom center",
      
    },
  });

  let status = false;
  $gsap().to(boxWord.value.querySelectorAll(".box-more h2"), {
    x: (i) => {
      status = !status;
      return status ? -120 : 120;
    },
    stagger: 0.1,
    // start: "20% center",
    scrollTrigger: {
      scrub: 1,
      trigger: ".learn",
      start: "20% center",
      end: "bottom center",
   
    },
  });

  $gsap().to(skillsSection.value, {
    scrollTrigger: {
      trigger: skillsSection.value,
      pin: true,
      start: "center center",
      end: "+=4200px 30%",
      // markers:true
    },
  });

  $gsap().to(skillsSection.value.querySelector(".loading"), {
    scale: 0.5,
    // y:100,
    scrollTrigger: {
      scrub: 1,
      trigger: skillsSection.value,
      start: "top center",
      end: "bottom center",
    },
  });

  $gsap().to(spanBarLoading.value, {
    x: 0,
    // y:100,
    scrollTrigger: {
      scrub: 1,
      trigger: skillsSection.value,
      start: "top 30%",
      end: "+=5100px 30%",
   
    },
  });

  skillsSection.value.querySelectorAll(".lang > div").forEach((element, i) => {
    const value = (i + 1) * 300 + 1200;

    const tl = $gsap().timeline({
      scrollTrigger: {
        trigger: boxWord.value,
        scrub: 1.5,
        start: `${value}px center`,
        end: `${value + 300}px center`,
      },
    });

    tl.to(element, {
      // marginTop: 0,
      direction: 0.5,
      opacity: 1,
      filter: "blur(0px)",
    });

    tl.to(
      element,
      {
        direction: 0.5,
        opacity: 0,
        filter: "blur(40px)",
      },
      "+=1"
    );
  });

  projectsBoxs.value.querySelectorAll(":scope > div").forEach((ele) => {
    $gsap().to(ele.querySelectorAll(":scope > *"), {
      top: 0,
      stagger: 0.2,
      ease: "back.out",
      duration: 2,
      scrollTrigger: {
        trigger: projectsBoxs.value,
        start: "top 70%",
        end: "bottom center",
      },
    });
  });

  $gsap().to(projectsBoxs.value.querySelectorAll(":scope > div"), {
    top: 0,
    stagger: 0.2,
    opacity: 1,
    ease: "back.out",
    duration: 2,
    scrollTrigger: {
      trigger: projectsBoxs.value,
      start: "top 70%",
      end: "bottom center",
    },
  });

  $gsap().to(education.value, {
    // left: "-100%",
   left: "-130rem",
    scrollTrigger: {
      scrub: 1,
      trigger: education.value,
      start: "top 90%",
      end: "bottom top",
    },
  });
})
});
</script>

<template>
  <div class="index-page">
    <div class="container">
      <div class="heading">
        <h1 ref="h1" data-text-anime>anas</h1>
        <span></span>
      </div>

      <div class="box-path">
        <p class="move-down" data-move-top-anime data-move-top-anime-delay="1">
          اسحب تحت
        </p>
        <!-- width="1314" -->
        <svg
          class="main-path"
          ref="svg"
          height="9928"
          width="1314"
          viewBox="0 0 1314 9928"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M656.314 8C656.314 8 656.314 40.5 656.314 68C656.314 95.5 704.5 86.5 720 114.5C735.5 142.5 629.006 151 634 192.5C655.521 371.327 1036.67 409.92 990.314 443.5C943.031 477.753 352.814 404.5 279.314 424C205.814 443.5 187.314 546.5 313.814 583C440.314 619.5 975.314 731.5 1070.81 793.5C1166.31 855.5 1226.31 1004.5 1088.81 1124.5C1032.68 1173.49 772.814 1235.5 649.314 1091C525.814 946.5 311.824 1041.92 203.814 1183.5C83.3337 1341.42 7.81396 1585.5 279.314 1686.5C398.734 1730.93 471.268 1725.77 593.814 1753C958.314 1834 1148.36 1831.07 1030.31 2126.5C937.814 2358 1249.31 2307 1180.31 2462C1160.38 2506.77 1117.76 2525.58 1069.81 2518.5C996.273 2507.64 1110.6 2389.3 1180.31 2363.5C1301.36 2318.7 1359.32 2816.5 1243.81 2964.5C1078.55 3176.26 780.02 2904.33 503 2918.5C404.479 2923.54 370.252 2920.42 282 2964.5C111.214 3049.81 -12.142 3175.14 139.129 3432C297.523 3700.96 783.54 3865.4 847.314 3566.08C873.81 3441.71 882.027 3338.04 795.814 3244.58C672.033 3110.38 385.512 3236.73 363.814 3418C349.39 3538.5 431.814 3532 533.814 3532C873.265 3532 1076.18 3516.55 1077.81 3856C1079.05 4112.32 900.157 4521.06 815.499 4763C755.262 4935.15 820.999 4904 705.999 5217C591 5530 492.571 5457.61 403 5640C282.581 5885.21 150.483 6062.75 240.999 6320.5C367.331 6680.23 1179.89 6300.53 1148.5 6680.5C1137.4 6814.78 1081.3 6883.1 1005.5 6994.5C815.298 7274.02 372.671 7116.56 260.499 7435.5C186.813 7645.02 221.213 7800.65 316 8001.5C454.453 8294.89 984.711 8157.22 994 8481.5C1003.23 8803.86 461.5 8714 352.5 9001.5C243.499 9289 -136.813 9459.29 67.9994 9639.5C176.013 9734.54 347.807 9828.93 429.5 9710.5C488.964 9624.3 475.449 9512.14 395.5 9444.5C279.563 9346.41 178.758 9637.28 209.499 9786C253.282 9997.81 752.5 9895 752.5 9895"
            stroke="#464656"
            stroke-width="15"
            stroke-linecap="round" />
        </svg>
        <i class="arraw-down ri-arrow-drop-down-line"></i>
      </div>

      <section class="iam">
        <div class="yaer">
          <h2 data-text-anime>2019</h2>
          <svg
            width="384"
            data-svg-path-anime
            height="772"
            viewBox="0 0 384 772"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M381.348 60.3549C201.604 5.33118 124.175 269.088 174.092 79.0628C224.009 -110.962 57.2079 132.439 66.7546 203.014C80.9937 308.276 277.67 226.274 308.35 327.967C349.181 463.309 -3.46215 389.577 8.2874 530.455C19.4495 664.289 380.904 585.446 308.35 698.46C261.397 771.598 95.5917 763.755 95.5917 763.755"
              stroke="#A599FF"
              stroke-width="14.673" />
          </svg>
        </div>
        <div class="text">
          <h2 data-move-top-anime>أنا أنس</h2>
          <div class="box-text">
            <p data-move-top-anime data-move-top-anime-delay="0.4">
              بديت اتعلم تطويــر
            </p>
            <p data-move-top-anime data-move-top-anime-delay="0.6">
              المواقع تقريبـــــا فيــ
            </p>
            <p data-move-top-anime data-move-top-anime-delay="0.7">
              منتــــــــــــصــــــــــــــفــــــــــــــــ
            </p>
          </div>
        </div>
      </section>

      <section class="not-perfect">
        <div>
          <p
            data-text-anime
            data-text-anime-duration="0.5"
            data-text-anime-stagger="0.01">
            ما اقول اني اعـــــــــــــــــــــــــــــــــــــــــرف
          </p>
          <h2
            data-text-anime
            data-text-anime-duration="0.5"
            data-text-anime-stagger="0.01"
            data-text-anime-delay="0.5">
            كل شـــــــــــــي
          </h2>
        </div>

        <svg
          data-svg-path-anime
          width="102"
          height="521"
          viewBox="0 0 102 521"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2.54974 498.773C2.54974 498.773 50.4678 531.046 70.0991 512.614C93.9745 490.198 7.50823 475.597 20.0349 445.338C31.5844 417.44 92.1939 455.178 94.6523 425.083C96.8447 398.245 36.467 409.644 40.0638 382.957C43.5 357.463 99.4895 379.305 99.0254 353.584C98.5978 329.883 47.7366 344.536 47.9196 320.832C48.1003 297.43 94.9142 311.44 98.2298 288.273C102.12 261.092 35.974 273.953 41.2979 247.017C45.3026 226.756 77.8009 235.76 84.2294 216.132C94.2942 185.402 3.01744 188.646 21.4843 162.102C32.0779 146.874 53.9419 159.646 66.0106 145.559C90.3604 117.137 -17.2183 97.8776 7.42859 69.7128C19.3874 56.0471 42.5409 69.5781 51.0175 53.5185C62.524 31.7186 13.0743 3.0748 13.0743 3.0748"
            stroke="#D2CCFF"
            stroke-width="5"
            stroke-linecap="round" />
        </svg>
      </section>

      <section class="learn">
      <div>
        <div class="box-word" ref="boxWord">
          <h2 data-move-top-anime>بس تعلمت أشياء</h2>
          <h2 data-move-top-anime data-move-top-anime-delay="0.4">
            كثــــــــيــــــــــــــــــــــــــــــــــــــــــر
          </h2>
          <div class="box-more">
            <h2 v-for="i in 40">
              كثــــــــيــــــــــــــــــــــــــــــــــــــــــر
            </h2>
          </div>
        </div>
      </div>
 
      </section>

      <section ref="skillsSection" class="skills">
        <div class="box">
          <div class="lang">
            <div>
              <img src="~/assets/images/skills/HTML5.svg" />
              <h2>HTML</h2>
            </div>
            <div>
              <img src="~/assets/images/skills/CSS3.svg" />
              <h2>CSS</h2>
            </div>
            <div>
              <img src="~/assets/images/skills/JavaScript.png" />
              <h2>JavaScript</h2>
            </div>
            <div>
              <img src="~/assets/images/skills/jQuery.png" />
              <h2>jQuery</h2>
            </div>
            <div>
              <img src="~/assets/images/skills/Vue.js.svg" />
              <h2>Vue.js</h2>
            </div>
            <div>
              <img src="~/assets/images/skills/nuxtjs.svg" />
              <h2>NuxtJs</h2>
            </div>
            <div>
              <img src="~/assets/images/skills/sass.png" />
              <h2>Sass</h2>
            </div>
            <div>
              <img src="~/assets/images/skills/pugjs.svg" />
              <h2>PugJs</h2>
            </div>
            <div>
              <img src="~/assets/images/skills/gulpjs.png" />
              <h2>GulpJs</h2>
            </div>
            <div>
              <img src="~/assets/images/skills/jest.png" />
              <h2>JestJs</h2>
            </div>
            <div>
              <img src="~/assets/images/skills/ts.png" />
              <h2>TypeScript</h2>
            </div>
            <div>
              <img src="~/assets/images/skills/php.svg" />
              <h2>PHP</h2>
            </div>
            <div>
              <img src="~/assets/images/skills/mysql.png" />
              <h2>MySQL</h2>
            </div>
            <div>
              <img src="~/assets/images/skills/laravel.svg" />
              <h2>Laravel</h2>
            </div>
          </div>
          <div class="loading">
            <div class="bar">
              <div>
                <span ref="spanBarLoading"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="projects">
        <svg
          data-svg-path-anime
          class="decore"
          width="309"
          height="134"
          viewBox="0 0 309 134"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M305.591 47.7384C305.591 47.7384 251.242 132.481 198.148 131.118C125.845 129.261 114.717 42.6128 155.014 17.6313C173.803 5.98382 204.957 -5.69986 208.345 12.9531C222.768 92.3598 57.9101 92.7796 2.99997 36.2352"
            stroke="#D2CCFF"
            stroke-width="5"
            stroke-linecap="round" />
        </svg>

        <h2 data-move-top-anime>المشاريع</h2>
        <div class="boxs" ref="projectsBoxs">
          <div>
            <NuxtLink to="https://juzr.sa" target="_blank" class="img">
              <img src="~/assets/images/projects/juzr.png" />
              <div class="with">
                <img src="~/assets/images/skills/laravel.svg" />
                <img src="~/assets/images/skills/nuxtjs.svg" />
              </div>
            </NuxtLink>
            <h3>جُزر</h3>
            <p>
              موقع يجمع عدة مواقع في مكان واحد, بحساب واحد تسجل في اكثر من منصة
              وتستخدم الخدمات المتاحة
            </p>
          </div>
          <div>
            <NuxtLink to="https://nashit.juzr.sa" target="_blank" class="img">
              <img src="~/assets/images/projects/nashit.png" />
              <div class="with">
                <img src="~/assets/images/skills/laravel.svg" />
                <img src="~/assets/images/skills/nuxtjs.svg" />
              </div>
            </NuxtLink>
            <h3>نشط</h3>
            <p>
              لو كنت تتعلم دورات وانت من النوع اللي يحب يعرف دوراته كم مكمل فيها
              او كم باقيلي اخلصها او حتى وش اتعلم اليوم من دروس جرب نشط
            </p>
          </div>
          <div>
            <NuxtLink to="https://shajara.juzr.sa" target="_blank" class="img">
              <img src="~/assets/images/projects/shajara.png" />
              <div class="with">
                <img src="~/assets/images/skills/laravel.svg" />
                <img src="~/assets/images/skills/inertia.png" />
                <img src="~/assets/images/skills/Vue.js.svg" />
              </div>
            </NuxtLink>
            <h3>شجرة</h3>
            <p>صفحة شخصية تجمع فيها روابطك, و يميزها طريقة عرض روابطك</p>
          </div>
        </div>
      </section>

      <section class="education">
        <div>
          <h2 data-move-top-anime>تخرجت من جامعة الحدود</h2>
          <h2 data-move-top-anime>
            الشمالية فيـــ
            <span>2025</span>
          </h2>

          <svg
            class="decore"
            data-svg-path-anime
            width="233"
            height="226"
            viewBox="0 0 233 226"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.5 66.4998C47 -0.00534058 102 -2.49466 128.5 46.5053C155 95.5052 102.5 128.5 116 184C132.109 250.225 225 184 225 184"
              stroke="#A599FF"
              stroke-width="25" />
          </svg>

          <svg
            class="decore"
            width="169"
            data-svg-path-anime
            height="256"
            viewBox="0 0 169 256"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M88.4991 245C88.4991 245 -5.5006 193 15.9992 103C37.499 13 167.999 13 167.999 13"
              stroke="#A599FF"
              stroke-width="25" />
          </svg>

          <h1 class="major" ref="education">Computer Science</h1>
        </div>
      </section>

      <section class="footer">
        <p data-move-top-anime>مع تحياتي</p>

        <h2 data-text-anime>anas alanzi</h2>
        <ul class="links">
          <li><NuxtLink target="_blank" to=""><i class="ri-linkedin-fill"></i></NuxtLink></li>
          <li><NuxtLink target="_blank" to="https://github.com/anas-js"><i class="ri-github-fill"></i></NuxtLink></li>
          <li><NuxtLink target="_blank" to=""><i class="ri-phone-fill"></i></NuxtLink></li>
          <li><NuxtLink target="_blank" to="mailto:anas.mr.alanzi@gmail.com"><i class="ri-mail-fill"></i></NuxtLink></li>
        </ul>
        <ul class="about">
          <li>السيرة الذاتية</li>
          <li>الشهادة الجامعية</li>
          <li><NuxtLink target="_blank" to="/lic.json">المكتبات المفتوحة المصدر</NuxtLink></li>
        </ul>
      </section>

     <section class="noise">
     </section>
    </div>
  </div>
</template>
