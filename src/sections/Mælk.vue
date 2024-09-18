<script setup>
import mælk from "../assets/mælk.svg";
import renter from "../assets/renter.svg";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
import { ref, onMounted } from 'vue';

const mælkepris = ref(6.13);

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#Mææælk",
      start: "top top",
      end: "+=5000", // Juster denne værdi efter behov
      scrub: true,
      pin: true,
      markers: false,
    }
  });

  tl.fromTo("#Mælk", 
    { y: "-100vh", x: "15vw", scale: 3, opacity: 0 }, // Starttilstand
    { y: "0", x: "20vw", scale: 3, opacity: 1, duration: 1, ease: "power1.out", onStart: resetCounter, onComplete: startCounter } // Sluttilstand
  )
  .to("#Mælk", { x: "", scale: 1, duration: 1, ease: "power1.inOut" }, "+=1.5")
  .from("#Renter", { x: "100%", opacity: 0, duration: 1, ease: "power1.out", onStart: removeRenter, onComplete: startRenterAnimations }, "-=0.5")
  .from("#mælkTekst", { y: "100%", opacity: 0, duration: 1, ease: "power1.out" }, "+=0.5")
  .to({}, { duration: 1.2 }); // Tilføj ekstra scrolltid
});

// RenterPath
function removeRenter() {
  const lines = document.querySelectorAll("#renterPath");
  lines.forEach(line => line.classList.add("hidden-renter"));
}

function startRenterAnimations() {
  const lines = document.querySelectorAll("#renterPath");
  lines.forEach(line => {
    line.classList.remove("hidden-renter");
    line.classList.remove("animate-renter");
    void line.offsetWidth; // Trigger reflow to restart animation
    line.classList.add("animate-renter");
  });
}

function resetCounter() {
  mælkepris.value = 6.13;
}

function startCounter() {
  const target = 14.25;
  const duration = 2000; // 2 sekunder
  const stepTime = 50; // Opdatering hver 50 ms
  const steps = duration / stepTime;
  const increment = (target - mælkepris.value) / steps;

  let currentStep = 0;
  const interval = setInterval(() => {
    mælkepris.value += increment;
    currentStep++;
    if (currentStep >= steps) {
      mælkepris.value = target;
      clearInterval(interval);
    }
  }, stepTime);
}

ScrollTrigger.create({
  start: "top top",
  end: "bottom top",
  onUpdate: (self) => {
    if (self.progress < 0.5) {
      setBodyBackgroundToOrange();
    } else {
      setBodyBackgroundToBlue();
    }
  }
});

function setBodyBackgroundToOrange() {
  document.body.style.backgroundColor = '#ff8800';
}

function setBodyBackgroundToBlue() {
  document.body.style.backgroundColor = '#0f3067';
}
</script>

<template>
  <!-- Dette er sektionen for Mæææææælk-->
  <section id="Mææælk" class="w-screen h-screen grid grid-cols-1 justify-items-center items-center p-[5vw]">
    <div class="flex gap-[5vw] w-full h-[60%] justify-center items-center px-[5vw]">
      <div class="flex flex-col items-end self-start h-full justify-between">
        <div id="Mælk" class="w-[10vw] h-[20vw]">
          <img :src="mælk" class="w-full h-full"/>
          <div class="absolute grid grid-cols-1 top-[55%] right-[0%] justify-items-center items-center w-[50%] h-[30%]">
            <h3 id="mælkepris" class="font-display text-center">{{ mælkepris.toFixed(2) }},-</h3>
          </div>
        </div>
        <div id="mælkTekst" class="h-fit w-[30vw] self-start">
          <h2 class="font-display text-left leading-[100%] py-[6%]">Renterne stiger<br/>sammen med inflationen</h2>
          <p class="font-brød text-left h-fit">I takt med at inflationen stiger, vil renterne på boliglån også stige. På den måde sikre bankerne at realrenten forbliver positiv, så de ikke taber penge.  
          Grafen viser <p class="font-display inline">den procentvise rente på langtidslån</p> siden 1999.   
          Inflationen bliver påvirket af mange faktorer, bl.a. COVID-19, krig, udbud og efterspørgsel, valutakurser og energipriser.   
          Det er første gang siden finanskrisen i 2008, at renterne har en opadgående tendens over længere tid.
          <br/>
          Når renterne stiger, og dermed prisen på boliglån, bliver det dyere at købe ejedom.    
          </p>
        </div>
      </div>
      <div id="Renter" class="w-fit h-full self-start">
        <img id="renteAkser" :src="renter" class="w-fit h-full"/>
        <svg class="absolute top-[-1.5%] left-[8.5%] w-[85%] h-full" viewBox="0 0 900 500">
          <polyline id="renterPath" points="4.44 94 7.61 113.72 23.84 87.2 31.67 18.95 41.19 44.12 48.76 32.27 60.62 64.09 74.12 20.77 80.09 56.57 88.18 87.44 97.04 57.59 101.11 109.91 125.15 89.65 130.14 113.82 149.85 105.02 153.37 148.63 162.39 137.6 167.03 149.25 169.34 129.13 185.84 147.48 196.83 132.08 210.24 156.44 210.57 173.82 225.65 157.36 228.84 183.59 242.7 164.17 248.48 174.64 260.87 141.71 281.3 168.45 296.63 149.83 306.47 111.36 316.54 145.24 325.76 119.03 333.3 141.18 346.11 76.85 346.25 109.4 358.55 63.12 363.31 116.21 362.1 153.75 385.59 165.29 395.11 190.45 401.36 210.36 418.66 215.01 422.7 179.81 437.01 163.3 443.5 181.05 447.33 215.28 459.71 229.04 485.46 247.95 500.86 269.12 513.6 225.76 521.66 250.11 529.64 234.68 550.14 285.82 553.05 307.69 564.61 308.38 580.89 254.38 591.37 284.67 615.14 300.56 636.98 311.51 645.81 335.91 659.31 312.85 662.73 330.41 687.4 338.4 709.28 383.51 708.09 407.31 726 372.94 721.96 408.14 741.08 338.48 755.85 410.17 773.76 375.8 777.78 394.85 791.89 335.02 801.96 386.89 809.06 307.11 824.05 250.86 828.06 229.4 827.93 277.86 844.68 192.78 850.98 245.97 863 175.07 867.34 191.25" stroke="#D41A2A" stroke-width="8" fill="none" />
        </svg>
      </div>
    </div>
   </section>
</template>

<style scoped>

@keyframes drawLineReverse {
  from {
    stroke-dashoffset: 3000;
  }
  to {
    stroke-dashoffset: 0;
  }
}

#renterPath {
  stroke-dasharray: 3000;
  stroke-dashoffset: 3000;
}

.animate-renter {
  animation: drawLineReverse 6s forwards;
}

.hidden-renter {
  display: none;
}
</style>