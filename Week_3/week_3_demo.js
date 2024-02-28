function numToMonth(number) {  
    switch (number) {           // Switch function saves value "number" and compares to cases; saves time compared to else if
        case 1: 
            console.log("January");
            break;
        case 2:
            console.log("February");
            break;
        default:
            console.log("Not a Month");
            break;
    }
}

//numToMonth(2)


// For Loops :: Syntax |—> for (var [var] = [index]; [var] < [count]; [var]++)

/** 
var count = 5
for (var i = 0; i <= count; i++){
    console.log(i)
}
**/

function findTreasure(x,y) {
    var treasureX = 3;
    var treasureY = 9;

    if (treasureX == x && treasureY == y) {
        console.log("Found Treasure");
        return;
    }

    while (x != treasureX || y != treasureY) {
        if (x < treasureX) {
            console.log("Stepping to the Right");
            x++;
        } else if (x > treasureX) {
            console.log("Stepping to the Left");
            x--;
        }

        if (y < treasureY) {
            console.log("Stepping Upwards");
            y++;
        } else if (y > treasureY) {
            console.log("Stepping downwards");
            y--;
        }
    }
    
    console.log("Found Treasure");
    return;
}

//findTreasure(3,9);
//findTreasure(6,3);
findTreasure(3,8);