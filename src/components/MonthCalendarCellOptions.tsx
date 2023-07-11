import {FaTimes} from 'react-icons/fa'
import Icon from './Icon'
export default function MonthCalendarCellOptions(props: any) {
    const close = () => {
        props.setCellState(false)
    }

    if (props.cellState) {
        return (
            <div className="absolute h-3/6 w-3/6 p-10 bg-slate-100 mx-auto left-0 right-0 top-40 flex flex-row">
                <div className=' flex-1 items-center'>
                {props.cellData.evento.dia}
                </div>
                <div className='flex-1'>
                    {props.cellData.evento.hora}
                    <div>
                        {props.cellData.evento.membros}
                    </div>
                </div>
                <div className='flex-initial'>
                    <button onClick={close} className='hover:bg-amber-300'>
                        <Icon classes={'text-red-500'} type={<FaTimes style={{display: 'inline'}} size={28}/>}/>
                    </button>
                </div>
                {/* {props.cellData} */}
            </div>        
        )    
    }  
}