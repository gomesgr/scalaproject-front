import {BsCalendarWeek, BsFillPeopleFill, BsWrenchAdjustableCircle} from 'react-icons/bs'
import {LuChurch} from 'react-icons/lu'
import Icon from './Icon'

export default function SideBar() {
    return (
        <div id='sidebar'>
            <div>
                <span className=''><Icon type={<BsCalendarWeek />} /></span>
                <span className=''>Calendário</span>
            </div>
            <div className='h-10 w-auto px-10'>
                <span><Icon type={<LuChurch />} /></span>
                <span>Cultos</span>
            </div>
            <div className='h-10 w-auto px-10'>
                <span><Icon type={<BsFillPeopleFill />} /></span>
                <span>Membros</span>
            </div>
            <div className='h-10 w-auto px-10'>
                <span><Icon type={<BsWrenchAdjustableCircle />} /></span>
                <span>Funções</span>
            </div>
        </div>
    )
}