//url =https://jsonplaceholder.typicode.com/users

const getUsers = () =>
{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(users => console.log(users))
    .catch(err => console.log(err));
}
getUsers();

const getUser = (id) =>
{
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(user => console.log(user))
    .catch(err => console.log(err));
}
getUser(2);