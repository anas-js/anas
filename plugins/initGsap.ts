import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import TextPlugin from "gsap/TextPlugin";

export default defineNuxtPlugin(() => {
    $gsap.registerPlugin(Flip,ScrollTrigger,ScrollSmoother,DrawSVGPlugin,MotionPathPlugin,TextPlugin);
});