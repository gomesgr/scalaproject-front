import MonthCalendarCellOptions from '../MonthCalendarCellOptions'
import CalendarComponent from './../Calendar'
import {useState} from 'react'

function CalendarPage() {
    const [cellState, setCellState] = useState(false)
    const [cellData, setCellData] = useState({})
    return (
        <>      
            <CalendarComponent setCellState={setCellState} setCellData={setCellData}>
                <MonthCalendarCellOptions 
                    cellState={cellState} 
                    cellData={cellData}
                    setCellState={setCellState} />
            </CalendarComponent>
            
        </>
    )
}

export default CalendarPage