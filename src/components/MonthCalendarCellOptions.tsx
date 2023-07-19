import {FaTimes} from 'react-icons/fa'
import Icon from './Icon'
import { Funcao, Membro } from './Constants'
import SelectMembers from './SelectMembers'

export default function MonthCalendarCellOptions(props: any) {
    const funcoes: Funcao[] = props.funcoes
    const membros: Membro[] = props.membros
    const close = () => {
        props.setCellState(false)
    }

    if (props.cellState) {
        return (
            <div id='cell-options' className="">
                <div className='bg-inherit'>
                    {
                        props.cellData.culto.data
                            ? `${new Date(props.cellData.culto.data).getHours()}h`
                            : ''
                    }
                </div>
                <div className='bg-inherit flex flex-col gap-10'>
                    {props.cellData.culto.nome}
                    <div className='bg-inherit'>
                        {props.cellData.membros}
                    </div>
                </div>
                <div className='bg-inherit grid grid-rows-6 grid-cols-2 justify-items-center gap-y-2'>
                    <SelectMembers funcoes={funcoes} membros={membros} />
                    <button className='bg-accentColor h-10 w-40 col-span-2 rounded-sm p-1 text-white font-medium hover:bg-windowColor'>Adicionar evento</button>
                </div>
                <button onClick={close}>
                        <Icon classes={'text-red-500 hover:text-windowColor'} type={<FaTimes style={{display: 'inline'}} size={28}/>}/>
                </button>
            </div>        
        )    
    }  
}