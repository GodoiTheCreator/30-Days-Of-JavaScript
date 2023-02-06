console.log("---EXERCISES 1---")
const dog = {}

console.log(dog)

dog.name = "Yuri"
dog.legs = 4
dog.color = "Grey"
dog.bark = function() {
    return "woof woof"
}

console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.bark())

dog.breed = "Schnauzer"
dog.getDogInfo = function(){
    return (Object.values(dog))
}

console.log(dog.getDogInfo())

console.log("---EXERCISES 2---")

const usersOne = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
}

const whoHasManySkills = () =>{
    let count = 0
    let result
    for (let i = 0; i<Object.keys(usersOne).length;i++){
        if(Object.entries(usersOne)[i][1].skills.length > count){
            count = Object.entries(usersOne)[i][1].skills.length
            result = Object.keys(usersOne)[i]
        }
    }
    return result
}

console.log(whoHasManySkills())

const howManyAreLogged = () => {
  let count = 0
  for (let i = 0; i<Object.keys(usersOne).length;i++){
    if (Object.entries(usersOne)[i][1].isLoggedIn == true){
      count++
    }
  }
  return count
}

console.log("How many are logged: "+howManyAreLogged())

const personAccount = {
  firstName: '',
  lastName: '',
  incomes: [],
  expenses: [],
  totalIncome: function(){
    let result = 0
    for (let i = 0; i<this.incomes.length; i++){
      result += this.incomes[i]
    }
    return result
  },
  totalExpense: function(){
    let result = 0
    for (let i = 0; i<this.expenses.length; i++){
      result += this.expenses[i]
    }
    return result
  },
  accountInfo: function(){
    return [this.firstName, this.lastName, this.incomes, this.expenses]
  },
  addIncome: function(newIncome){
    this.incomes.push(newIncome)
  },
  addExpense: function(newExpense){
    this.expenses.push(newExpense)
  },
  accountBalance: function(){
    return (this.totalIncome() - this.totalExpense())
  }
}

personAccount.firstName = 'Eduardo'
personAccount.lastName = 'Silveira'
personAccount.addIncome(10)
personAccount.addIncome(10)
personAccount.addExpense(5)
personAccount.addExpense(2)

console.log(personAccount.totalIncome())
console.log(personAccount.totalExpense())
console.log(personAccount.accountBalance())

const users = [
  {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false
  },
  {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false
  },
  ];

  const products = [
{
  _id: 'eedfcf',
  name: 'mobile phone',
  description: 'Huawei Honor',
  price: 200,
  ratings: [
    { userId: 'fg12cy', rate: 5 },
    { userId: 'zwf8md', rate: 4.5 }
  ],
  likes: []
},
{
  _id: 'aegfal',
  name: 'Laptop',
  description: 'MacPro: System Darwin',
  price: 2500,
  ratings: [],
  likes: ['fg12cy']
},
{
  _id: 'hedfcg',
  name: 'TV',
  description: 'Smart TV:Procaster',
  price: 400,
  ratings: [{ userId: 'fg12cy', rate: 5 }],
  likes: ['fg12cy']
}
]

function signUp(newUsername, newEmail, newPassword){
  const d = new Date
  for (let user in users){
    if (newEmail == users[user].email){
      console.log('User already has an account')
      return null
    }
  }
  users.push({
    _id: 'aarth',
    username: newUsername,
    email: newEmail,
    password: newPassword,
    createdAt: d.getDay()+'/'+d.getMonth()+'/'+d.getFullYear()+' '+d.getHours()+':'+d.getMinutes(),
    isLoggedIn: true
  })
}

signUp('Arthur', 'Arthur@Arthur.com', '123421')

console.log(users)

function signIn(username, password){
  for (let user in users){
    if (username == users[user].username){
      if(password == users[user].password){
        console.log("Welcome "+ users[user].username)
      }
      else{
        console.log("Wrong password!")
      }
    }
    else{
      console.log("This account doesn't exist!")
    }
  }
}

signIn('Arthur','12321')