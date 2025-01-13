import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { SlowMo } from "gsap/EasePack";

export default defineNuxtPlugin((nuxt) => {
    gsap.registerPlugin(ScrollTrigger,ScrollToPlugin,MotionPathPlugin,TextPlugin,SlowMo);

    return {
        provide : {
            gsap : gsap
        }
    }
});