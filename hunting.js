/* Javascript for the hunting list page */

function main(){    
    /* Add Pokemon button */
    
    let add_pokemon_button = document.querySelector("#add_pokemon");

    /*Test Function to change colour*/

    function testFunction(e){
        alert("hello");
    }

    add_pokemon_button.addEventListener("click", testFunction);
}

window.addEventListener("load", main);
