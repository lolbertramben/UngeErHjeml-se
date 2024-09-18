<script setup>
import Indkomst from "../assets/indkomst.svg"
import Boligpris from "../assets/boligpriser.svg"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from 'vue';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#IndkomstPriser",
      start: "top top",
      end: "+=5000", // Juster denne værdi efter behov
      scrub: true,
      pin: true,
      markers: false,
    }
  });

  tl.from("#Indkomst", { x: "-100%", opacity: 0, duration: 1, ease: "power1.inOut", onStart: removeIndkomst, onComplete: startIndkomstAnimations })
    .from("#indkomstTekst", { x: "100%", opacity: 0, duration: 1, ease: "power1.inOut" }, "+=0.5")
    .from("#Boligpris", { x: "100%", opacity: 0, duration: 1, ease: "power1.inOut", onStart: removeBoligpris, onComplete: startBoligprisAnimations }, "+=0.0")
    .from("#priserTekst", { x: "-100%", opacity: 0, duration: 1, ease: "power1.inOut" }, "+=0.5")
    .to({}, { duration: 1.2 }); // Tilføj ekstra scrolltid

  //Indkomst
  function removeIndkomst() {
    const lines = document.querySelectorAll("#indkomstLinePath");
    lines.forEach(line => line.classList.add("hidden-line"));
  }

  function startIndkomstAnimations() {
    const lines = document.querySelectorAll("#indkomstLinePath");
    lines.forEach(line => {
      line.classList.remove("hidden-line");
      line.classList.remove("animate-line");
      void line.offsetWidth; // Trigger reflow to restart animation
      line.classList.add("animate-line");
    });
  }

  //Boligpris
  function removeBoligpris() {
    const lines = document.querySelectorAll("#boligprisLinePath");
    lines.forEach(line => line.classList.add("hidden-line"));
  }

  function startBoligprisAnimations() {
    const lines = document.querySelectorAll("#boligprisLinePath");
    lines.forEach(line => {
      line.classList.remove("hidden-line");
      line.classList.remove("animate-line");
      void line.offsetWidth; // Trigger reflow to restart animation
      line.classList.add("animate-line");
    });
  }
});
</script>

<template>
  <!-- Dette er sektionen for indkomst/boligpris -->
  <section id="IndkomstPriser" class="w-screen h-screen grid grid-cols-2 gap-x-[5vw] justify-items-center items-center p-[8vw]">
    <!-- Indkomst og tekst til boligpriser -->
    <div class="w-full h-full col-start-1 row-span-2 flex flex-cols-2 flex-col gap-[10vw]">
      <div id="Indkomst" class="w-full h-full">
        <img :src="Indkomst" class="w-full h-fit"/>
        <svg id="indkomstLine" class="absolute w-[75%] left-[22%] top-[37.5%]" viewBox="0 0 380 25">
          <polyline id="indkomstLinePath" points="0 18.4 49.9 17.8 92.5 14.4 123.6 14.2 149.7 13.4 159.8 10.2 182.6 8.2 213.3 16.8 231.8 21 256 22.8 278.9 20.1 300.4 14.4 327.1 14.2 348.6 7.2 360.6 4.6 379.8 10.1" stroke="#6cc5c1" stroke-width="10" fill="none" />
        </svg>
      </div>
      <div id="priserTekst" class="w-full h-fit">
        <h2 class="w-full font-bold text-right">Titel på graf</h2>
        <p class="text-right">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, facere, eum quasi temporibus quae itaque facilis necessitatibus, ab fugit aliquid eos consequuntur voluptates tenetur vel perferendis. Enim architecto saepe perspiciatis?</p>
      </div>
    </div>

    <!-- Boligpriser og tekst til indkomst -->
    <div class="w-full h-full col-start-2 row-span-2 flex flex-cols-2 flex-col gap-[10vw]">
      <div id="indkomstTekst" class="w-full h-fit">
        <h2 class="w-full font-bold">Titel på graf</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, facere, eum quasi temporibus quae itaque facilis necessitatibus, ab fugit aliquid eos consequuntur voluptates tenetur vel perferendis. Enim architecto ofte perspiciatis?</p>
      </div>
      <div id="Boligpris" class="w-full h-full">
        <img :src="Boligpris" class="w-full h-fit"/>
        <svg id="boligprisLine" class="absolute w-[77%] left-[20%] top-[20.5%]" viewBox="0 0 380 180">
          <polyline id="boligprisLinePath" points="2.36 166.6 45.26 140.15 66.87 128.59 89.78 115.94 104.01 112.46 116.69 99.18 132.45 78.61 150.74 50.01 164.05 50.06 178.05 62.6 190.74 76.22 204.58 70.29 231.12 77.98 259.03 70.29 316.69 34.39 331.15 35.07 345.45 24.01 360.44 5.27 373.36 9.6" stroke="#db172b" stroke-width="10" fill="none" />
        </svg>
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

@keyframes drawLine {
  from {
    stroke-dashoffset: 1000;
  }
  to {
    stroke-dashoffset: 0;
  }
}

#indkomstLinePath, #boligprisLinePath {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
}

.animate-line {
  animation: drawLine 5s forwards;
}

.hidden-line {
  display: none;
}
</style>