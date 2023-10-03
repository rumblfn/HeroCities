import {City, Data, data} from "@/data/initialData";

export const getCities: () => Promise<Data> = async () => {
    return data;
}

export const getCity: (id: number) => Promise<City | undefined> = async (id: number) => {
    return data.find(c => c.id === id)
}
