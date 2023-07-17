import {FaTimes} from 'react-icons/fa'
import Icon from './Icon'
import { Funcao, MembroData } from './Constants'
import SelectMembers from './SelectMembers'

export default function MonthCalendarCellOptions(props: any) {
    const funcoes: Funcao[] = props.funcoes
    const membros: MembroData[] = props.membros
    const close = () => {
        props.setCellState(false)
    }

    if (props.cellState) {
        return (
            <div id='cell-options' className="">
                <div className='bg-inherit'>
                {props.cellData.evento.dia}
                </div>
                <div className='bg-inherit flex flex-col gap-10'>
                    {props.cellData.evento.hora}
                    <div className='bg-inherit'>
                        {props.cellData.evento.membros}
                    </div>
                </div>
                <div className='bg-inherit flex flex-row justify-between gap-5'>
                    <button onClick={close}>
                        <Icon classes={'text-red-500 hover:text-windowColor'} type={<FaTimes style={{display: 'inline'}} size={28}/>}/>
                    </button>

                    <SelectMembers funcoes={funcoes} membros={membros} />
                    <button className='bg-accentColor rounded-sm p-2 text-white font-medium hover:bg-windowColor'>Adicionar evento</button>
                </div>
            </div>        
        )    
    }  
}