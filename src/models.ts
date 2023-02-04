export interface IPerson {

    id: string
    full_name: string
    age: string
    military: string
    place: string
    profession: string
    current: string
    marital: string
    habits: string
    extras: string
    obschestroy: string
    personal: string
    transport: string
    devices: string
    education: string
    equipment: string
    motivation: string
    trips: string
    description: string
    show: string

}

export interface IProduct {

    id?: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
        rate: number
        count: number
    }

}

