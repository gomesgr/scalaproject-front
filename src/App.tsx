import Container from "./components/Container"
import SideBar from "./components/SideBar"
import CalendarPage from "./components/pages/CalendarPage"
import { useEffect, useState } from "react"
import axios from 'axios'
import { FuncaoData, MembroData, urlFuncao, urlMembro } from "./components/Constants"


function App() {
    const [funcoes, setFuncoes] = useState([{} as FuncaoData])
    const [membros, setMembros] = useState([{} as MembroData])
    // Chamada de API para funções no MonthCellOptions
    useEffect(() => {
        axios.get(urlFuncao)
            .then(result => setFuncoes(result.data))
        .catch(error => console.error(error))

        axios.get(urlMembro)
            .then(result => setMembros(result.data))
        .catch(error => console.error(error))
    }, [])

    return (
        <Container>
            <SideBar />
            <CalendarPage funcoes={funcoes} membros={membros} />
        </Container>

    )
}

export default App

