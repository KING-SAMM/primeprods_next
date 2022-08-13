export async function getAllPrototypes(id)
{
    return await fetch('http://localhost:8000/api/prototypes')
        .then( response => response.json())
        .then(response => {
            response = response.prototypes.data
            if (id) {
                return response.filter(prototype => prototype.id == id)
            }
            return response;
        })
        .catch(err => console.error("ERROR is ",err));
}

export async function getAllUsers(id)
{
    return await fetch('http://localhost:8000/api/users')
        .then( response => response.json())
        .then(response => {
            response = response.users
            console.log('RESPONSE is ', response);
            if (id) {
                return response.filter(user => user.id == id)
            }
            return response;
        })
        .catch(err => console.error("ERROR is ",err));
}