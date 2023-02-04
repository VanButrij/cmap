import { useState } from 'react'
import { IPerson } from '../models'
import { Form } from '../components/Form'

const personData: IPerson = {
    id: '',
    full_name: '',
    age: '',
    military: '',
    place: '',
    profession: '',
    current: '',
    marital: '',
    habits: '',
    extras: '',
    obschestroy: '',
    personal: '',
    transport: '',
    devices: '',
    education: '',
    equipment: '',
    motivation: '',
    trips: '',
    description: '',
    show: ''
}

interface CreatePersonProps {
    maxId: string
    createPerson: Function
    onClose: Function
}

export function CreatePerson({ maxId, createPerson, onClose }: CreatePersonProps) {
    const [full_name, setFullName] = useState('')
    const [age, setAge] = useState('')
    const [military, setMilitary] = useState('')
    const [place, setPlace] = useState('')
    const [profession, setProfession] = useState('')
    const [current, setCurrent] = useState('')
    const [marital, setMarital] = useState('')
    const [habits, setHabits] = useState('')
    const [extras, setExtras] = useState('')
    const [obschestroy, setObschestroy] = useState('')
    const [personal, setPersonal] = useState('')
    const [transport, setTransport] = useState('')
    const [devices, setDevices] = useState('')
    const [education, setEducation] = useState('')
    const [equipment, setEquipment] = useState('')
    const [motivation, setMotivation] = useState('')
    const [trips, setTrips] = useState('')
    const [description, setDescription] = useState('')

    const [error, setError] = useState('')

    function setPersonData() {
        personData.id = (parseInt(maxId) + 1).toString()
        personData.full_name = full_name
        personData.age = age
        personData.military = military
        personData.place = place
        personData.profession = profession
        personData.current = current
        personData.marital = marital
        personData.habits = habits
        personData.extras = extras
        personData.obschestroy = obschestroy
        personData.personal = personal
        personData.transport = transport
        personData.devices = devices
        personData.education = education
        personData.equipment = equipment
        personData.motivation = motivation
        personData.trips = trips
        personData.description = description
        personData.show = '1'    
        
        if (personData.full_name.length) {
            createPerson(personData)
        } else {
            alert('Заполните обязательные поля')
        }
    }

    function closeModal () {
        onClose()
    }

    return (
        <>
            <Form name='full_name' setFunction={setFullName} setError={setError}
                value={full_name}  personData={personData} />
            <Form name='age' setFunction={setAge} setError={setError}
                value={age}  personData={personData} />
            <Form name='military' setFunction={setMilitary} setError={setError}
                value={military}  personData={personData} />
            <Form name='place' setFunction={setPlace} setError={setError}
                value={place}  personData={personData} />
            <Form name='profession' setFunction={setProfession} setError={setError}
                value={profession}  personData={personData} />
            <Form name='current' setFunction={setCurrent} setError={setError}
                value={current}  personData={personData} />
            <Form name='marital' setFunction={setMarital} setError={setError}
                value={marital}  personData={personData} />
            <Form name='habits' setFunction={setHabits} setError={setError}
                value={habits}  personData={personData} />
            <Form name='extras' setFunction={setExtras} setError={setError}
                value={extras}  personData={personData} />
            <Form name='obschestroy' setFunction={setObschestroy} setError={setError}
                value={obschestroy}  personData={personData} />
            <Form name='personal' setFunction={setPersonal} setError={setError}
                value={personal}  personData={personData} />
            <Form name='transport' setFunction={setTransport} setError={setError}
                value={transport}  personData={personData} />
            <Form name='devices' setFunction={setDevices} setError={setError}
                value={devices}  personData={personData} />
            <Form name='education' setFunction={setEducation} setError={setError}
                value={education}  personData={personData} />
            <Form name='equipment' setFunction={setEquipment} setError={setError}
                value={equipment}  personData={personData} />
            <Form name='motivation' setFunction={setMotivation} setError={setError}
                value={motivation}  personData={personData} />
            <Form name='trips' setFunction={setTrips} setError={setError}
                value={trips}  personData={personData} />
            <Form name='description' setFunction={setDescription} setError={setError}
                value={description}  personData={personData} />

            <div className="flex items-center justify-between">
                <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 
                    rounded focus:outline-none focus:shadow-outline" type="button"
                    onClick={setPersonData}>
                    Создать
                </button>
                <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 
                    rounded focus:outline-none focus:shadow-outline" type="button"
                    onClick={closeModal}>
                    Отмена
                </button>
            </div>
            <p className="text-center text-gray-500 text-xs">
                &copy;2020 Acme Corp. All rights reserved.
            </p>
        </>
    )
}