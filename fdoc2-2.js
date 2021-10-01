

const users = [
    {
        name: 'Brook',
        scores: 75,
        skills: ['HTM', 'CSS', 'JS'],
        age: 16
    },
    {
        name: 'Alex',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'David',
        scores: 75,
        skills: ['HTM', 'CSS'],
        age: 22
    },
    {
        name: 'John',
        scores: 85,
        skills: ['HTM'],
        age: 25
    },
    {
        name: 'Sara',
        scores: 95,
        skills: ['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name: 'Martha',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'Thomas',
        scores: 90,
        skills: ['HTM', 'CSS', 'JS'],
        age: 20
    }
];


// Write a function which filter users who has  scoresGreaterThan85
// function scoresGreaterThan85(users) {
//     return users.scores > 85
// }

// console.log(users.filter(scoresGreaterThan85))



// Write a function which addUser  to the user array only if the user does not exist.
// function addUserifNotExists(user) {

//     let x = users.filter(iterTheUsers => iterTheUsers.name == user.name);
//     // console.log(typeof x)
//     if (x != undefined) users.push(user)
//     else return console.log("user already exist")
//     console.log(users)

// }
// addUserifNotExists({ name: 'Dheeraj', scores: 75, skills: ['nginx', 'docker', 'JS'], age: 27 })



// 	Write a function which addUserSkill which can add skill to a user only if the user exist.   
// function addUserSkill(user) {
//     for (let i = 0; i < users.length; i++) {
//         const ele = users[i];
//         if (ele.name == user.name) ele.skills.push(user.skill)
//         else continue;
//     }
//     return users
// }

// console.log(addUserSkill({ name: 'Joh', skill: 'Nginx' }))




// Write a function which editUser if the user exist in the users array.

function editUser(user) {
    for (let i = 0; i < users.length; i++) {
        const ele = users[i];
        if (ele.name == user.name) {
            ele.scores = user.score,
                ele.skills = user.skill,
                ele.age = user.age

        }
    }
    return users
}
console.log(editUser({ name: 'Thomas', score: 99, skill: ['Nginx', 'docker'], age: 30 }))