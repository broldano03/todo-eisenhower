import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Pag404 from './404.jsx'
import Template from './Template.jsx'
import TodoBasic from './TodoBasic.jsx'

createRoot(document.getElementById('root')).render(
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Template />}>
                <Route index element={<App />} />
                <Route path='/todobasic' element={<TodoBasic/>} />
                <Route path='*' element={<Pag404/>} />
            </Route>
        </Routes>
    </BrowserRouter>
    </>
)
