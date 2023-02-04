import { useState } from "react"

interface PersonProps {
    prop: string
    item: string
    str: number
    updatePerson: Function
}

export function Cell({ prop, item, str, updatePerson }: PersonProps) {
    const [edit, setEdit] = useState(false)
    const [value, setValue] = useState('')

    function editFun(state: boolean) {
        setEdit(state)
    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
        console.log(value)
    }

    const updateItem = () => {
        updatePerson(value, item, str)
        editFun(false)
    }

    return (
            <td
                className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap cursor-pointer"
            >{
             !edit ? <span onClick={() => editFun(true)}>{prop}</span>
             : <div className="flex flex-row justify-between">
                    <input 
                        type="text" 
                        autoFocus={true} 
                        value={value} 
                        onChange={changeHandler}
                        className="shadow appearance-none border rounded py-2 px-3 text-sm 
                        text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    <div className="flex flex-row justify-around">
                        <button 
                            onClick={updateItem}>
                                <svg className="h-8 w-8 text-green-700"  width="24" height="24" viewBox="0 0 24 24" 
                                    strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" 
                                    strokeLinejoin="round">  
                                    <path stroke="none" d="M0 0h24v24H0z"/>  
                                    <circle cx="12" cy="12" r="9" />  
                                    <path d="M9 12l2 2l4 -4" />
                                </svg>
                            </button>
                        <button 
                            onClick={() => editFun(false)}>
                                <svg className="h-8 w-8 text-gray-700"  width="24" height="24" viewBox="0 0 24 24" 
                                    strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" 
                                    strokeLinejoin="round">  
                                    <path stroke="none" d="M0 0h24v24H0z"/>  
                                    <circle cx="12" cy="12" r="9" />  
                                    <path d="M10 10l4 4m0 -4l-4 4" />
                                </svg>
                            </button>
                    </div>
             </div>
            }       
            </td> 
    )
}