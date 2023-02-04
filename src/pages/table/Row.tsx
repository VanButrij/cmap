import { IPerson } from "../../models"
import { Cell } from "./Cell"

interface PersonProps {
    person: IPerson
    i: number
    updatePerson: Function
    openMenu: Function
    closeMenu: Function
}

export function Row ({ person, i, updatePerson, openMenu, closeMenu }: PersonProps) {
    return (
        <tr className="border-b"
            onContextMenu={(e) => {
                e.preventDefault(); // prevent the default behaviour when right clicked
                openMenu(e.pageX, e.pageY, parseInt(person.id) + 1)
            }}>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{i + 1}</td>
            <Cell prop={ person.full_name } item={"full_name"} str={i + 2} updatePerson={updatePerson}/>
            <Cell prop={ person.age } item={"age"} str={i + 2} updatePerson={updatePerson}/>
            <Cell prop={ person.military } item={"military"} str={i + 2} updatePerson={updatePerson}/>
            <Cell prop={ person.place } item={"place"} str={i + 2} updatePerson={updatePerson}/>
            <Cell prop={ person.profession } item={"profession"} str={i + 2} updatePerson={updatePerson}/>
            <Cell prop={ person.current } item={"current"} str={i + 2} updatePerson={updatePerson}/>
            <Cell prop={ person.marital } item={"marital"} str={i + 2} updatePerson={updatePerson}/>
            <Cell prop={ person.extras } item={"extras"} str={i + 2} updatePerson={updatePerson}/>
            <Cell prop={ person.obschestroy } item={"obschestroy"} str={i + 2} updatePerson={updatePerson}/>
            <Cell prop={ person.personal } item={"personal"} str={i + 2} updatePerson={updatePerson}/>
            <Cell prop={ person.transport } item={"transport"} str={i + 2} updatePerson={updatePerson}/>
            <Cell prop={ person.devices } item={"devices"} str={i + 2} updatePerson={updatePerson}/>
            <Cell prop={ person.education } item={"education"} str={i + 2} updatePerson={updatePerson}/>
            <Cell prop={ person.equipment } item={"equipment"} str={i + 2} updatePerson={updatePerson}/>
            <Cell prop={ person.motivation } item={"motivation"} str={i + 2} updatePerson={updatePerson}/>
            <Cell prop={ person.trips } item={"trips"} str={i + 2} updatePerson={updatePerson}/>
            <Cell prop={ person.description } item={"description"} str={i + 2} updatePerson={updatePerson}/>
      </tr>
    )
}