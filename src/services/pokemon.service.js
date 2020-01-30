
export class PokemonService {
    async downloadPokemonAsTxt(pokemon){
        return await fetch(`https://localhost:44376/api/Pokemon/download/${pokemon}`, {
            method: 'GET'
        })
        .then(response =>response.blob())
        .then(blob => {
            var url = window.URL.createObjectURL(blob);
            var a = document.createElement('a');
            a.href = url;
            a.download = pokemon + "-detail.txt";
            document.body.appendChild(a); 
            a.click();    
            a.remove();     
        });
    }
    
     async getAllPokemons(){
        var data = await fetch("https://localhost:44376/api/Pokemon");
    
        return await data.json();
    }
}

