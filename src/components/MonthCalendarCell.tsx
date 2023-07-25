import 'moment/dist/locale/pt-br'
import moment from 'moment'
import { Culto, Membro } from './Constants'
import { useEffect, useState } from 'react'

moment.locale('pt-br')

function MonthCalendarCell(props: any) {
    const moment: moment.Moment = props.moment.clone()
    const day: number = props.day
    const culto: Culto = props.culto


    console.log(moment.month())
    const [extra, setExtra] = useState(true)

    const showCellOptions = (options: Function, toggler: Function) => {
        toggler(true) 
        if (culto) {
            const newCell = { dia: day, culto: culto }
            options(newCell)
        } else {
            options(cell)
        }
    }

    const isExtraDay = (week:number, date:number) => {
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

    const cellDataBuilder = () => {

        const temCulto = (): string => {
            if (culto) {
                return culto.nome
            }
            return ''
        }

        return <>
            <span>{day}</span>
            <span>{temCulto()}</span>
        </>
    }

    const cell = ({ dia: day, hora: 0, membros: [] as Membro[], culto: {} as Culto })
    
    if (isExtraDay(props.index, day)) {
        return (
            <td id='disabled-cell'>
            </td>
        )
    }

    if (culto) {
        return (
            <td id='cell' className='bg-primary text-secondary' onClick={() => showCellOptions(props.setCellOptionsData, props.setCellOptionsState)} >
                <div >
                    {cellDataBuilder()}
                </div>
            </td>
        )
    }
    return (
        <td id='cell' onClick={() => showCellOptions(props.setCellOptionsData, props.setCellOptionsState)}>
            <div >
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



export default MonthCalendarCell