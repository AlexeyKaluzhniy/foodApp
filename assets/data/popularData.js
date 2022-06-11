const popularData = [
    {
        id: '1',
        image: require('../images/pizza1.png'),
        title: 'Primavera Pizza',
        weight: '540 g',
        rating: '5.0',
        price: 3.99,
        sizeName: 'Medium',
        sizeNumber: 14,
        crust: 'Thin crust',
        deliveryTime: 30,
        ingridients: [
            {
            id: '1',
            name: 'ham',
            image: require('../images/ham.png'),
            },
            {
                id: '2',
                name: 'cheese',
                image: require('../images/cheese.png'),
            },
            {
                id: '3',
                name: 'garlic',
                image: require('../images/garlic.png'),
            },
            {
                id: '4',
                name: 'tomato',
                image: require('../images/tomato.png'),
            }
        ] 
    },
    {
        id: '2',
        image: require('../images/pizza2.png'),
        title: 'Vegetarian Pizza',
        weight: '450 g',
        rating: '4.7',
        price: 3.55,
    },
    {
        id: '3',
        image: require('../images/pizza3.png'),
        title: 'Pepperoni Pizza',
        weight: '700 g',
        rating: '5.0',
        price: 4.99,
    }
];

export default popularData;