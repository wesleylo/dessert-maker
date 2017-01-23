console.info('Welcome to the dessert maker v1.0.');

var currentFruit = null;
var currentDessert = null;

var images = {
  fruits: {
    apple: 'img/Apple.jpg',
    orange: 'img/Orange.jpg',
    banana: 'img/Banana.jpg'
  },
  desserts: {
    icecream: 'img/IceCream.jpg',
    cake: 'img/Cake.jpg',
    pie: 'img/Pie.jpg'
  },
  mixes: {
    apple: {
      icecream: 'img/AppleIceCream.jpg',
      cake: 'img/AppleCake.jpg',
      pie: 'img/ApplePie.jpg'
    },
    orange: {
      icecream: 'img/OrangeIceCream.jpg',
      cake: 'img/OrangeCake.jpg',
      pie: 'img/OrangePie.jpg'
    },
    banana: {
      icecream: 'img/BananaIceCream.jpg',
      cake: 'img/BananaCake.jpg',
      pie: 'img/BananaPie.jpg'
    }
  }
};

var fruitHolder = document.querySelector('.Holder--fruit');
var dessertHolder = document.querySelector('.Holder--dessert');
var resultHolder = document.querySelector('.Holder--result');

var fruits = document.querySelectorAll('.Fruit')
for(i = 0; i < fruits.length; i++) {
  fruits[i].addEventListener('click',
    function clickFruit(e) {
      //assume text for ingredient buttons correspond to src images
      currentFruit = e.toElement.innerText.replace(/\s+/g, '').toLowerCase(); //find fruit name, remove spaces, convert to lowercase
      fruitHolder.innerHTML = '<img src="' + images.fruits[currentFruit] +'"/>';
      add();
    }
  );
}

var desserts = document.querySelectorAll('.Dessert')
for(i = 0; i < desserts.length; i++) {
  desserts[i].addEventListener('click',
    function clickDessert(e) {
      currentDessert = e.toElement.innerText.replace(/\s+/g, '').toLowerCase(); //find dessert name, remove spaces, convert to lowercase
      dessertHolder.innerHTML = '<img src="' + images.desserts[currentDessert] +'"/>';
      add();
    }
  );
}

var reset = document.querySelector('.Reset');
reset.addEventListener('click',
  function reset() {
    fruitHolder.innerHTML = "";
    dessertHolder.innerHTML = "";
    resultHolder.innerHTML = "";
    currentFruit = null;
    currentDessert = null;
  }
);

function add() {
  if(currentFruit != null && currentDessert != null) { //check if both ingredients are selected
    resultHolder.innerHTML = '<img src="' + images.mixes[currentFruit][currentDessert] +'"/>';
  }
}
