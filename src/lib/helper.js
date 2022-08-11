export async function getAllPrototypes(id)
{
    return await fetch('http://localhost:8000/api/prototypes')
        .then( response => response.json())
        .then(response => {
            response = response.prototypes.data
            console.log('RESPONSE is ', response);
            if (id) {
                return response.filter(prototype => prototype.id == id)
            }
            return response;
        })
        .catch(err => console.error("ERROR is ",err));
}