<template>
    <ExampleComponent />
    <div class="wrapper">
        <div v-for="airport in airports" :key="airport.abbreviation">
            <AirportCardComponent :airport="airport"/>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import allairports from './../data/airports.js';
import ExampleComponent from './ExampleComponent.vue';
import AirportCardComponent from './AirportCardComponent.vue';
export default({
    name: 'App',
    components: {
        ExampleComponent,
        AirportCardComponent
    },
    setup() {
        const airports = ref(allairports)
        return { airports }
    }

})
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
  max-width: 960px;
  margin: 0 auto;
}

p,
h3 {
  grid-column: span 3;
}
</style>
