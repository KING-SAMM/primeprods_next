export function getAllPrototypes(id)
{
    const prototypesData = [
        { id: 1, title: "First Title", description: "Body of Prototype One" },
        { id: 2, title: "Second Title", description: "Body of Prototype Two" },
        { id: 3, title: "Third Title", description: "Body of Prototype Three" }
    ]

    if (id) {
        return prototypesData.filter(prototype => prototype.id == id)
    }

    return prototypesData;
}