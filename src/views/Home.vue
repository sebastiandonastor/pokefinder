<template>
  <div class="home container">
    <img alt="Vue logo" class="img-fluid" src="../assets/PokeFinder2.png">
    <autocomplete
    :search="search"
    placeholder="Search your pokemon"
     @submit="handleSubmit"
  ></autocomplete>
  <PokeSpinner v-if="isLoading" />
  </div>
</template>

<script>
import Autocomplete from '@trevoreyre/autocomplete-vue'
import PokeSpinner from '../components/PokeSpinner';
import _ from 'lodash';
import {PokemonService} from '../services/pokemon.service.js';
const pokeService = new PokemonService();
 
export default {
  name: 'home',
  components: {
    Autocomplete,
    PokeSpinner
  },
  created(){
    this.pokemons = this.$route.meta.pokemons;
    if(this.pokemons.length == 0){
      this.$toasted.error('Favor inicializar el backend', {
        position	: 'bottom-right'
      })

    }
  },

  data() {
    return {
      pokemons : [],
      pokemonTyped: '',
      isLoading: false
    }
  },
  methods : {
        search(input) {
          this.pokemonTyped = input;
          if(input == '') return [];
           return _.take(this.pokemons.filter(pokemon => pokemon.includes(input)), 10);
      },
      handleSubmit(valor){
        if(this.pokemons.find(pokemon => pokemon == this.pokemonTyped) || valor)
        { this.isLoading = true;
          pokeService.downloadPokemonAsTxt(valor).then(() => {
            this.isLoading = false;
          });
        }

      }

  }
}
</script>
