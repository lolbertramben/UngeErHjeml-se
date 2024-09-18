<script setup>

import Titel from '../sections/Titel.vue'
import Indkomst from '../sections/Indkomst.vue'
import Friværdi from '../sections/Friværdi.vue'
import Mælk from '../sections/Mælk.vue'
import Afrunding from '../sections/Afrunding.vue'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(ScrollTrigger,MotionPathPlugin);



</script>

<template>
  <Titel/>

  <Indkomst/>

  <Friværdi/>

  <Mælk/>

  <Afrunding/>
   
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
