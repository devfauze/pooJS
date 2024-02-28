//*****Associacao*****

//"Uma Associacao é um relacionamento entre classes que permite
//que uma instancia de uma classe faça a outra realizar uma acao"

//EXEMPLO 

//Vamos criar uma associação usando o exemplo do MindMeister, onde os objetos da classe Person possuem um atributo address, que é um objeto da classe Address. Para isso, criamos primeiro a classe Address:
    
  class Address {
    constructor(street, number, neighborhood, city, state) {
        this.street = street
        this.number = number
        this.neighborhood = neighborhood
        this.city = city
        this.state = state
    }

    fullAddress() {
        return `Rua ${this.street}, nº ${this.number}. ${this.neighborhood}, ${this.city}/${this.state}`
    }
    }

    module.exports = Address

//Depois podemos criar a classe "Person"

   class Person {
  	constructor(name, address) {
   	this.name = name
    	this.address = address
  	}
    }

    module.exports = Person

//E por fim podemos testar criando objetos dessas duas classes:

	const Address = require('./Address')
	const Person = require('./Person')

	const addr = new Address('7 de Setembro', 92, 'Centro', 'São Fidélis', 'RJ')
	const john = new Person('John Doe', addr)

	console.log(john)
	console.log(john.address.fullAddress())