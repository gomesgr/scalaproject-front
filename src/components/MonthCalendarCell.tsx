import 'moment/dist/locale/pt-br'
import {useState} from 'react'
import moment from 'moment'

moment.locale('pt-br')

function MonthCalendarCell(props: any) {
    const day: number = +props.day
    const [cell, setCell] = useState(day)
    return (
       <div className='cursor-pointer'>
            {isExtraDay(props.index, day) ? 
            (<span className='text-unselectedText'>{cell}</span>) :
            (<span>{cell}</span>)
        }
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