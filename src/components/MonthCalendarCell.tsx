import 'moment/dist/locale/pt-br'
import {useState} from 'react'
import moment from 'moment'
import './MonthCalendarCell.module.css'

moment.locale('pt-br')

function MonthCalendarCell(props: any) {
    const day: number = +props.day  
    const showCellOptions = (options: Function, toggler: Function) => {
        toggler(true) 
        options(cell)
    }
    const [cell, setCell] = useState({evento: {dia: day, hora: '19h', membros:[1,2,3]}})
    return (
        <div id='cell' onClick={() => showCellOptions(props.setCellOptionsData, props.setCellOptionsState)}
            className='cursor-pointer h-20 bg-inherit'>
            {/* Verifica se o dia é extra, e se for, verifica se é hoje */}
            {isExtraDay(props.index, day)
                ? (<span className='text-unselectedText'>{day}</span>)
                : (isToday(day)
                    ? <span className='text-accentColor'>{day}</span>
                    : <span>{day}</span>)
        }
            <div className='flex flex-col bg-inherit'>
                <div className='bg-inherit'>
                    {cell.evento.dia}
                </div>
                <div className='bg-inherit'>
                    {cell.evento.hora}
                </div>
        </div>
       </div>
    )
}

function isToday(day: number): boolean {
    return day == new Date().getDate()
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