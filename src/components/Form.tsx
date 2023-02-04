import { IPerson } from '../models'
import { Error } from './Error'

interface FormProps {
    name: string
    setFunction: Function
    setError: Function
    value: string
    personData: IPerson
}

export function Form({ name, setFunction, setError, value, personData }: FormProps) {

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFunction(event.target.value)
    }

    return (
        <div className="w-[100%]">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        { `Enter ${name}` }
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 
                    text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="username" type="text" onChange={changeHandler} placeholder={ `Enter ${name}` } />
                </div>
            </form>
        </div>
    )
}