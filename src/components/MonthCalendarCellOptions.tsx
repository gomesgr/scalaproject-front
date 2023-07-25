import {FaTimes} from 'react-icons/fa'
import Icon from './Icon'
import { Culto, Funcao, Membro, Trabalha } from './Constants'
import SelectMembers from './SelectMembers'

export default function MonthCalendarCellOptions(props: any) {
    const funcoes: Funcao[] = props.funcoes
    const membros: Membro[] = props.membros
    const culto: Culto = props.cellData.culto
    const trabalham: Trabalha[] = props.trabalham

    const close = () => {
        props.setCellState(false)
    }


    // TODO
    // Aqui recebo TODAS as tuplas presentes no banco de dados, o que é inimaginavelmente não performático, arrumar depois
    const euTrabalhei = (): string => {
        for (let trabalha of trabalham) {
            if (trabalha.culto.data === culto.data) {
                return trabalha.exerce.membro.nome
            }
        }
        return ''
    }

    if (props.cellState) {
        return (
            <div id='cell-options'>
                <div className='bg-inherit'>
                    {
                        props.cellData.culto.data
                            ? `${new Date(culto.data).getHours()}h`
                            : ''
                    }
                </div>
                <div className='bg-inherit flex flex-col gap-10'>
                    {props.cellData.culto.nome}
                    <div className='bg-inherit'>
                        {props.cellData.membros}
                    </div>
                    <div>
                        {euTrabalhei()}
                    </div>
                </div>
                <div className='bg-inherit grid grid-rows-6 grid-cols-2 justify-items-center gap-y-2'>
                    <SelectMembers funcoes={funcoes} membros={membros} />
                    <button className='bg-accentColor h-10 w-40 col-span-2 rounded-sm p-1 text-white font-medium hover:bg-windowColor'>Adicionar evento</button>
                </div>
                <div>
                    <button className='bg-transparent' onClick={close}>
                        <Icon classes='text-red-500' type={<FaTimes size={28}/>}/>
                    </button>
                </div>
            </div>        
        )    
    }  
}