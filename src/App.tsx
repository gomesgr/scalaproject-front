import CalendarPage from "./components/pages/CalendarPage"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginPage from "./components/pages/LoginPage"
import CultoPage from "./components/pages/CultoPage"
import { useState } from "react"
import { GoogleProfile, GoogleUser } from "./components/Constants"


function App() {
    const [usuario, setUsuario] = useState({} as GoogleUser)
    const [perfil, setPerfil] = useState({} as GoogleProfile)
    const [auth, setAuth] = useState(false)

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginPage setUsuario={setUsuario} usuario={usuario} setPerfil={setPerfil} setAuth={setAuth} /> }/>
                <Route path='/calendario' element={<CalendarPage auth={auth} setAuth={setAuth} perfil={perfil} setUsuario={setUsuario} setPerfil={setPerfil} />} />
                <Route path='/cultos' element={<CultoPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App

