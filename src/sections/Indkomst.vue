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
    <div class="w-full h-full col-start-1 row-span-2 flex flex-cols-2 flex-col gap-[5vw]">
      <div id="Indkomst" class="w-[90%] h-fit self-end">
        <img :src="Indkomst" class="w-full h-fit"/>
        <svg id="indkomstLine" class="absolute w-[75%] left-[22%] top-[45%]" viewBox="0 0 380 25">
          <polyline id="indkomstLinePath" points="0 18.4 49.9 17.8 92.5 14.4 123.6 14.2 149.7 13.4 159.8 10.2 182.6 8.2 213.3 16.8 231.8 21 256 22.8 278.9 20.1 300.4 14.4 327.1 14.2 348.6 7.2 360.6 4.6 379.8 10.1" stroke="#6cc5c1" stroke-width="10" fill="none" />
        </svg>
        <p class="pt-[2%] pl-[71%] font-kilde text-sm">Kilde: statistikbanken.dk</p>
      </div>
      <div id="priserTekst" class="w-[80%] h-fit pb-[8%] self-end">
        <h2 class="w-full font-display text-right">Boligpriserne stiger</h2>
        <p class="font-brød text-right">Til gengæld stiger boligpriserne fortsat til rekordhøjder. Grafen illustrerer <p class="font-display inline rød-text">prisen pr. kvadratmeter</p> i 23 år, inflationsreguleret. De unge tjener altså ca. det samme som de altid har gjort, imens boligproserne fortsat stiger.  </p>
      </div>
    </div>

    <!-- Boligpriser og tekst til indkomst -->
    <div class="w-full h-full col-start-2 row-span-2 flex flex-cols-2 flex-col gap-[10vw]">
      <div id="indkomstTekst" class="w-[70%] h-fit">
        <h2 class="font-display w-full font-bold">Unges indkomst</h2>
        <p class="font-brød">... er ikke steget i 23 år.<br/>Grafen til venstre illustrerer 20-35 - åriges <p class="font-display inline blå-text">gennemsnitlige årlige indkomst</p> før skat, inflationsreguleret.</p>
      </div>
      <div id="Boligpris" class="w-[90%] h-full">
        <img :src="Boligpris" class="w-full h-fit"/>
        <svg id="boligprisLine" class="absolute w-[77%] left-[20%] top-[12%]" viewBox="0 0 380 180">
          <polyline id="boligprisLinePath" points="2.36 166.6 45.26 140.15 66.87 128.59 89.78 115.94 104.01 112.46 116.69 99.18 132.45 78.61 150.74 50.01 164.05 50.06 178.05 62.6 190.74 76.22 204.58 70.29 231.12 77.98 259.03 70.29 316.69 34.39 331.15 35.07 345.45 24.01 360.44 5.27 373.36 9.6" stroke="#db172b" stroke-width="10" fill="none" />
        </svg>
        <p class="pt-[2%] pl-[82%] font-kilde text-sm">Kilde: boliga.dk</p>
      </div>
    </div>
  </section>
</template>

<style scoped>

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