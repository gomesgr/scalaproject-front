import 'moment/dist/locale/pt-br'
import {useState} from 'react'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import {RiShutDownLine} from 'react-icons/ri'
import moment from 'moment'
import MonthCalendarCell from './MonthCalendarCell'
import Icon from './Icon'
import { Culto, CultoBool, GoogleProfile } from './Constants'
import { useNavigate } from "react-router-dom";
import { googleLogout } from '@react-oauth/google';

moment.locale('pt-br')
function CalendarComponent(props: any) {
    const [calendar, setCalendar] = useState(moment())
    const weekDays: string[] = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
    const cultos: Culto[] = props.cultos
    const navigate = useNavigate()

    const perfil: GoogleProfile = JSON.parse(localStorage.getItem('perfil')!)

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
            const cultoBool = temCulto(+day, calendar.month())
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

    const logOut = () => {
        googleLogout()
        props.setPerfil(null)
        props.setUsuario(null)
        props.setAuth(false)
        localStorage.clear()
        navigate('/')
    }

    return <> 
        {/* 
          *  Div que contém o Calendário
          *
        */}
        <div id='calendar'>
            <div>
                <div>
                    <button onClick={() => setCalendar(calendar.subtract(1, 'month').clone())}>
                        <Icon type={<AiOutlineArrowLeft size={24} style={{ display: 'block' }} />} />
                    </button>
                    
                    <div className='bg-inherit my-auto font-medium capitalize w-24'>
                        {calendar.format('MMMM [de] yyyy')}
                    </div>

                    <button onClick={() => setCalendar(calendar.add(1, 'month').clone())}>
                        <Icon type={<AiOutlineArrowRight size={24} style={{ display: 'block' }} />} />
                    </button>
                </div>
                <button className='px-5 text-xl w-5/6 h-full'>
                    <div className='flex flex-row gap-x-2 justify-center'>
                        <img className='rounded-full' width={24} src={perfil.picture} />
                        {perfil.given_name}
                    </div>
                </button>
                <button className='h-full' onClick={() => logOut()}>
                    <Icon type={<RiShutDownLine size={24} style={{ display: 'block' }}/>} />
                </button>
            </div>
        <table>
            <tr className='bg-inherit text-xl h-10'>
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