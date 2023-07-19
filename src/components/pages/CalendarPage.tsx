import MonthCalendarCellOptions from '../MonthCalendarCellOptions'
import CalendarComponent from './../Calendar'
import {useState} from 'react'

function CalendarPage(props: any) {
    const [cellState, setCellState] = useState(false)
    const [cellData, setCellData] = useState({})
    const [cultoDay, setCultoDay] = useState({})

    return (
        <>      
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
                    cultoDay={cultoDay}
                    setCultoDay={setCultoDay} />
            </CalendarComponent>
            
        </>
    )
}

export default CalendarPage