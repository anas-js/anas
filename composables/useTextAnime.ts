export const useTextAnime = () => {
  onMounted(() => {
   
      const texts = document.querySelectorAll(
        "*[data-text-anime]"
      ) as NodeListOf<HTMLElement>;
      texts.forEach((ele) => {
       
        if(ele.tagName == "svg") {
          ele.querySelectorAll("path").forEach((char) => {
            char.style.opacity = "0";
           
            char.style.transform = `translateY(${char.getBBox().height}px)`;

          });
          // console.log();
          $gsap().to(Array.from(ele.querySelectorAll("path")).reverse(), {
            opacity: 1,
            y: 0,
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

        } else {
          const chars = ele.textContent?.split("");
          ele.textContent = "";
          chars?.forEach((char, i) => {
            const node = document.createElement("span");
  
  
            node.textContent = char;
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
        }

    // console.log(ele.querySelectorAll("span, path"));


   
    });
  });
};
          // console.log(navigator.userAgent);
          // if (navigator.userAgent.includes("Mac OS")) {
          //   if (chars[i + 1] !== " ") {
          //     node.innerHTML = `${char}`;
          //   } else {
          //     node.innerHTML = `&zwj;${char}`;
          //   }
          // } else {
           
          // }