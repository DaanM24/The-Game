alert("Welcome to the game!");
alert("Your name is Johnathon Cheese, mostly referred to as 'Mister Cheese'\n And you are going to go on a search for the legendary cheese.");
alert("You have heard rumors that there exists an uninhabited island with the cheese of legends.\n A couple of adventurers have gone to the island and never came back.");
var answer = prompt("Will you go to the island? \n1=yes \n2=no");
if(answer == 1){
    console.log("Entered the island.")
    alert("You ignore the obvious red flags and decide to go anyway. It was quite easy to find, it was about 15 minutes off the coast.");
    alert("Arriving on the island, you notice that everything is made of cheese. You shrug it off because you're looking for the legendary cheese.");
    alert("You exit your cheese colored boat and step on the beach of cheese grains. If you look forward you see a forest of cheese trees. To the left of the forest you see a path with blue looking cheese trees.")
    var answer = prompt("Other than the cheese trees you don't see anything else.\nWill you travel through the forest? (1). \nWill you take the path? (2)")
    if(answer <= 1){
        console.log("Went to the forest")
        ForestScene();
    }else if (answer == 2){
        console.log("Took the path")
        alert("You decide to take the path with the blue looking cheese.")
        alert("It kinda smells but you shrug it off. Walking along the path you notice that there aren't any sticks or leaves or really anything on the road. But further up you notice a single stick. You think it looks suspicious, but you feel a strong desire to pick it up.")
        var answer = prompt("Do you pick up the stick? \n1=yes \n2=no")
        if(answer == 1){
            console.log("Picked up the stick *important*")
            var stick = 1;
            alert("You picked up the stick. Nothing really happened, so you decide to keep the stick.")
        }else if(answer != 1){
            alert("You ignored the stick, despite your despire to pick it up. Impressive!")
        }else{
            alert("You gave the wrong answer. You cease to exist.")
            alert("GAME OVER")
        }
        alert("You move on from this sticky situation.")
        console.log("Troll scene")
        alert("You approach a bridge. There's a troll in front of the bridge. When you approach him the troll notices you. He doesn't really talk to you. It's just kinda awkward now.")
        alert("You start to talk to avoid any more awkwardness. The troll immediately interrupts what you say with a question: \n'Why did the bike fall over?' He asks")
        alert("You think he's a riddle troll. He expects an answer.")
        var riddle = prompt("Why did the bike fall over?");
        if(riddle == "Because it was too tired"){
            alert("Oh wow, you actually got it.")
        }else if(riddle == "because it was too tired"){
            alert("Oh wow, you actually got it.")
        }else alert("Because it was too tired.")
        alert("You realize now that he's a pun troll.")
        alert("He lets you pass. Seems you only needed to hear his joke. Alright then.")
        alert("You cross the bridge and see some ruins. It doesn't look like there's very much there, but there seems to be a small village. You can also go in the forest if you want. It looks like it ends just up ahead. Up to you really")
        var choice = prompt("Which way will you go? 1=village 2=ruins 3=forest")
        if(choice == 1){
            console.log("Entered the village")
            alert("You decide to go to the village. Right before you enter you get knocked unconsious.")
            alert("You wake up in a cage and start looking around. You see a small group of angry tribal men holding skewers. There's also a tribal man on a throne, he looks a little bit more angry than the other tribalmen.")
            alert("Seems this island isn't uninhabited after all. You can also see the bodies of some other people. Probably those beforementioned adventurers that never came back.")
            alert("The tribal man on the throne, presumably the leader, speaks up: 'Foreigner, these are forbidden lands. You shall be executed for dirtying the name of the almighty PARMESAN.'")
            if(stick == 1){
                console.log("The beginning of the end")
                alert("It seems you have the stick, foreigner. The stick has chosen you, you must fulfill your destiny.")
                alert("The tribalmen let you out of the cage. The leader speaks up: 'To fulfill your destiny you must go to the ruins we shall support you.'")
                alert("You suddenly trust the tribalmen and go to the ruins.")
                alert("You notice some gold lying out in the open. You wonder why that isn't gone yet. The tribalmen tell you it's a trap.")
                var answer = prompt("Grab the gold anyway? 1=yes 2=no")
                if(answer == 1){
                    alert("You walk to the gold hoping to take it with you. You just stepped on a pressure plate. Dozens of poison darts fly out of nowhere and you get hit by a couple. You die of poison.")
                    alert("The tribalmen didn't even help you. GAME OVER")
                }else if(answer == 2){
                    console.log("The final showdown")
                    alert("You heed the tribalmen's advice and just walk past the gold.")
                    alert("You see a small entrance and suddenly get a massive urge to enter.")
                    alert("You walk in without really thinking, but the tribalmen stay behind. The entrance goes underground. The walls and floor are laced with cheese bricks.")
                    alert("It smells very cheesy. There is seemingly no way out. This is the 'final stand'. There is what seems like a large vault door.")
                    alert("There is a text on the vault door. It reads: 'With a wave of the wand and the name of the almighty cheese this door shall open.' You were secretly hoping that the rhymed. Good thing you're able to speak all languages.")
                    if(stick == 1){
                        alert("The stick in your back pocket starts to glow with power. This must be the wand the text was talking about. It seems the tribalmen weren't lying.")
                        var cheese = prompt("You wave the wand and say the magical word:")
                        if(cheese == parmesan){
                            console.log("True ending")
                            alert("The vault door opens. You see a single piece of cheese. The almighty Parmesan. It's the rumored legendary cheese. ")
                            alert("Past the almighty Parmesan you only see walls, no exit. You were kind of hoping there was an exit past the vault door, but it makes sense why there isn't one.")  
                            alert("Suddenly a wall gets blasted open. The tribalmen are standing past the hole. They made you an exit!")
                            alert("You are now able to leave and go home eventually eating the cheese basically making this adventure useless.")
                            alert("GOOD ENDING")  
                        }else if(cheese == Parmesan){
                            console.log("True ending")
                            alert("The vault door opens. You see a single piece of cheese. The almighty Parmesan. It's the rumored legendary cheese. ")
                            alert("Past the almighty Parmesan you only see walls, no exit. You were kind of hoping there was an exit past the vault door, but it makes sense why there isn't one.")    
                            alert("Suddenly a wall gets blasted open. The tribalmen are standing past the hole. They made you an exit!")
                            alert("You are now able to leave and go home eventually eating the cheese basically making this adventure useless.")
                            alert("GOOD ENDING")  
                        }else if(cheese === PARMESAN){
                            console.log("True ending")
                            alert("The vault door opens. You see a single piece of cheese. The almighty Parmesan. It's the rumored legendary cheese. ")
                            alert("Past the almighty Parmesan you only see walls, no exit. You were kind of hoping there was an exit past the vault door, but it makes sense why there isn't one.")  
                            alert("Suddenly a wall gets blasted open. The tribalmen are standing past the hole. They made you an exit!")
                            alert("You are now able to leave and go home eventually eating the cheese basically making this adventure useless.")
                            alert("GOOD ENDING")    
                        }else{
                            alert("You're just kinda stuck here now.")
                            alert("GAME OVER")
                        }
                    }else if(stick != 1){
                        alert("How did you get here what.")
                    }
                }else{
                    alert("You gave the wrong answer. You cease to exist.")
                    alert("GAME OVER")
                }
            }else if(stick > 1 && stick < 1){
                alert("You have been executed. GAME OVER")
            }else if(stick >1 || stick < 1){
                alert("You have been executed. GAME OVER")
            }else{
                alert("You have been executed. GAME OVER")
            }
        }else if(choice == 2){
            console.log("Went to ruins")
            alert("You go to the ruins. It doesn't really seem that special from afar. Up close you see gold coins lying out in the open. You wonder why that isn't gone yet.")
            var answer = prompt("Grab the gold? 1=yes 2=no")
            if(answer == 1){
                alert("You walk to the gold hoping to take it with you. You just realized you stepped on a pressure plate. Dozens of poison darts fly out of nowhere and you have no time to react. A couple hit you and there is no antidote to be found.")
                alert("GAME OVER")
            }else if(answer == 2){
                console.log("The final showdown")
                alert("You ignore the gold and just walk past.")
                alert("You see a small entrance and suddenly get a massive urge to enter.")
                alert("You walk in without thinking. The entrance goes underground. The walls and floor are laced with cheese bricks.")
                alert("It smells very cheesy. There is seemingly no way out. This is the 'final stand'. There is what seems like a large vault door.")
                alert("There is a text on the vault door. It reads: 'With a wave of the wand and the name of the almighty cheese this door shall open.' You were secretly hoping that the text rhymed. Good thing you're able to speak all languages.")
                if(stick == 1){
                    alert("The stick in your back pocket starts to glow with power. This must be the wand the text was talking about. Good thing you picked up that stick back there!")
                    var cheese = prompt("You wave the wand and say the magical word:")
                    if(cheese == "PARMESAN"){
                        console.log("Almost good ending")
                        alert("The vault door opens. You see a single piece of cheese. The almighty Parmesan. It's the rumored legendary cheese. ")
                        alert("Past the almighty Parmesan you only see walls, no exit. You were kind of hoping there was an exit past the vault door, but it makes sense why there isn't one.")
                        alert("Now you're just stuck with the Parmesan and the stick with no exit")
                        alert("GOOD ENDING?")
                    }else if(cheese == "Parmesan"){
                        console.log("Almost good ending")
                        alert("The vault door opens. You see a single piece of cheese. The almighty Parmesan. It's the rumored legendary cheese. ")
                        alert("Past the almighty Parmesan you only see walls, no exit. You were kind of hoping there was an exit past the vault door, but it makes sense why there isn't one.")
                        alert("Now you're just stuck with the Parmesan and the stick with no exit")
                        alert("GOOD ENDING?")
                    }else if(cheese == "parmesan"){
                        console.log("Almost good ending")
                        alert("The vault door opens. You see a single piece of cheese. The almighty Parmesan. It's the rumored legendary cheese. ")
                        alert("Past the almighty Parmesan you only see walls, no exit. You were kind of hoping there was an exit past the vault door, but it makes sense why there isn't one.")
                        alert("Now you're just stuck with the Parmesan and the stick with no exit")
                        alert("GOOD ENDING?")
                    }else{
                        alert("Nothing happens and now you're stuck.")
                        alert("GAME OVER")
                    }
                }else{
                    alert("You don't know what the text means with wand. Now you're just kinda stuck being left to die.")
                    alert("GAME OVER")
                }
            }else{
                alert("You gave the wrong answer. You cease to exist.")
                alert("GAME OVER")
            }
        }else if(choice == 3){
            console.log("Went to the forest")
            ForestScene();
        }else{
            alert("You gave the wrong answer. You cease to exist.")
            alert("GAME OVER")
        }
    }else{
        alert("You gave the wrong answer. You cease to exist.")
        alert("GAME OVER")
    }
}else if(answer >= 2){
    console.log("Stayed at home")
    alert("You decide not to go and just stay at home, giving up on your dream. \nGAME OVER");
}else{
    alert("You gave the wrong answer. You cease to exist.")
    alert("GAME OVER")
}
function ForestScene() {
    alert("You decide to go through the forest. Mere seconds after entering the forest you get knocked unconcious.\nBefore you got knocked out you saw a silhoutte for a short second.")
    alert("You wake up in a cage and start looking around. You see a small group of angry tribal men holding skewers. There's also a tribal man on a throne, he looks a little bit more angry than the other tribalmen.")
    alert("Seems this island isn't uninhabited after all. You can also see the bodies of some other people. Probably those beforementioned adventurers that never came back.")
    alert("The tribal man on the throne, presumably the leader, speaks up:'Foreigner, these are forbidden lands. You shall be executed because you dirty the name of the almighty PARMESAN.")
    alert("GAME OVER")
}
//Ik weet niet hoe de ! en !== operators werken