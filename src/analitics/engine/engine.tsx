import { IPerson } from "../../models";

export function engine(data: IPerson[]) {
    // развертка входящей таблицы. необходимо создать функцию,
    // которая будет по заданному полю создавать несколько объектов
    const expandedData = expandData(data)
}

function expandData(data: IPerson[]): Array<object> {
    let expandedData: Array<object> = []

    expandedData = data.map(item => {
        const items = item['motivation'].trim().split(', ')
        console.log(items)
        return item
    })


    return expandedData
}