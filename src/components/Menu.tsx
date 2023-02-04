interface MenuProps {
    children: React.ReactNode
    title: string
    menu: { show: boolean, x: number, y: number, i: number}
    onClose: () => void
    updatePerson: Function
}

export function Menu({ children, menu, title, onClose, updatePerson }: MenuProps) {
    console.log(menu)
    return(
        <>
            <div 
                className="fixed bg-black/0 top-0 right-0 left-0 bottom-0"
                onClick={onClose}
            />
            <div
                className={`w-[100px] h-[25px] bg-red-700 text-white rounded flex flex-row justify-center align-center`}
                style={{ position: "absolute", top: `${menu.y}px`, left: `${menu.x}px`, cursor: "pointer" }}
                onClick={() => {
                    onClose()
                    updatePerson(0, 'show', menu.i)
                }}
            >
                <span className="text-sm text-center mb-2">{ title }</span>

                { children }
            </div>
        </>
    )
}