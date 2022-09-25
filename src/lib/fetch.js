export function getAllPrototypes(id)
{
    return fetch('http://localhost:8000/api')
        .then( response => response.json())
        .then(response => {
            if(response.status === 500) {
                throw Error("Encountered possible network error.")
            }
            response = response.prototypes
            if (id) {
                return response.data.filter(prototype => prototype.id == id)
            }
            return response;
        })
        .catch(error => error.response)
}

export function getSinglePrototype(id)
{
    return fetch(`http://localhost:8000/api/prototypes/${id}`)
    .then( response => response.json())
    .then(response => {
        return response = response.prototype
    })
}

export function getAllUsers(id)
{
    return fetch('http://localhost:8000/api/users')
        .then( response => response.json())
        .then(response => {
            response = response.users
            if (id) {
                return response.filter(user => user.id == id)
            }
            return response;
        })
}