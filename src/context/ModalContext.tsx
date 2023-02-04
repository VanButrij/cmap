import { createContext, useState } from "react"

interface IModalContext {
    menu: object
    modal: boolean
    openModal: () => void
    openMenu: (x: number, y: number, i: number) => void
    closeModal: () => void
    closeMenu: () => void
}

export const ModalContext = createContext({
    menu: { show: false, x: 0, y: 0, i: 0 },
    modal: false,
    openModal: () => {},
    closeModal: () => {},
    openMenu: (x: number, y: number, i: number) => {},
    closeMenu: () => {}
})

export const ModalState = ({ children }: {children: React.ReactNode}) => {
    const [ modal, setModal ] = useState(false)
    const [ menu, setMenu ] = useState({ show: false, x: 0, y: 0, i: 0 })

    const openModal = () => setModal(true)
    const closeModal = () => setModal(false)

    const openMenu = (x: number, y: number, i: number) => setMenu({ show: true, x: x, y: y, i: i })
    const closeMenu = () => setMenu({ show: false, x: 0, y: 0, i: 0 })

    return (
        <ModalContext.Provider value={{ menu, modal, openModal, closeModal, openMenu, closeMenu }}>
            { children }
        </ModalContext.Provider>
    )
}