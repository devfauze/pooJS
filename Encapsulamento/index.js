//*****Encapsulamento*****

//Serve para tornar classe publica ou privada, tambem pode ser em metodos, para tornar uma classe privada
//basta colocar # antes do nome

//&&&& EXEMPLO &&&&

//Para definir um atributo privado precisamos declará-lo fora do construtor e utilizando um # no começo do seu nome. Para definir um método privado o procedimento é o mesmo, pois os métodos já são escritos fora do construtor normalmente. Todos os atributos e métodos que não possuírem um # no começo do nome serão automaticamente púbicos:

class Account {
  #password
  #balance

  constructor(user) {
    this.email = user.email
    this.#password = user.password
    this.#balance = 0
  }

  getBalance(email, password) {
    if (this.#authenticate(email, password)) {
      return this.#balance
    } else {
      return null
    }
  }

  #authenticate(email, password) {
    return this.email === email && this.#password === password
  }
}

//Repare que fora da classe podemos acessar apenas o atributo email e o método getBalance(), tentar acessar #password, #balance ou #authenticate() gerará um erro:

const user = {
  email: "user@email.com",
  password: "123456"
}

const userAccount = new Account(user)

console.log(userAccount)
//console.log(userAccount.#password) // Vai gerar erro
//console.log(userAccount.#balance) // Vai gerar erro
//console.log(userAccount.#authenticate()) // Vai gerar erro
console.log(userAccount.getBalance("user@email.com", "123456"))
console.log(userAccount.getBalance("user@email.com", "000000"))