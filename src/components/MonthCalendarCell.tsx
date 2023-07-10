import 'moment/dist/locale/pt-br'
import {useState} from 'react'
import moment from 'moment'

moment.locale('pt-br')

function MonthCalendarCell(props: any) {
    const [cell, setCell] = useState(moment())
    const cellId = props.fullDate.format('DDMMYYYY')

    return (
        <>
            <div id={cellId} className='w-full h-full ring-1 ring-unselectedText'>
                {props.fullDate.date()}
            </div>  
        </>
    )
}

export default MonthCalendarCell