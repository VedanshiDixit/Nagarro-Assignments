
document.getElementById('button1').onclick = function (){
    if(confirm("Are you excited to see the Pokemons?")) {return true;}
    else{
        event.stopPropagation();
        event.preventDefault();
    }
};


document.getElementById('button2').onclick = function (){
    if(confirm("Are you excited to see the Pokemons?")) {return true;}
    else{
        event.stopPropagation();
        event.preventDefault();
    }
};

