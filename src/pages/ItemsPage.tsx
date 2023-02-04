import { useContext } from 'react'
import { CreatePerson } from '../components/CreatePerson'
import { Header } from "./table/Header"
import { Row } from "./table/Row"
import { Modal } from '../components/Modal'
import { ModalContext } from '../context/ModalContext'
import { IPerson } from '../models'
import { Error } from '../components/Error';
import { Loader } from '../components/Loader';
import { usePersons } from '../hooks/persons'
import { Menu } from '../components/Menu'

export function ItemsPage() {
    const { loading, error, persons, createPerson, updatePerson } = usePersons()
    const { menu, modal, openModal, closeModal, openMenu, closeMenu } = useContext(ModalContext)

    return (
        <div className="w-[100vw] h-[90vh]"
            style={{ border: "1", overflow: "auto" }}
        >
            {loading && <Loader />}
            {error && <Error error={error} />}
            <table
                style={{ border: "1", overflow: "hidden" }}
            >
                <thead className="border-b">
                    <Header />
                </thead>
                <tbody>
                    {
                        persons.map((person, i) => person.full_name.length > 0
                            && <Row person={person} key={person.id} i={i} updatePerson={updatePerson}
                                openMenu={openMenu} closeMenu={closeMenu} />)
                    }
                </tbody>
            </table>
            {modal && <Modal title="Заведите новую карточку" onClose={closeModal}>
                <CreatePerson maxId={(persons.length + 1).toString()} createPerson={createPerson} onClose={closeModal} />
            </Modal>}
            {menu.show && <Menu title="Удалить" menu={menu} onClose={closeMenu} updatePerson={updatePerson}> </Menu>}
            {!modal && <button
                className="fixed bottom-5 right-5 rounded-full text-white text-2xl px-4 py-2"
                onClick={openModal}
            >
                <svg 
                    className="h-12 w-12 text-gray-500" width="24" height="24" viewBox="0 0 24 24" 
                    strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
                    <path stroke="none" d="M0 0h24v24H0z" />  
                    <circle cx="12" cy="12" r="9" />  
                    <line x1="9" y1="12" x2="15" y2="12" />  
                    <line x1="12" y1="9" x2="12" y2="15" />
                </svg>
            </button>}
        </div>
    )
}