import {BsCalendarWeek, BsFillPeopleFill, BsWrenchAdjustableCircle} from 'react-icons/bs'
import {LuChurch} from 'react-icons/lu'
import Icon from './Icon'
import Logo from './Logo'

export default function SideBar() {
    return (<>
        <div id='sidebar'>
            <div className=''>
                <Icon type={<Logo />} />
            </div>
            <div>
                <span className=''><Icon type={<BsCalendarWeek />} /></span>
                <span className=''>Calendário</span>
            </div>
            <div >
                <span><Icon type={<LuChurch />} /></span>
                <span>Cultos</span>
            </div>
            <div >
                <span><Icon type={<BsFillPeopleFill />} /></span>
                <span>Membros</span>
            </div>
            <div>
                <span><Icon type={<BsWrenchAdjustableCircle />} /></span>
                <span>Funções</span>
            </div>
        </div>
        </>
    )
}