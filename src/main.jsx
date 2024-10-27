import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Pag404 from './404.jsx'
import Template from './Template.jsx'
import { MenuProvider } from './context/MenuContext'
import Login from './components/usuarios/Login.jsx'

createRoot(document.getElementById('root')).render(
    <>
    <BrowserRouter>
        <MenuProvider>
            <Routes>
                <Route path='/' element={<Template />}>
                    <Route index element={<App />} />
                </Route>
                <Route path='/login' element={<Login/>} />
                <Route path='*' element={<Pag404/>} />
            </Routes>
        </MenuProvider>
    </BrowserRouter>
    </>
)
