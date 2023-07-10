import 'moment/dist/locale/pt-br'
import {useState} from 'react'
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai'
import moment from 'moment'
import MonthCalendarCell from './MonthCalendarCell'
import Icon from './Icon'
import './Calendar.module.css'

moment.locale('pt-br')
const year = new Date().getFullYear()
const months = moment.months()

function CalendarComponent() {
    const [calendar, setCalendar] = useState(moment(Date()))
    const monthToday = moment(calendar).month()
    const weekDays: string[] = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

    return <> 
        <div className='bg-windowColor'>
          <table className='table-fixed border p-2 border-black border-separate w-full'>
            <tr className='flex items-center justify-between'>
                <th colSpan={7} className='flex w-auto items-center '>
                    <ul className='flex gap-12'>
                        <li><Icon type={<AiOutlineArrowLeft />} /></li>
                        <li>{calendar.format('MMMM.YYYY')}</li>
                        <li><Icon type={<AiOutlineArrowRight />} /></li>
                    </ul>
                </th>
            </tr>
            <tr className='text-white font-bold text-xl'>
                {weekDays.map(weekDay => (
                    <th>
                        {weekDay}
                    </th>
                ))}
            </tr>
            {getCalendar(monthToday)!.map((week, index) => (
                <tr>
                    {week.map(day => (
                        <td className='border border-slate-700'>
                            <MonthCalendarCell day={day} index={index} />
                        </td>
            ))}
                </tr>
            ))}
          </table>
        </div>
    </>

}

function getCalendar(month: number) {
    var calendar = []

    const startDate = moment([year, month])
        .clone()
        .startOf('month')
        .startOf('week')
    
    const endDate = moment([year, month])
        .clone()
        .endOf('month')

    const day = startDate.clone().subtract(1, 'day')

    while (day.isBefore(endDate, 'day')) {
        calendar.push(
            new Array(7)
                .fill(0)
                .map(() => day.add(1, 'day').clone().format('DD'))
        )
    }
    return calendar
}

export default CalendarComponent