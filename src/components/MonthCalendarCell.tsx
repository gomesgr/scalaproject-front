import 'moment/dist/locale/pt-br'
import {useState} from 'react'
import moment from 'moment'

moment.locale('pt-br')

function MonthCalendarCell(props: any) {
    const day: number = +props.day  
    const showCellOptions = (options: Function, toggler: Function) => {
        toggler(true) 
        options(cell)
    }
    const [cell, setCell] = useState({evento: {dia: day, hora: '19h', membros:[1,2,3]}})
    return (
       <div onClick={()=>showCellOptions(props.setCellOptionsData, props.setCellOptionsState)} className='cursor-pointer h-20'>
            {isExtraDay(props.index, day) ? 
            (<span className='text-unselectedText'>{day}</span>) :
          (<span>{day}</span>)
        }
            <div className='flex flex-col'>
                <div>
                    {cell.evento.dia}
                </div>
                <div>
                    {cell.evento.hora}
                </div>
        </div>
       </div>
    )
}

function isExtraDay(week:number, date:number) {
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