import { Trabalha } from '../Constants'
import Container from '../Container'
import MonthCalendarCellOptions from '../MonthCalendarCellOptions'
import SideBar from '../SideBar'
import CalendarComponent from './../Calendar'
import {useState} from 'react'

export default function CalendarPage(props: any) {
    const [cellState, setCellState] = useState(false)
    const [cellData, setCellData] = useState({})
    const [cultoDay, setCultoDay] = useState({})

    return (
        <>
            <Container>
                <div className='flex flex-row h-screen'>
                    <SideBar />
                    <CalendarComponent
                        setCellState={setCellState}
                        setCellData={setCellData}
                        cultos={props.cultos}>
                        <MonthCalendarCellOptions 
                            cellState={cellState}
                            cellData={cellData}
                            setCellState={setCellState}
                            funcoes={props.funcoes}
                            membros={props.membros}
                            cultos={props.cultos}
                            trabalham={props.trabalham}
                            cultoDay={cultoDay}
                            setCultoDay={setCultoDay} />
                    </CalendarComponent>
                </div>
            </Container>
        </>
    )
}