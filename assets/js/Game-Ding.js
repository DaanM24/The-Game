alert("Welcome to the game!");

alert("Your name is Johnathon Cheese, mostly referred to as 'Mister Cheese'\n And you are going to go on a search for the legendary cheese.");
alert("You have heard rumors that there exists an uninhabited island with the cheese of legends.\n A couple of adventurers have gone to the island and never came back.");

var answer = prompt("Will you go to the island? \n1=yes \n2=no");
if(answer == 1){
    alert("You ignore the obvious red flags and decide to go anyway. It was quite easy to find, it was about 15 minutes off the coast.");
    alert("Arriving on the island, you notice that everything is made of cheese. You shrug it off because you're looking for the legendary cheese.");
    alert("You exit your cheese colored boat and step on the beach of cheese grains. If you look forward you see a forest of cheese trees. To the left of the forest you see a path with blue looking cheese trees.")
    var answer = prompt("Other than the cheese trees you don't see anything else.\nWill you travel through the forest? (1). \nWill you take the path? (2)")
    if(answer == 1){
        alert("You decide to go through the forest. Mere seconds after entering the forest you get knocked unconcious.")
    }
}else if(answer == 2){
    alert("You decide not to go and just stay at home, giving up on your dream. \nGAME OVER");
}


