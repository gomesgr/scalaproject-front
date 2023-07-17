import Container from "./components/Container"
import SideBar from "./components/SideBar"
import CalendarPage from "./components/pages/CalendarPage"
import { useEffect, useState } from "react"
import axios from 'axios'
import { urlFuncao } from "./components/FuncaoData"


function App() {
    const [funcoes, setFuncoes] = useState({})
    // Chamada de API para funções no MonthCellOptions
    useEffect(() => {
        axios.get(urlFuncao)
            .then(result => {
            setFuncoes(result.data)
        })
        .catch(error => {
            console.error(error)
        })
    }, [])

    return (
        <Container>
            <SideBar />
            <CalendarPage funcoes={funcoes} />
        </Container>

    )
}

export default App

