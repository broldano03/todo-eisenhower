import { createContext, useContext, useState } from "react"

const MenuContext = createContext()

export const MenuProvider = ({children}) => {
    const [selectedComponent, setSelectedComponent] = useState('')

    return (
        <MenuContext.Provider value={{ selectedComponent, setSelectedComponent }}>
            {children}
        </MenuContext.Provider>
    )
}

export const useMenuContext = () => useContext(MenuContext)