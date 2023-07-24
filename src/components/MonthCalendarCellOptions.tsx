import {FaTimes} from 'react-icons/fa'
import Icon from './Icon'
import { Culto, Funcao, Membro, Trabalha, urlTrabalha } from './Constants'
import SelectMembers from './SelectMembers'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function MonthCalendarCellOptions(props: any) {
    const funcoes: Funcao[] = props.funcoes
    const membros: Membro[] = props.membros
    const culto: Culto = props.cellData.culto
    const [trabalha, setTrabalha] = useState({} as Trabalha)

    
    useEffect(() => {
        if (culto) {
            axios
            .get(`${urlTrabalha}?data=${culto.data}`)
            .then(data => setTrabalha(data.data))
            .catch(error => console.error(error))
        } else {
            axios
                .get(`${urlTrabalha}`)
                .then(data => setTrabalha(data.data))
                .catch(error => console.error(error))
        }
    }, [])


    const close = () => {
        props.setCellState(false)
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
                        {
                            trabalha ? trabalha.exerce.membro.nome : ''
                        }
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