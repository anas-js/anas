<script setup lang="ts">
const wrapper = ref<HTMLElement>(null!);
const props = defineProps({
  options: {
    required: false,
    type: Object as () => Parameters<typeof $gsap.to>[2],
    default: () => ({}),
  },
  position: {
    required: false,
    type: String,
    default: "",
  },
});
const timeline = inject("timeline", null! as gsap.TimelineVars);
onMounted(() => {
  const parent = wrapper.value.parentElement;
  const nodes = [...wrapper.value.querySelector(".gsap-text")!.childNodes];
  wrapper.value.remove();

  nodes.forEach((node) => {
    if (node.nodeName == "#text" && node.nodeValue != "") {
      node.nodeValue!.trim().split(" ").forEach((t) => {
        createWrapper(t);
      });
    } else if (node.nodeName != "#text") {
      const newWrapper = createWrapper();

      newWrapper.querySelector(".gsap-text")?.append(node);
    }
  });

  function createWrapper(innerText: string = "") {
    const div = document.createElement("div");
    div.classList.add("gsap-text-wrapper");

    const span = document.createElement("span");
    span.textContent = innerText;
    span.classList.add("gsap-text");
    div.append(span);
    parent?.append(document.createTextNode(" "));

    parent?.appendChild(div);

    return div;
  }

  if (timeline) {
    timeline.fromTo(
      parent?.querySelectorAll(".gsap-text"),
      {
        translateY: "100%",
        opacity: 0,
      },
      {
        translateY: "0%",
        ease: "circ.out",
        duration: 0.7,
        opacity: 1,
        ...props.options,
      },
      props.position || undefined
    );
  } else {
    $gsap.fromTo(
      parent!.querySelectorAll(".gsap-text"),
      {
        translateY: "100%",
        opacity: 0,
      },
      {
        translateY: "0%",
        ease: "circ.out",
        duration: 0.7,
        opacity: 1,
        ...props.options,
      }
    );
  }
});
</script>

<template>
  <div ref="wrapper" class="gsap-text-wrapper">
    <span class="gsap-text">
      <slot />
    </span>
  </div>
</template>
