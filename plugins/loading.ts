
export default defineNuxtPlugin(async (nuxt) => {

  // loading

  const loadingHtml = $help().toHtml(
    `
    <div class='loading-app'>
    <div>

<svg width="506" height="297" viewBox="0 0 506 297" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 173.748C10 173.748 250.772 -106.593 179.574 66.3466C108.376 239.287 441.487 182.104 195.604 134.077C-50.2793 86.0497 234.913 295.892 326.233 286.707C462.437 273.006 265.747 162 408.947 93C552.148 24 475.523 240.675 475.523 240.675" stroke="#A599FF" stroke-width="20" stroke-linecap="round"/>
</svg>


    </div>
  </div>
    `
  );

  const loadingStyle = $help().toHtml(
    `<style>
.loading-app {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-color: #2A2A30;
  color: #000;
  justify-content: center;
  align-items: center;
  display : inline-flex;
  background-image: url("/images/noise.png");
  
}


.loading-app svg {
    width: 120px;
    
}


@keyframes loading {
    50% {
        stroke-dashoffset: 0;
    }
           100% {
        stroke-dashoffset: -1493.0919189453125;
    }
}
.loading-app svg  path{
       stroke-dasharray: 1493.0919189453125;
    stroke-dashoffset: 1493.0919189453125;
     animation: loading 1s ease infinite;
    
}
  

  

 </style>
`,
    "head > *"
  );

  let loading = false;

  nuxt.hook("page:loading:start", () => {
    if (!loading) {
      document.head.append(loadingStyle);
      document.body.appendChild(loadingHtml);
    }
  });

  nuxt.hook("page:loading:end", () => {
    if (!loading) {
      document.fonts.ready.then(() =>{
        loadingHtml.remove();
        loadingStyle.remove(); 
      })

      loading = true;
    }
  });

  nuxt.hook("app:error", () => {
    if (!loading) {
      loadingHtml.remove();
      loadingStyle.remove();
    }
  });




 
});
