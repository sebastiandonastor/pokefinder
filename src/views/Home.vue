<template>
  <div class="home container">
    <img alt="Vue logo" class="img-fluid" src="../assets/PokeFinder2.png">
    <PokeSearch/>
  </div>
</template>

<script>
// @ is an alias to /src
import PokeSearch from '../components/PokeSearch';
export default {
  name: 'home',
  components: {
    PokeSearch
  }
}
</script>


