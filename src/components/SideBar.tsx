import {BsCalendarWeek, BsFillPeopleFill, BsWrenchAdjustableCircle} from 'react-icons/bs'
import { LuChurch } from 'react-icons/lu'
import { NavLink } from "react-router-dom";
import Icon from './Icon'
import Logo from './Logo'

export default function SideBar() {
    return (<>
        <div id='sidebar'>
            <NavLink to='/' className='mx-auto'>
                <Icon type={<Logo />} />
            </NavLink>
            <NavLink to='/calendario'>
                <Icon type={<BsCalendarWeek />} />
                Calendário
            </NavLink>
            <NavLink to='/cultos'>
                <Icon type={<LuChurch />} />
                Cultos
            </NavLink>
            <NavLink to='/membros'>
                <span><Icon type={<BsFillPeopleFill />} /></span>
                <span>Membros</span>
            </NavLink>
            <NavLink to='/funcoes'>
                <span><Icon type={<BsWrenchAdjustableCircle />} /></span>
                <span>Funções</span>
            </NavLink>
        </div>
        </>
    )
}