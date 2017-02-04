(function ()
{
var birds = [ ["Duck",1, 23, 0], ["Eagle",3, 4, 0] ];//name 0, quantity 1, price 2, sales 3

function addNewType(tName, tQuantity, tPrice)
{
    birds.push([tName, tQuantity, tPrice,0]);
}

function buyBirds(tName, tQuantity, tPrice)
{
    for(idx in birds){
        if (birds[idx][0]==tName){
            birds[idx][1] += tQuantity;
            birds[idx][2]= tPrice;
        }
    }
}

function saleBirds(tName, tQuantity, tPrice)
{
    birds.push([tName, tQuantity, tPrice,0]);
}


function printAll()
{
    for (idx in birds)
    {
        var bird = birds[idx];
        console.log(bird);
    }
}

printAll();

function getInventoryReport()
{
        console.log("------------------Inventory Report----------------------------");
        console.log("Type-|-Quantity-----------------------------------------------");
    var next;

    for(next in birds){
        console.log("--------------------------------------------------------------");
        console.log(birds[next][0]+ " | " + birds[next][1]);
    }
        console.log("------------------END of Inventory Report---------------------");
}

function getSaleReport()
{
        console.log("------------------Sales Report----------------------------");
        console.log("Type-|-Sales-----------------------------------------------");
    var next;

    for(next in birds){
        console.log("--------------------------------------------------------------");
        console.log(birds[next][0]+ " | " + birds[next][3]);
    }
        console.log("------------------END of Sales Report---------------------");
}


addNewType("Penguin", 1, 100);
buyBirds("Penguin", 4, 100);
getInventoryReport();
getSaleReport();


})();