(function ()
{
var stock = [[]];//Bird, quantity 1, price 2
var sells = new Array();//Bird

function Bird (type, sellPrice){
    this.type = type;
    this.sellPrice = sellPrice;
}

function BuyTransaction(bird, quantity, buyPrice){
    this.bird = bird;
    this.buyPrice = buyPrice;
    this.quantity = quantity;
}

function buyBirds(BuyTransaction)
{
    for (idx in stock){
        if( stock[idx][0] === BuyTransaction.Bird ){
            stock[idx][1] += BuyTransaction.quantity;
            stock[idx][2] = avg(stock[idx][2], BuyTransaction.buyPrice, stock[idx][1]) ;
        } else {
            stock.push(BuyTransaction.Bird, BuyTransaction.quantity, BuyTransaction.buyPrice);
        }

    }

}
function avg ( quantity, price1, price2){
        return (price1 + price2) / quantity;
}

function printAll()
{
    for (idx in stock)
    {
        var bird = stock[idx];
        console.log(stock);
    }
}

var duck = new Bird("duck", 90);

var first = new BuyTransaction(duck, 100, 50);
var second = new BuyTransaction(duck, 50, 100);

buyBirds(first);
buyBirds(second);

printAll();



})();