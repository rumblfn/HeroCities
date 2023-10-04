export type City = {
    id: number,
    name: string,
    description: string,
    preview: string,
}
export type Data = Array<City>

export const data: Data = [
    {
        id: 1,
        name: "Москва",
        description: "msc some data here",
        preview: "/cities/preview/download.png",
    },
    {
        id: 2,
        name: "Ленинград",
        description: "spb some data here",
        preview: "/cities/preview/download.png",
    },
]
