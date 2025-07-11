<script setup lang="ts">
const anas = ref();
const el = ref<HTMLElement>();


onMounted(() => {

    $gsap.fromTo(anas.value,{
    opacity:0,
  },{
    opacity:1,
    duration:0
  })

  const timeline = $gsap.timeline({
    delay: 0.07,
    repeat: 17,
    repeatRefresh: true,
    onComplete() {
        timeline.kill();
        el.value?.remove();
    }
  });

  timeline.to(anas.value, {
    fontFamily() {
      const fonts = [
        "Gloock",
        "DM Serif Display",
        "Tai Heritage Pro",
        "Tai Heritage Pro",
        "Edu QLD Hand",
        "Manufacturing Consent",
        "Playfair Display",
        "Libre Bodoni",
        "Slabo 13px",
        "Zen Antique Soft",
        "Source Serif 4",
      ];

      return fonts[Math.floor(Math.random() * fonts.length)];
    },
    duration: 0.07,
    fontStyle: () => {
      return ["normal", "italic"][Math.floor(Math.random() * 2)];
    },
    fontWeight: () => {
      return ["normal", "bold"][Math.floor(Math.random() * 2)];
    },
  });




  

});
</script>
<template>
  <div ref="el" class="anas-section">
    <h1 ref="anas">anas</h1>
  </div>
</template>
