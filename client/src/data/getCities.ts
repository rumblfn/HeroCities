type City = {
    id: number,
    name: string,
    description: string,
}
type Data = Array<City>

export const data: Data = [
    { id: 1, name: "Москва", description: "msc some data here" },
    { id: 2, name: "Санкт-Петербург", description: "spb some data here" },
]
