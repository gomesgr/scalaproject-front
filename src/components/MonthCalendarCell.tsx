import 'moment/dist/locale/pt-br'
import moment from 'moment'
import { Culto, CultosBool, Membro } from './Constants'
import { useEffect, useState } from 'react'

moment.locale('pt-br')

function MonthCalendarCell(props: any) {
    const day: number = props.day
    const month: number = props.calendar.month()
    const year: number = 2023
    const cultos: Culto[] = props.cultos

    const showCellOptions = (options: Function, toggler: Function) => {
        toggler(true)
        if (cultos.length > 0) {
            const newCell = { cultos: cultos.filter(culto => new Date(culto.data).getDate() == day), dia: day }
            options(newCell)
        } else {
            options(null)
        }
    }

    const isExtraDay = (week: number, date: number) => {
        if (week === 0 && date > 10) {
            
            return true
        } else if (week === 5 && date < 10) {
            
            return true
        } else if (week === 4 && date < 10) {
            
            return true
        } else {
            return false
        }
    }
    
    if (isExtraDay(props.index, day)) {
        return (
            <td id='disabled-cell'>
            </td>
        )
    }

    const a = () => {
        return cultos.map(culto => {

            return (new Date(culto.data).getDate() == day) 
                ? <div id='culto'>
                    {culto.nome}
                </div>
                : <div></div>
        })
    }
    
    return (
        <td id='cell' onClick={() => showCellOptions(props.setCellOptionsData, props.setCellOptionsState)}>
            <div>
                {day}
                {a()}
            </div>
        </td>
    )
    
}

function isToday(day: number, month: number, year: number): boolean {
    return ((day == moment().date()) &&
        (month == moment().month()) && 
            (year == moment().year()))
}



export default MonthCalendarCell