export const useMoveTopAnime = () => {
    
       
  
    onMounted(() => {
      
        const texts = document.querySelectorAll("*[data-move-top-anime]") as NodeListOf<HTMLElement>;
        texts.forEach((ele) =>{
            const newElemenet =  document.createElement(ele.tagName);
            const clone  = ele.cloneNode(true) as HTMLElement;
            newElemenet.appendChild(clone);

           newElemenet.setAttribute('class',clone.getAttribute('class') as string);
           clone.setAttribute('class',"");
            
            ele.replaceWith(newElemenet);
            clone.style.position = "relative"
            clone.style.top = newElemenet.clientHeight+20+"px";
            newElemenet.style.overflow = "hidden";

          
            $gsap().to(newElemenet.querySelector('*'),{
                top : 0,
                ease : "back.out",
                duration : 1,
                delay : ele.getAttribute("data-move-top-anime-delay") || 0,
                scrollTrigger : {
                    trigger : newElemenet,
                    start : "top 70%",
                    end: "bottom center"
                }
            })
        })
  
    })
}