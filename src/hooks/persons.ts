import React, { useEffect, useState } from 'react'
import { IPerson } from '../models'
import axios, {AxiosError} from 'axios'

export function usePersons() {
    const [persons=[], setPersons] = useState<IPerson[]>()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const url_fetch_all = 'http://localhost:3300/'
    const url_update_cell = 'http://localhost:3300/update'
    const url_create_row = 'http://localhost:3300/create'

    const headers = {
      'Content-Type': 'text/plain'
    }

    function createPerson(person: IPerson, item: string, str: number) {
      if (person.full_name != null) {
        axios.post(url_create_row, { 'value': person, 'item': item, 'str': str }, { headers: headers })
        .then(res => {
            if (res.status == 200) fetchPersons()
        })
      }
    }

    function updatePerson(value: string, item: string, str: number) {
      if (value != null) {
        axios.post(url_update_cell, { 'value': value, 'item': item, 'str': str }, { headers: headers })
        .then(res => {
            if (res.status == 200) fetchPersons()
        })
      }
    }
  
    async function fetchPersons() {
      try {
        setError('')
        setLoading(true)
        const response = await axios.get<string>(url_fetch_all)
        setPersons(JSON.parse(JSON.stringify(response.data)))
        setLoading(false)      
      } catch (e: unknown) {
        const error = e as AxiosError
        setLoading(false)
        setError(error.message)
        setLoading(false)     
      }
    }
  
    useEffect(() => {
      fetchPersons()
    }, [])

    return { persons, error, loading, createPerson, updatePerson }
}