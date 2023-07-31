import 'moment/dist/locale/pt-br'
import { useState } from 'react'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import { RiShutDownLine } from 'react-icons/ri'
import moment from 'moment'
import MonthCalendarCell from './MonthCalendarCell'
import Icon from './Icon'
import { Culto, CultosBool, GoogleProfile } from './Constants'
import { useNavigate } from 'react-router-dom'
import { googleLogout } from '@react-oauth/google'

function CalendarComponent(props: any) {
    const weekDays: string[] = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
    const cultos: Culto[] = props.cultos
    const navigate = useNavigate()

    const perfil: GoogleProfile = JSON.parse(localStorage.getItem('perfil')!)

    const mapWeek = (
        week: string[],
        index: number,
        month: number,
        year: number
    ) => {
        const cultosDoMes: Culto[] = cultos.filter(
            (culto) => new Date(culto.data).getMonth() === month
        )
        return week.map((day) => (
            <MonthCalendarCell
                day={day}
                index={index}
                month={month}
                year={year}
                calendar={props.calendar}
                setCellOptionsState={props.setCellState}
                setCellOptionsData={props.setCellData}
                cultos={cultosDoMes}
            />
        ))
    }

    const drawCalendar = () => {
        return getCalendar(props.calendar.month(), props.calendar.year())!.map(
            (week, index) => (
                <tr>
                    {mapWeek(
                        week,
                        index,
                        props.calendar.month(),
                        props.calendar.year()
                    )}
                </tr>
            )
        )
    }

    const logOut = () => {
        googleLogout()
        props.setPerfil(null)
        props.setUsuario(null)
        props.setAuth(false)
        localStorage.clear()
        navigate('/scalaproject-front')
    }

    return (
        <>
            {/*
             *  Div que contém o Calendário
             *
             */}
            <div id='calendar'>
                <div>
                    <button
                        id='btnAction'
                        onClick={() =>
                            props.setCalendar(
                                props.calendar.subtract(1, 'month').clone()
                            )
                        }
                    >
                        <Icon
                            type={
                                <AiOutlineArrowLeft
                                    size={24}
                                    style={{ display: 'block' }}
                                />
                            }
                        />
                    </button>

                    <div className='text-center my-auto font-medium capitalize md:w-24'>
                        {props.calendar.format('MMMM [de] yyyy')}
                    </div>

                    <button
                        id='btnAction'
                        onClick={() =>
                            props.setCalendar(
                                props.calendar.add(1, 'month').clone()
                            )
                        }
                    >
                        <Icon
                            type={
                                <AiOutlineArrowRight
                                    size={24}
                                    style={{ display: 'block' }}
                                />
                            }
                        />
                    </button>

                    <button id='btnAction' onClick={() => logOut()}>
                        <Icon
                            type={
                                <RiShutDownLine
                                    size={24}
                                    style={{ display: 'block' }}
                                />
                            }
                        />
                    </button>

                    <div className='flex flex-row gap-x-4 items-center'>
                        <img
                            className='rounded-full ring ring-primary'
                            width={30}
                            src={perfil.picture}
                        />
                        <p className='ring ring-primary rounded-full p-1'>
                            {perfil.given_name}
                        </p>
                    </div>
                </div>
                <table>
                    <tr className='bg-inherit text-xl h-10'>
                        {weekDays.map((weekDay) => (
                            <th>{weekDay}</th>
                        ))}
                    </tr>
                    {drawCalendar()}
                </table>
            </div>
            {props.children}
        </>
    )
}

function getCalendar(month: number, year: number) {
    var calendar = []

    const startDate = moment([year, month])
        .clone()
        .startOf('month')
        .startOf('week')

    const endDate = moment([year, month]).clone().endOf('month')

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
