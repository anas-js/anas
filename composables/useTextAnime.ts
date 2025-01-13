export const useTextAnime = () => {
  onMounted(() => {
    document.fonts.ready.then(() => {
      const texts = document.querySelectorAll(
        "*[data-text-anime]"
      ) as NodeListOf<HTMLElement>;
      texts.forEach((ele) => {
        const chars = ele.textContent?.split("");
        //
        // console.log();
        ele.textContent = "";
        chars?.forEach((char, i) => {
          const node = document.createElement("span");

          // console.log(navigator.userAgent);
          if (navigator.userAgent.includes("Mac OS")) {
            if (chars[i + 1] !== " ") {
              node.innerHTML = `${char}`;
            } else {
              node.innerHTML = `&zwj;${char}`;
            }
          } else {
            node.textContent = char;
          }
          ele.appendChild(node);

          node.style.position = "relative";
          node.style.top = ele.clientHeight + 10 + "px";
          ele.style.overflow = "hidden";
          // console.log(ele.clientHeight);
        });
        $gsap().to(ele.querySelectorAll("span"), {
          top: 0,
          stagger: Number(ele.getAttribute("data-text-anime-stagger")) || 0.2,
          ease: "back.out",
          delay: ele.getAttribute("data-text-anime-delay") || 0,
          duration: ele.getAttribute("data-text-anime-duration") || 1,
          scrollTrigger: {
            trigger: ele,
            start: "top 70%",
            end: "bottom center",
          },
        });
      });
    });
  });
};
