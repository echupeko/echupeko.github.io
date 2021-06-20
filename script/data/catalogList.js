const catalogList = [
    {
        id: 0, //гречичный
        name: 'гречишный',
        description: 'Много описания мёда, какой он хороший и прочее, но вообще я не очень его ем, так изредка',
        products: [
            {
                id: 0,
                count: 3,
                salePrice: 1850,
                price: 1900,
                visible: true,
                quantity: 0
            },
            {
                id: 1,
                count: 2,
                salePrice: 200,
                price: 1600,
                visible: true,
                quantity: 0
            },
            {
                id: 2,
                count: 1,
                salePrice: 1850,
                price: 750,
                visible: true,
                quantity: 0
            },
            {
                id: 3,
                count: 0.5,
                salePrice: 1850,
                price: 320,
                visible: true,
                quantity: 0
            },
        ],
        order: 1,
        unit: 'л.',
        min: 1,
        max: 14, //остаток
        buy: false, //флаг для заказа
        sale: false //участвует в распродаже
    },
    {
        id: 1, //гречичный
        name: 'горно-таёжный',
        description: 'Много описания мёда, какой он хороший и прочее, но вообще я не очень его ем, так изредка',
        products: [
            {
                id: 0,
                count: 3,
                salePrice: 1850,
                price: 1930,
                visible: true,
                quantity: 0
            },
            {
                id: 1,
                count: 2,
                salePrice: 300,
                price: 1620,
                visible: false,
                quantity: 0
            },
            {
                id: 2,
                count: 1,
                salePrice: 1850,
                price: 790,
                visible: true,
                quantity: 0
            },
            {
                id: 3,
                count: 0.5,
                salePrice: 1850,
                price: 350,
                visible: true,
                quantity: 0
            },
        ],
        order: 1,
        unit: 'л.',
        min: 1,
        max: 14, //остаток
        buy: false, //флаг для заказа
        sale: false //участвует в распродаже
    },
    {
        id: 2, //гречичный
        name: 'луговой',
        description: 'Много описания мёда, какой он хороший и прочее, но вообще я не очень его ем, так изредка',
        products: [
            {
                id: 0,
                count: 3,
                salePrice: 1850,
                price: 2000,
                visible: true,
                quantity: 0
            },
            {
                id: 1,
                count: 2,
                salePrice: 1850,
                price: 1650,
                visible: true,
                quantity: 0
            },
            {
                id: 2,
                count: 1,
                salePrice: 1850,
                price: 780,
                visible: true,
                quantity: 0
            },
            {
                id: 3,
                count: 0.5,
                salePrice: 1850,
                price: 360,
                visible: false,
                quantity: 0
            },
        ],
        order: 1,
        unit: 'л.',
        min: 1,
        max: 14, //остаток
        buy: false, //флаг для заказа
        sale: false //участвует в распродаже
    },
    {
        id: 3, //гречичный
        name: 'васильковый',
        description: 'Много описания мёда, какой он хороший и прочее, но вообще я не очень его ем, так изредка',
        products: [
            {
                id: 0,
                count: 3,
                salePrice: 1850,
                price: 1980,
                visible: false,
                quantity: 0
            },
            {
                id: 1,
                count: 2,
                salePrice: 1850,
                price: 1700,
                visible: true,
                quantity: 0
            },
            {
                id: 2,
                count: 1,
                salePrice: 1850,
                price: 800,
                visible: false,
                quantity: 0
            },
            {
                id: 3,
                count: 0.5,
                salePrice: 1850,
                price: 400,
                visible: true,
                quantity: 0
            },
        ],
        unit: 'л.',
        max: 14, //остаток
        buy: false, //флаг для заказа
        sale: false //участвует в распродаже
    },
    {
        id: 4, //гречичный
        name: 'луговое разнотравье',
        description: 'Много описания мёда, какой он хороший и прочее, но вообще я не очень его ем, так изредка',
        products: [
            {
                id: 0,
                count: 3,
                salePrice: 1850,
                price: 2100,
                visible: true,
                quantity: 0
            },
            {
                id: 1,
                count: 2,
                salePrice: 1850,
                price: 1800,
                visible: false,
                quantity: 0
            },
            {
                id: 2,
                count: 1,
                salePrice: 1850,
                price: 900,
                visible: false,
                quantity: 0
            },
            {
                id: 3,
                count: 0.5,
                salePrice: 1850,
                price: 450,
                visible: true,
                quantity: 0
            },
        ],
        order: 1,
        unit: 'л.',
        min: 1,
        max: 14, //остаток
        buy: false, //флаг для заказа
        sale: false //участвует в распродаже
    },

]

const newHoneyList = [
    {
        id: 0,
        title: 'Весенний (Акация)',
        description: 'он весенний из акации',
        path: [1,1]
    },
    {
        id: 1,
        title: 'Летний Горное разнотравие',
        description: 'он летний',
        path: [1,0]
    },
    {
        id: 2,
        title: 'Летний Дягель с горным разнотравием',
        description: 'он из дягеля',
        path: [1,1]
    },
    {
        id: 3,
        title: 'Осенний Горное разнотравие',
        description: 'он осенний',
        path: [0,1]
    },
    {
        id: 4,
        title: 'Осенний Гречневый с горным разнотравием',
        description: 'он из гречихи',
        path: [0,1]
    }
];
