// Fundamentos do typescript

type User = {
  name: String
  email: String
  address: {
    city: String
    state?: String
  }
}

function showWelcomeMessage(user: User) {
  return `Welcome ${user.name}, your e-mail is ${user.email}. Your city is ${user.address.city} and your state is ${user.address.state}`;
}

showWelcomeMessage({
  name: 'John Doe',
  email: 'john@doe.com',
  address: {
    city: 'New York',
    state: 'NY'
  }
})