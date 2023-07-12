import 'moment/dist/locale/pt-br'
import {useState} from 'react'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import {RiShutDownLine} from 'react-icons/ri'
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

    const drawCalendar = (monthToDraw: number) => {
         return getCalendar(monthToDraw)!.map((week, index) => (
                <tr>
                    {week.map(day => (
                        <td className='border border-slate-500'>
                            <MonthCalendarCell day={day} index={index} 
                            setCellOptionsState={props.setCellState}
                            setCellOptionsData={props.setCellData}/>
                        </td>))}
                </tr>))
    }

    return <> 
        <div id='calendar' className='m-auto h-full flex flex-col items-end justify-between'>
            <div className='flex items-center justify-around p-1 gap-5 px-10'>
                <button className='font-black hover:bg-windowColor text-white rounded-md bg-accentColor px-5 text-[24px]'>
                    Usuário
                </button>
                <button className='hover:text-windowColor'>
                    <Icon type={<RiShutDownLine size={ 24 } />} />
                </button>
            </div>
          <table className='table-fixed border p-2 border-slate-500 border-separate h-auto w-full flex-1'>
            <tr>
                <th colSpan={7} className='m-auto'>
                    <div className='w-full flex flex-row justify-end gap-10 bg-inherit'>
                        <button><Icon type={<AiOutlineArrowLeft style={{display: 'inline'}}/>} /></button>
                        <div className='bg-inherit'>{calendar.format('LL')}</div>
                        <button><Icon type={<AiOutlineArrowRight style={{display: 'inline'}} />} /></button>
                    </div>
                </th>
            </tr>
            <tr className='text-black bg-inherit font-bold text-xl'>
                {weekDays.map(weekDay => <th>{weekDay}</th>)}
            </tr>
                {drawCalendar(monthToday)}
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