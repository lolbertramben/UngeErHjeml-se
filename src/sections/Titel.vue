<script setup>
    import { onMounted } from 'vue';
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import { MotionPathPlugin } from "gsap/MotionPathPlugin";
    gsap.registerPlugin(ScrollTrigger,MotionPathPlugin);

    
  onMounted(() => {
    gsap.from("#Titel h1, #Titel h2", {
      opacity: 0,
      duration: 2,
      ease: "power2.inOut"
    });
  });
    

</script>

<template>
    <!-- Dette er sektionen for overskriften -->
    <section id="Titel" class="w-screen h-screen top-0 left-0 grid grid-cols-1 justify-items-center items-center p-[5vw]">
        <div class="grid grid-rows-2 justify-center h-fit">
          <h1 class="font-bold text-center text-rose-950">Den helt store teaser</h1>
          <h2 class="text-center text-rose-950">Undertitlen som er lidt mere beskrivende</h2>
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