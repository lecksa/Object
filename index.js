// let my_school = {
//     number: 33,
//     pupil: 2000,
//     teacher: 40,
//     building: {
//         elementary_school: '2 floors',
//         high_school: '3 floors',
//         snack_bar: '1 floor',
//         toilet: '2 rooms',
//         security: '1 room'
//     },
//     playground: 3,
//     class: ['A', 'B', 'V', 'G', 'D', 'E'],
//     subject: ['English', 'Math', 'Biology', 'Geography', 'Russian', 'Uzbek'],
//     red_diplomas: 4,
//     rating: 3,
//     area: '800 m^2',
//     language_class: {
//         uzbek: 1,
//         russian: 5
//     }
// }
// console.log(my_school);




let house = {
    room: ['living room', 'kitchen', 'bathroom', 'atic', 'basement', 'toilet', 'child room'],
    area: '100 m^2',
    garden_trees: {
        cherry: 2,
        persimmon: 2,
        apple: 3,
        grapes: 6
    }
}

Object.freeze(house)

let apartment = {
    room: ['living room', 'kitchen', 'toilet', 'bedroom'],
    area: '50 m^2',
    plants: {
        cactus: 2,
        rose: 1
    }
}

Object.freeze(apartment)

let new_object = {}

Object.assign({}, house, {apartment})

let key = Object.keys(new_object)

let value = Object.values(new_object)

let old_object = {}

Object.assign({}, key, {value})

console.log(new_object);

