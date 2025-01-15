export const useSvgPathAnime = () => {
    onMounted(() => {
   
        const svgs = document.querySelectorAll("*[data-svg-path-anime]") as NodeListOf<HTMLElement>;

        svgs.forEach((svg) =>{

            const path = svg.querySelector("path") as unknown as HTMLElement;
            const total = Math.round(path.getTotalLength());

            path.style.strokeDasharray = total;
            path.style.strokeDashoffset = total;
          
            $gsap().to(path, {
                strokeDasharray: total*2,
                duration: 1,
                ease: "expo.inOut",
                scrollTrigger: {
                  trigger: svg,
                  start: "center 70%",
                  end: "bottom top",
                  // markers: true,
                },
              });
            
        })
  
  })
}