import CalendarPage from "./components/pages/CalendarPage"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useEffect, useState } from "react"
import axios from 'axios'
import { Culto, Funcao, Membro, urlCulto, urlFuncao, urlMembro } from "./components/Constants"
import LoginPage from "./components/pages/LoginPage"


function App() {
    const [funcoes, setFuncoes] = useState([{} as Funcao])
    const [membros, setMembros] = useState([{} as Membro])
    const [cultos, setCultos] = useState([{} as Culto])
    // Chamada de API para funções no MonthCellOptions
    useEffect(() => {
        axios.get(urlFuncao)
            .then(result => setFuncoes(result.data))
            .catch(error => console.error(error))

        axios.get(urlMembro)
            .then(result => setMembros(result.data))
            .catch(error => console.error(error))
        
        axios.get(urlCulto)
            .then(result => setCultos(result.data))
            .catch(error => console.error(error))
    }, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginPage />}></Route>
                <Route path='calendar' element={<CalendarPage funcoes={funcoes} membros={membros} cultos={cultos} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App

