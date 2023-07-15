import { FuncaoData } from "./components/Connection"
import Container from "./components/Container"
import SideBar from "./components/SideBar"
import CalendarPage from "./components/pages/CalendarPage"
import { useEffect, useState } from "react"

const urlFuncao:string = ('http://localhost:8080/api/funcao')

function App() {
    const [state, setState] = useState({})
    /* TODO
     *
     * Chamada recursiva infinita
    */
    useEffect(() => {
        const dataFetch = async () => {
            const funcao: FuncaoData = await (
                (await fetch(urlFuncao)).json())
            setState(funcao)
        }

        dataFetch()
    })


    return (
        <Container>
            <SideBar />
            <CalendarPage funcao={state} />
        </Container>

    )
}

export default App

