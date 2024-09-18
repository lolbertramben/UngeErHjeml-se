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
          <h1 class="text-center text-rose-950 leading-[100%] pb-[3%]">Er det blevet UMULIGT for UNGE<br/>at købe bolig?</h1>
          <h2 class="text-center text-rose-950">Bliv klogere på, hvorfor boligmarkedet løber fra ungdommen...</h2>
        </div>
    </section>
</template>

<style scoped>

</style>