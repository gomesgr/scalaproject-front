import 'moment/dist/locale/pt-br'
import {useEffect, useState} from 'react'
import moment from 'moment'
import { Culto } from './Constants'

moment.locale('pt-br')

function MonthCalendarCell(props: any) {
    const day: number = props.day
    const month: number = props.moment.month()
    const year: number = props.moment.year()
    const culto: Culto = props.culto

    const showCellOptions = (options: Function, toggler: Function) => {
        toggler(true) 
        options(cell)
    }

    const cellDataBuilder = () => {
        return <>
            {isExtraDay(props.index, day)
                ? (<span className='text-unselectedText'>{day}</span>)
                : (isToday(day, month, year)
                    ? <span className='text-accentColor'>{day}</span>
                    : <span>{day}</span>)
            }
            <div>
                {culto ? culto.nome : ''}
            </div>
        </>
    }

    const [cell, _setCell] = useState({ evento: { dia: day, hora: '19h', membros: [1, 2, 3] } })
    if (culto) {
        return (
            <td id='cell' className='bg-accentColor text-white' onClick={() => showCellOptions(props.setCellOptionsData, props.setCellOptionsState)} >
                <div className='bg-inherit'>
                {cellDataBuilder()}
            </div>
            </td>
        )
    }
    return (
        <td id='cell' onClick={() => showCellOptions(props.setCellOptionsData, props.setCellOptionsState)}>
        <div className='bg-inherit w-full h-full'>
            {cellDataBuilder()}
            </div>
        </td>
    )
}

function isToday(day: number, month: number, year: number): boolean {
    return ((day == moment().date()) &&
        (month == moment().month()) && 
            (year == moment().year()))
}

function isExtraDay(week:number, date:number): boolean {
    if (week === 0 && date > 10) {
        return true;
    } else if (week === 5 && date < 10) {
        return true;
    } else if (week === 4 && date < 10) {
        return true;
    } else {
        return false;
    }
}

export default MonthCalendarCell