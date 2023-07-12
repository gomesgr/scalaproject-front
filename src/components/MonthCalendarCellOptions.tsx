import {FaTimes} from 'react-icons/fa'
import Icon from './Icon'
export default function MonthCalendarCellOptions(props: any) {
    const close = () => {
        props.setCellState(false)
    }

    if (props.cellState) {
        return (
            <div className="absolute h-3/6 w-3/6 p-10 border-2 border-slate-500
                bg-slate-300 mx-auto left-0 right-0 top-40 flex flex-row shadow-md">
                <div className=' flex-1 items-center bg-inherit'>
                {props.cellData.evento.dia}
                </div>
                <div className='flex-1 bg-inherit'>
                    {props.cellData.evento.hora}
                    <div className='bg-inherit'>
                        {props.cellData.evento.membros}
                    </div>
                </div>
                <div className='flex-initial bg-inherit'>
                    <button onClick={close}>
                        <Icon classes={'text-red-500 hover:text-windowColor'} type={<FaTimes style={{display: 'inline'}} size={28}/>}/>
                    </button>
                </div>
                {/* {props.cellData} */}
            </div>        
        )    
    }  
}