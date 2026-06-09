<template>
  <div>
    <h3>Babylon Test Project</h3>
    <canvas></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { StandardMaterials } from '@/BabylonExamples/StandardMaterials';

export default defineComponent({
  name: 'BabylonExamples',
  mounted(){
    const canvas = document.querySelector("canvas")!;
    new StandardMaterials(canvas);

  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> 
  
  canvas {
    width: 70%;
    height: 70%;
    box-shadow: 5px 5px 5px rgb(0, 0, 0);
  }

  h3 {
    padding: 3rem 0 2rem 0;
    text-shadow: none;
    color: white;
    opacity: .1;
    font-family: Verdana, sans-serif;
    text-transform: uppercase;
    font-size: 1.5rem;
  }


</style>
