import axios from 'axios'
import { urlFuncao, urlMembro, urlCulto, urlTrabalha, Culto, Funcao, Membro, Trabalha, GoogleUser, GoogleProfile } from '../Constants'
import Container from '../Container'
import MonthCalendarCellOptions from '../MonthCalendarCellOptions'
import SideBar from '../SideBar'
import CalendarComponent from './../Calendar'
import {useEffect, useState} from 'react'
import { Navigate } from 'react-router-dom'
import moment from 'moment'

moment.locale('pt-br')

export default function CalendarPage(props: any) {
    const [cellState, setCellState] = useState(false)
    const [cellData, setCellData] = useState([])
    const [funcoes, setFuncoes] = useState([{} as Funcao])
    const [membros, setMembros] = useState([{} as Membro])
    const [cultos, setCultos] = useState([{} as Culto])
    const [trabalham, setTrabalham] = useState([{} as Trabalha])
    const [calendar, setCalendar] = useState(moment())

    if (!localStorage.getItem('perfil')) {
        return <Navigate replace to='/' />
    }

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
        <>
            <Container>
                <div className='flex flex-row h-screen'>
                    <SideBar />
                    <CalendarComponent
                        setCellState={setCellState}
                        setCellData={setCellData}
                        cultos={cultos}
                        setPerfil={props.setPerfil}
                        setUsuario={props.setUsuario}
                        perfil={props.perfil}
                        setAuth={props.setAuth}
                        calendar={calendar}
                        setCalendar={setCalendar}>
                        <MonthCalendarCellOptions 
                            cellState={cellState}
                            cellData={cellData}
                            setCellState={setCellState}
                            funcoes={funcoes}
                            membros={membros}
                            trabalham={trabalham as Trabalha[]}
                            setTrabalham={setTrabalham}
                            calendar={calendar} />
                    </CalendarComponent>
                </div>
            </Container>
        </>
    )
}