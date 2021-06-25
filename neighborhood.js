// const resArray = document.querySelector('#restaurants')
// const random = Math.floor(Math.random() * resArray.length);

// Math.floor(Math.random() * resArray.length);
// console.log(random, randomRes[random]);

// console.log(resArray)

//Couldn't quite finish. Got stuck

const restaurantRes = document.getElementById('restaurant-button')

const restaurantList = document.querySelector('.random-restaurant')

const restaurantArr = ['Tadka Cuisine of India', 'El Tapatio', 'Daley Freez']

const getRestaurant = () => {
    const random = Math.floor(Math.random() = randomArr.length)
    const restaurantP = document.createElement('p')
    restaurantP.textContent= restaurantArr[random]
    restaurantList.appendChild(restaurantP)
}
randomButton.addEventListener('click', getRestaurant)