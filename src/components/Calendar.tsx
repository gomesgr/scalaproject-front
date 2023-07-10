import 'moment/dist/locale/pt-br'
import {useState} from 'react'
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai'
import moment from 'moment'
import MonthCalendarCell from './MonthCalendarCell'
const weekDayNames = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta' ,'Sábado']
const today = new Date()

moment.locale('pt-br')
const now = moment(today).locale('pt-br').format('LL')

function CalendarComponent() {
    const [day, setDay] = useState(moment(today))
    return (
        <>
            <div className=" bg-windowColor py-5 w-full">
                <div className='grid grid-flow-col gap-10 justify-evenly'>
                    <div onClick={() => setDay(moment(day.subtract(1, 'months')))} 
                        className='grid grid-flow-col w-max gap-10 bg-accentColor items-center rounded-sm font-semibold text-white'>
                    <span><AiOutlineArrowLeft /></span>
                    <h2 className='w-64 text-center'>{day.format('LL')}</h2>
                    <span><AiOutlineArrowRight /></span>
                    </div>
                </div>
                <table className='grid grid-flow-col justify-stretch w-full'>
                {weekDayNames.map((v, _) => {
                            return (
                                <div className='items-center bg-blue-200 '>
                                    <div className="justify-center grid grid-flow-row 2-full h-10 items-end ">
                                        <tr>
                                            <th>
                                                {v}
                                            </th>
                                        </tr>
                                    </div>
                                    <div className='bg-blue-100 justify-items-center w-auto grid grid-flow-row h-full'>
                                    {getCalendar(day).get(v)!.map((date, _) => {
                                        return (
                                            <MonthCalendarCell fullDate={date}/>                                            
                                        )
                                    })
                                    }
                                    </div>
                                </div>
                            )
                        })
                }
                </table>
            </div>
        </>
    )
}

function getDayOfTheWeek(dia: number) {
    return weekDayNames[dia]
}

function mapWeekDayToDay(monthDays: Date[]): Map<string, moment.Moment[]> {
    let daysMap: Map<string, moment.Moment[]> = new Map()
    
    monthDays.forEach((date) => {
        let weekDay = date.getDay()
        let weekDayName: string = getDayOfTheWeek(weekDay)
        let daysArray = daysMap.get(weekDayName)

        if (daysArray != undefined) {
            daysMap.set(weekDayName, [...daysArray, moment(date)])
        } else {
            let arr: moment.Moment[] = new Array()
            arr.push(moment(date))
            daysMap.set(weekDayName, arr)
        }
    })

    return daysMap
}

function getCalendar(momentArg: moment.Moment) {
    let days = getDaysInAMonth(momentArg.month(), momentArg.year())
    let daysMapped = mapWeekDayToDay(days)
    let year = momentArg.year()
    
    let sevenBeforeDaysMonth = momentArg.month() - 1;
    if (sevenBeforeDaysMonth == -1) {
        sevenBeforeDaysMonth = 12
        year -= 1
    }
    let daysBeforeMonthMapped = getDaysInAMonth(sevenBeforeDaysMonth, year)

    let sevenAfterDaysMonth = momentArg.month() + 1;
    if (sevenAfterDaysMonth == 13) {
        sevenAfterDaysMonth = 1
        year += 1
    }
    let daysAfterMonthMapped = getDaysInAMonth(sevenAfterDaysMonth, year)

    let momentDayOne = Array.from(daysMapped.values()).shift()
    let momentLastDay = Array.from(daysMapped.values()).pop()

    return daysMapped
}

function getDaysInAMonth(month: number, year: number): Date[] {
    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }
    return days;
}
export default CalendarComponent