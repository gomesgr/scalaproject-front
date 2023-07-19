import 'moment/dist/locale/pt-br'
import {useEffect, useState} from 'react'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import {RiShutDownLine} from 'react-icons/ri'
import moment from 'moment'
import MonthCalendarCell from './MonthCalendarCell'
import Icon from './Icon'
import { Culto, CultoBool } from './Constants'

moment.locale('pt-br')
function CalendarComponent(props: any) {
    const [calendar, setCalendar] = useState(moment())
    const weekDays: string[] = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const [cultoDay, setCultoDay] = useState('')
    const cultos: Culto[] = props.cultos

    const temCulto =(day: number, month: number): CultoBool => {
        for (let culto of cultos) {
            let data = new Date(culto.data)
            if (data.getDate() == day && data.getMonth() == month)
                return {culto: culto, existe: true}
        }
        return {culto: null, existe: false}
    }

    const mapWeek = (week: string[], index: number) => {
        return week.map((day) => {
            var cultoBool = temCulto(+day, calendar.month())
            return (cultoBool.existe
                ? (
                <MonthCalendarCell
                    day={day}
                    index={index}
                    moment={calendar}
                    setCellOptionsState={props.setCellState}
                    setCellOptionsData={props.setCellData}
                    culto={cultoBool.culto} />
                )
                : (
                <MonthCalendarCell
                    day={day}
                    index={index}
                    moment={calendar}
                    setCellOptionsState={props.setCellState}
                    setCellOptionsData={props.setCellData} />
                )
        )})
    }

    const drawCalendar = () => {
        return getCalendar(calendar.month(), calendar.year())!.map((week, index) => (
                <tr>
                {mapWeek(week, index)}
                </tr>))
    }

    return <> 
        {/* 
          *  Div que contém o Calendário
          *
        */}
        <div id='calendar'>
            <div>
                <div>
                    <button className='hover:text-accentColor' onClick={() => setCalendar(calendar.subtract(1, 'month').clone())}>
                        <Icon type={<AiOutlineArrowLeft size={24} style={{ display: 'inline' }} />} />
                    </button>
                    
                    <div className='bg-inherit'>
                        <input type='text' className='w-36 text-center bg-inherit border border-slate-200 rounded-sm' name='date'
                            onFocus={(e) => e.target.type = 'date'}
                            onBlur={(e) => { e.target.type = 'text'; e.target.value = `${calendar.month()}`}}></input>
                    </div>

                    <button className='hover:text-accentColor' onClick={() => setCalendar(calendar.add(1, 'month').clone())}>
                        <Icon type={<AiOutlineArrowRight size={24} style={{ display: 'inline' }} />} />
                    </button>
                </div>
                <button
                    className='font-medium hover:bg-slate-300 text-white rounded-md bg-accentColor px-5 py-1 text-[20px]'>
                    Usuário
                </button>
                <button className='hover:text-accentColor'>
                    <Icon type={<RiShutDownLine size={ 24 } />} />
                </button>
            </div>
        <table>
            <tr className='text-black bg-inherit text-xl h-10'>
                {weekDays.map(weekDay => <th>{weekDay}</th>)}
            </tr>
                {drawCalendar()}
        </table>
        </div>
        {props.children}
    </>
    
}

function getCalendar(month: number, year: number) {
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