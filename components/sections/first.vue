<script setup lang="ts">
import { Flip } from "gsap/Flip";

const cropper = ref<HTMLElement>(null!);
const stuck = ref<HTMLElement>(null!);
const image = ref<HTMLElement>(null!);
const texts = ref<HTMLElement>(null!);
const description = ref<HTMLElement>(null!);
// symbols
onMounted(() => {
  setTimeout(() => {
    const symbols = ["✦"];
    let elCounter = 0;

    setInterval(() => {
      if (elCounter < 5) {
        const el = document.createElement("span");
        const randomSymbol =
          symbols[Math.floor(Math.random() * symbols.length)];
        el.textContent = randomSymbol;
        el.classList.add("symbol");

        cropper.value?.append(el);

        const duration = $gsap.utils.random(0.5, 10, 1);
        // console.log($gsap.utils.random(-30, 30, 1),$gsap.utils.random(-360, 360, 1))
        $gsap.fromTo(
          el,
          {
            // animationDuration : duration,
            // duration : duration,
            fontSize: $gsap.utils.random(20, 120, 1),
            color: $gsap.utils.random(["#3A3A3A", "#A599FF"]),
            rotateZ: $gsap.utils.random(-30, 30, 1),
            left: $gsap.utils.random([
              $gsap.utils.random(-10, 5, 1) + "%",
              $gsap.utils.random(95, 130, 1) + "%",
            ]),
            top: "100%",
            ease: "none",
          },
          {
            duration: duration,
            rotateZ: $gsap.utils.random(-360, 360, 1),
            top: "0%",
            translateY: "-100%",
            ease: "none",
            onComplete() {
              el.remove();
              elCounter--;
            },
          }
        );

        elCounter++;

        // console.log(duration*1000);

        //   setTimeout(() => {

        //   },duration*1000);
      }
    }, 1000);
  }, 2000);
});

onMounted(() => {
  $gsap.fromTo(
    stuck.value,
    {
      scale: 0,
    },
    {
      scale: 1,
      delay: 2,
    }
  );
});

onMounted(() => {
  const stateImage = Flip.getState(image.value);
  const stateCropper = Flip.getState(cropper.value);

  $gsap.set(image.value, {
    height: 120,
    width: 120,
  });

  Flip.to(stateImage, {
    delay: 2,
    ease: "power2.out",
    duration: 1,
  });

  const postion = cropper.value.getBoundingClientRect();
  $gsap.set(cropper.value, {
    left: (postion.left - window.innerWidth / 2 + postion.width / 2) * -1,
  });

  Flip.to(stateCropper, {
    delay: 2,
    ease: "power2.out",
    duration: 1,
  });

  $gsap.fromTo(
    image.value,
    {
      opacity: 0,
      translateY: 50,
    },
    {
      opacity: 1,
      translateY: 0,
      ease: "circ.out",
      duration: 0.5,
      delay: 1.5,
    }
  );

  // height : 120,
  // width: 120

  // position: absolute;
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%);
  // $gsap.fromTo(stuck.value, {
  //     scale:0
  //   },{
  //     scale:1,
  //     delay:0.3
  //   });
});

onMounted(() => {
  $gsap.to([texts.value.children], {
    translateX:
      (texts.value.getBoundingClientRect().left + texts.value.clientWidth) * -1,
    stagger: 0.1,
    scrollTrigger: {
      start: "100px top",
      end: "400px top",
      scrub: 1,
    },
    ease: "power2.inOut",
  });

  setTimeout(() => {
    console.log(
      cropper.value.getBoundingClientRect().left -
        texts.value.getBoundingClientRect().left,
      $gsap.getProperty(cropper.value, "x")
    );
    $gsap.fromTo(
      cropper.value,
      {
        x: $gsap.getProperty(cropper.value, "x"),
      },
      {
        x:
          (cropper.value.getBoundingClientRect().left -
            texts.value.getBoundingClientRect().left -
            $gsap.getProperty(cropper.value, "x")) *
          -1,
        scrollTrigger: {
          start: "100px top",
          end: "400px top",
          scrub: 1,
          // markers:true
        },
        ease: "power2.inOut",
      }
    );
  }, 3000);

  $gsap.to(description.value, {
    left: "50%",
    scrollTrigger: {
      start: "200px top",
      end: "400px top",
      scrub: 1,
      // markers: true,
    },
    // ease: "power2.inOut",
  });
});

const errorPathSvg = ref<HTMLElement>(null!);
const mouse = ref<HTMLElement>(null!);
const mousePath = ref<SVGPathElement>(null!);
const textWho = ref<SVGPathElement>(null!);
const textEnjoys = ref<SVGPathElement>(null!);
const textMaking = ref<SVGPathElement>(null!);
onMounted(() => {
  $gsap.set(errorPathSvg.value, {
    drawSVG: 0,
  });

  $gsap.to(errorPathSvg.value, {
    drawSVG: "100%",
    scrollTrigger: {
      start: "600px top",
      end: "650px top",
      scrub: 1,
    },
  });

  // onLeave(e) {
  //               $gsap.set( (e.animation?.targets()[2] as HTMLElement).parentElement, { overflow: 'unset' });
  //             },
  //             onEnterBack(e) {

  //               $gsap.set( (e.animation?.targets()[2] as HTMLElement).parentElement, { overflow: 'hidden' });
  //             }

  $gsap.fromTo(
    description.value.querySelector(".flag"),
    {
      rotateZ: 49,
      translateX: "-9vh",
      translateY: "2vh",
      scale: 0,
    },
    {
      rotateZ: 18,
      scale: 1,
      translateX: 0,
      translateY: 0,
      scrollTrigger: {
        start: "700px top",
        end: "750px top",
        scrub: 1,
        // markers:true
      },
      onStart() {
        $gsap.set(this.targets()[0].parentElement.parentElement.parentElement, {
          overflow: "unset",
        });
      },
      // onComplete() {
      //   console.log('coplate');
      // },
      onReverseComplete() {
        $gsap.set(this.targets()[0].parentElement.parentElement.parentElement, {
          overflow: "hidden",
        });
      },
    }
  );

  const timeline = $gsap.timeline();
  // rotateX(45deg)

  timeline.fromTo(
    mouse.value,
    {
      scale: 0,
    },
    {
      duration: 2,
      scale: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        start: "800px top",
        end: "950px top",
        scrub: 1,
      
      },
      motionPath: {
        path: mousePath.value,
        align: mousePath.value,
        alignOrigin: [0.5, 0.5],
      },
    }
  );

  timeline.to(mouse.value,{
    rotateX: 50,
    duration: 1,
    scrollTrigger: {
        start: "1200px top",
        end: "1200px top",
        scrub: 1,
  
      },
  })

  $gsap.to([errorPathSvg.value,mouse.value,description.value.querySelector(".flag")],{
    opacity : 0,
    scrollTrigger: {
        start: "1400px top",
        end: "1400px top",
        scrub: 1,
        // markers: true,
      },
  });

  $gsap.to(textWho.value,{
    duration: 2,
    text: "who's",
    scrollTrigger: {
        start: "1450px top",
        end: "1550px top",
        scrub: 1,
      
        
      },
  });

  $gsap.to(textEnjoys.value,{
    duration: 2,
    text: "crazy",
    scrollTrigger: {
        start: "1550px top",
        end: "1600px top",
        scrub: 1,
        // markers: true,
        
      },
  });

  $gsap.to(textMaking.value,{
    duration: 2,
    text: "about making",
    scrollTrigger: {
        start: "1600px top",
        end: "1700px top",
        scrub: 1,
        // markers: true,
        
      },
  });
});
</script>
<template>
  <div class="first-section">
    <div class="content">
      <div class="text" ref="texts">
        <GsapGroup>
          <p>
            <GsapText :options="{ delay: 2, stagger: 0.2 }">
              Full-Stack Web Engineer
            </GsapText>
          </p>

          <h1>
            <GsapText position="=-1">anas</GsapText>

            <div ref="stuck" class="stuck">
              <span class="number">+8</span>
              <span class="text">projects</span>
            </div>
          </h1>
          <h2><GsapText position="=-0.7">Al-Anzi</GsapText></h2>
        </GsapGroup>
      </div>
      <div class="image">
        <div ref="cropper" class="cropper">
          <img ref="image" src="@/assets/images/profile.jpg" />
        </div>
      </div>
      <div ref="description" class="description">
        <h1>
          <GsapText
            :options="{
              stagger: 0.07,
              scrollTrigger: { start: '200px top', end: '400px top', scrub: 1 },
            }">
            Someone <span ref="textWho">who</span>
            <span class="colred error">
             <span ref="textEnjoys">enjoys</span>
              <svg
                width="307"
                height="25"
                viewBox="0 0 307 25"
                fill="none"
                class="line"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  ref="errorPathSvg"
                  d="M3 12C3 12 10.2913 4.18864 16 4.99999C22.9218 5.98377 19.7544 17.6626 26.5 19.5C35.2092 21.8723 35.8476 2.42811 44.5 4.99999C51.0935 6.95989 48.4747 16.1817 54.5 19.5C65.5912 25.6082 75.6603 -4.94306 83.5 4.99999C87.0803 9.54083 82.751 15.0974 86.5 19.5C93.9808 28.2851 102.821 3.1297 113.5 7.49999C119.507 9.9584 117.167 25 125 19.5C132.833 14 139.025 3.44987 148.5 7.49999C154.109 9.89761 153.399 16.1538 158.5 19.5C170.827 27.5872 184.333 14.5 195.5 12C206.667 9.49999 208.751 19.0012 218 19.5C231.693 20.2385 240.5 7.49999 251 7.49999C261.5 7.49999 256.159 16.991 262 19.5C271.194 23.449 277 -1 286.5 12C296 25 304.5 12 304.5 12"
                  stroke="#F46844"
                  stroke-width="5"
                  stroke-linecap="round" />
              </svg>
              <span class="flag">
                Crazy
                <svg
                  class="path"
                  viewBox="0 0 256 452"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    ref="mousePath"
                    d="M255.76 451C255.76 451 77.4123 419.909 22.7601 334C-47.9371 222.869 76.2601 1 76.2601 1" />
                </svg>
              </span>
            </span>
            <span class="textMaking" ref="textMaking">making</span>
            <span class="colred">awesome</span>
            things.
          </GsapText>
        </h1>
        <img ref="mouse" src="@/assets/images/mouse.svg" />
      </div>
    </div>
  </div>
</template>
