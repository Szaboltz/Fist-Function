function getMilk(money, bottle) {   
    var cost = Math.floor((money / (bottle * 1.5)));

    console.log("A sua quantidade de dinheiro é R$: " + money + " e a quantidade de garrafas que você consegue comprar é: " + cost);

  }

  getMilk(50, 7)