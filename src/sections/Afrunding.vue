<script setup>

    import landsbyAkser from "../assets/landsbyAkser.svg";

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
                                   { x: "0%", duration: 1, ease: "power1.out" }, "+=1")
        .from("#landsby", { x: "100%", opacity: 0, duration: 1, ease: "power1.out" })
        .to({}, { duration: 1.2 }); // Tilføj ekstra scrolltid
    });
</script>

<template>
  <!-- Dette er sektionen for afrunding -->
  <section id="Afrunding" class="w-[150vw] h-screen flex flex-cols-1 items-center p-[5vw]">
    <div class="flex flex-cols-2  gap-[5vw] justify-evenly items-start w-full h-fit">
      <div class="h-full w-[30vw] self-center flex flex-col flex-cols-2 items-end">
        <div class="w-fit">
          <h2 class="font-bold text-right">Titel på dette diagram</h2>
          <p class="text-right">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis enim nulla libero, esse, quia sit neque optio voluptatum ipsam earum aliquid fuga deleniti nobis accusantium assumenda harum quo. Ut, laboriosam.</p>
        </div>
        <div class="w-fit">
          <h2 class="font-bold text-right">Titel på dette diagram</h2>
          <p class="text-right">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis enim nulla libero, esse, quia sit neque optio voluptatum ipsam earum aliquid fuga deleniti nobis accusantium assumenda harum quo. Ut, laboriosam.</p>
        </div>
      </div>
      <div id="landsbyDiagram" class="top-0 w-full h-[50vw] bg-blue-900 flex justify-center items-center">
        <img :src="landsbyAkser" alt="" class="h-full w-fit">
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