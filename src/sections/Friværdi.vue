<script setup>
    import Friværdi from "../assets/friværdi.svg"
    import lilleHus from "../assets/friværdiLille.svg"
    import storHus from "../assets/friværdiStor.svg"
    import lejlighedBund from "../assets/lejlighedBund.svg"
    import lejlighedTop from "../assets/lejlighedTop.svg"

    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import { MotionPathPlugin } from "gsap/MotionPathPlugin";
    gsap.registerPlugin(ScrollTrigger,MotionPathPlugin);

    import { onMounted } from 'vue';

    onMounted(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#Husleje",
          start: "top top",
          end: "+=8000", // Juster denne værdi efter behov
          scrub: true,
          pin: true,
          markers: false,
        }
      });
    
      tl.from("#huslejeGraf", { x: "-100%", opacity: 0, duration: 1, ease: "power1.out" })
        .fromTo("#lilleHus", { y: "240%", duration: 1, ease: "power1.out" },
                             { y: "150%", duration: 1, ease: "power1.out" }, "+=1")
        .fromTo("#storHus", { y: "105%", duration: 1, ease: "power1.out" },
                             { y: "110", duration: 1, ease: "power1.out" }, "-=1")
        .from("#huslejeTekst", { x: "100%", opacity: 0, duration: 1, ease: "power1.inOut" }, "-=0.5")
        .to("#lilleHus", { y: "133%", duration: 1, ease: "power1.inOut" }, "+=1.5")
        .to("#storHus", { y: "0%", duration: 1, ease: "power1.inOut" }, "-=1")
        .to({}, { duration: 1.2 }) // Tilføj ekstra scrolltid
        .to("#lilleHus, #storHus, #lejlighed", { x: "-206%", duration: 1, ease: "power1.out" }, "+=1")
        .fromTo("#lejlighed", { y: "80%", duration: 1, ease: "power1.inOut" },
                              { y: "3%", duration: 1, ease: "power1.inOut" }, "+=1.5")
        .fromTo("#lejlighedTop", { y: "100%", duration: 1, ease: "power1.inOut" },
                                 { y: "0%", duration: 1, ease: "power1.inOut" }, "+=1")
        .from("#lejlighedTekst", { opacity: 0, duration: 1, ease: "power1.inOut" }, "+=0.5")
        .to({}, { duration: 1.2 }); // Tilføj ekstra scrolltid
    });
</script>

<template>
  <!-- Dette er sektionen for friværdi og husleje -->
  <section id="Husleje" class="w-screen h-screen grid grid-cols-1 justify-items-center items-center p-[5vw]">
    <div class="w-full h-fit grid grid-cols-2 gap-[5vw] items-center">
      <div id="huslejeGraf">
        <img id="huslejeAkser" :src="Friværdi" alt=""/>
        <div id="friværdiSøjler" class="absolute flex justify-evenly top-[-18.5%] left-[10%] w-[83%] h-[110.5%] overflow-hidden">
          <img id="lilleHus" :src="lilleHus" alt="" class="w-[14%] h-fit">
          <img id="storHus" :src="storHus" alt="" class="h-full w-fit">
          <div id="lejlighed" class="h-fit w-[12%] flex flex-col-reverse">
            <img id="lejlighedBund" :src="lejlighedBund" alt="" class="z-10 h-fit w-full">
            <img id="lejlighedTop" :src="lejlighedTop" alt="" class="h-fit w-full">
          </div>
        </div>
      </div>
      <div id="huslejeTekst" class="h-full">
        <h2 class="font-bold">Titel på dette diagram</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis enim nulla libero, esse, quia sit neque optio voluptatum ipsam earum aliquid fuga deleniti nobis accusantium assumenda harum quo. Ut, laboriosam.</p>
        <p id="lejlighedTekst" class="pt-[10%]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, asperiores unde quas ratione fugiat enim blanditiis at perferendis, doloremque aliquid dignissimos id suscipit omnis perspiciatis nobis distinctio vero fugit minima?</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
h1 {
  font-size: 5vw;
}
h2 {
  font-size: 2vw;
}
h3 {
  font-size: 1.5vw;
}
.lys-text {
  color: white;
}
.mørk-text {
  color: black;
}
</style>