import {FaTimes} from 'react-icons/fa'
import Icon from './Icon'
import { FuncaoData } from './Connection'

export default function MonthCalendarCellOptions(props: any) {
    const funcoes = props.funcoes
    const close = () => {
        props.setCellState(false)
    }

    const formatData = () => {
        return (
            funcoes.map((d: FuncaoData) => (<option value={d.nome.toLowerCase()}>{d.nome}</option>))
        )
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
                <div className='bg-inherit flex flex-col justify-between'>
                    <button onClick={close}>
                        <Icon classes={'text-red-500 hover:text-windowColor'} type={<FaTimes style={{display: 'inline'}} size={28}/>}/>
                    </button>
                    <select>
                        {formatData()}
                    </select>
                    <button className='bg-accentColor rounded-sm p-2 text-md text-white font-medium hover:bg-windowColor'>Adicionar evento</button>
                </div>
            </div>        
        )    
    }  
}