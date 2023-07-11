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

function CalendarComponent(props: any) {
    const [calendar, setCalendar] = useState(moment(Date()))
    const monthToday = moment(calendar).month()
    const weekDays: string[] = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

    return <> 
        <div id='calendar' className='bg-amber-50 p-5'>
          <table className='table-fixed border p-2 border-black border-separate w-full'>
            <tr className=''>
                <th colSpan={7} className='m-auto'>
                    <div className='w-full flex flex-row justify-end gap-10'>
                        <div><Icon type={<AiOutlineArrowLeft style={{display: 'inline'}}/>} /></div>
                        <div>{calendar.format('LL')}</div>
                        <div><Icon type={<AiOutlineArrowRight style={{display: 'inline'}} />} /></div>
                    </div>
                </th>
            </tr>
            <tr className='text-black font-bold text-xl'>
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
                            <MonthCalendarCell day={day} index={index} 
                            setCellOptionsState={props.setCellState}
                            setCellOptionsData={props.setCellData}/>
                        </td>
            ))}
                </tr>
            ))}
          </table>
        </div>
        {props.children}
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