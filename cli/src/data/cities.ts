import {City, Data, data} from "@/data/initialData";

export const getCities: () => Promise<Data> = async () => {
    return data;
}

export const getCity: (id: number) => Promise<City | undefined> = async (id: number) => {
    const cities = await getCities()
    return cities.find(c => c.id === id)
}
