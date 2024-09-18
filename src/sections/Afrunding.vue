<script setup>

    import landsbyAkser from "../assets/landsbyAkser.svg";
    import rødeNisser from "../assets/rødeNisser.svg";
    import blåNisser from "../assets/blåNisser.svg";

    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import { MotionPathPlugin } from "gsap/MotionPathPlugin";
    gsap.registerPlugin(ScrollTrigger,MotionPathPlugin);

    import { onMounted } from 'vue';

    onMounted(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#Afrunding",
          start: "top top",
          end: "+=8000", // Juster denne værdi efter behov
          scrub: true,
          pin: true,
          markers: false,
        }
      });
    
      tl.fromTo("#landsbyDiagram", { x: "100%", duration: 1, ease: "power1.out" },
                                   { x: "0%", duration: 1, ease: "power1.out" })
        .from("#landsbyTekst1", { x: "-100%", opacity: 0, duration: 1, ease: "power1.out" }, "-=0.5")
        .to({}, { duration: 1.2 }) // Tilføj ekstra scrolltid
        .from("#nisser", { x: "", opacity: 0, duration: 1, ease: "power1.inOut" }, "+=0.5")
        .fromTo("#blåNisserMask", { x: "0%", width: "15vw", duration: 1, ease: "power1.inOut" },
                                  { x: "0%", width: "25vw", duration: 1, ease: "power1.inOut" }, "+=0.5")
        .to("#landsbyTekst1, #nisser", { x: "", opacity: 0, duration: 1, ease: "power1.inOut" }, "+=0.5")
        .to("#landsbyDiagram", { x: "-100%", duration: 1, ease: "power1.inOut" }, "+=0")
        .fromTo("#landsbyTekst3", { x: "0%", opacity: 0, duration: 1, ease: "power1.out" },
                                   { x: "0%", opacity: 1, duration: 1, ease: "power1.out" }, "+=0.5")
        .to({}, { duration: 1.2 }); // Tilføj ekstra scrolltid
    });
</script>

<template>
  <!-- Dette er sektionen for afrunding -->
  <section id="Afrunding" class="w-[140vw] h-screen flex flex-cols-1 items-center p-[5vw]">
    <div class="flex flex-cols-2  gap-[5vw] justify-evenly items-start w-full h-fit">
      <div class="h-full w-[52vw] self-center flex flex-col flex-cols-2 items-end">
        <div id="landsbyTekst1" class="w-fit pb-[2vw]">
          <h2 class="font-bold text-left lys-text leading-[100%] pb-[5%]">Det kræver større<br/>økonomisk overskud</h2>
          <p class="text-letf lys-text">... at købe sin første bolig i 2024. For 25  år siden var det langt billigere at komme ind på boligmarkedet. Mange unge mennesker kunne spare op til et indskud på et boliglån. 
          I dag er gennemsnitalderens for førstegangskøbere steget til 35,4 år. (2022) Andelen af unge under 35 år, der har råd til at købe ejendom er altså faldet.

          Alle disse faktorer skaber stor ulighed på boligmarkedet. Tidligere kunne flere unge invistere i en ejendom og se sin formue vokse. 
          I dag er det primært unge med stort økonomisk overskud og en priviligeret social baggrund, der har mulighed for at invistere sine resourcer i sin bolig.
          </p>
        </div>
        <div id="nisser" class=" w-full h-fit flex">
          <div class="absolute w-[30vw] h-fit">
            <img id="rødeNisser" :src="rødeNisser" alt="" class="w-full">
          </div>
          <div id="blåNisserMask" class="absolute w-[30vw] h-[20vw] overflow-x-hidden">
            <div class="w-[30vw]">
              <img id="blåNisser" :src="blåNisser" alt="" class="relative w-[30vw] h-fit">
            </div>
          </div>
        </div>
      </div>
      <div id="landsbyDiagram" class="top-0 w-full h-[50vw] flex justify-center items-center">
        <img :src="landsbyAkser" alt="" class="h-full w-fit">
        <div id="landsbyTekst3" class="absolute w-[40vw] h-fit top-[20%] right-[-50%]">
          <h2 class="font-bold text-letf lys-text leading-[100%] pb-[4%]">I fremtiden</h2>
          <p class="text-left lys-text">... kan vi risikere, at markedet forsætter sin vækst. Det afhænger af mange faktorer, og kan være svært at forudse.
          Men hvis vi ønsker at udligne markedet og gøre det nemmere for denne generations unge at få råd til en ejerbolig, er der nødt til at ske strukturelle ændringer.
          Det kan bl.a. lade sig gøre, ved at beskatte sælgeres fortjeneste på boligsalg som følge af voksene friværdi.
          Eller ved at bygge flere små ejedomme med statsregulerede startpriser, så flere får mulighed for at komme ind på markedet.
          Dette ville også udligne den store prisstigning, når udbudet nærmer sig efterspørgslen.

          Det kommer i sidste ende an på, om vi ser boliger som hjem eller invisteringer.  
          </p>
        </div>
      </div>
    </div>
   </section>
</template>

<style scoped>
#blåNisserMask {
  overflow: hidden;
}
#blåNisser {
  position: relative;
}
</style>