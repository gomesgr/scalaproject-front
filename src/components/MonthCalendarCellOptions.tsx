import { FaTimes } from 'react-icons/fa'
import Icon from './Icon'
import { Culto, Funcao, Membro, Trabalha, urlTrabalha } from './Constants'
import SelectMembers from './SelectMembers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Table from './table/Table'

export default function MonthCalendarCellOptions(props: any) {
    const funcoes: Funcao[] = props.funcoes
    const membros: Membro[] = props.membros
    const cultos: Culto[] = props.cellData.cultos
    const dia: number = props.cellData.dia
    const trabalham: Trabalha[] = props.trabalham

    const close = () => {
        props.setCellState(false)
    }

    useEffect(() => {
        axios
            .get(`${urlTrabalha}/mensal/${props.calendar.month() + 1}`)
            .then((result) => props.setTrabalham(result.data))
            .catch((error) => console.error(error))
    }, [props.calendar])

    const daysOnly = (value: Trabalha[]) => {
        return value.filter(
            (trabalha) => new Date(trabalha.culto.data).getDate() == dia
        )
    }

    const distinct = (value: Trabalha[]) => {
        let nValue = daysOnly(value)
        return [...new Set(nValue.map((trabalha) => trabalha.culto.data))]
    }

    if (props.cellState) {
        const distincts = distinct(trabalham)
        return (
            <div id='cell-options'>
                <div className='bg-inherit grid grid-flow-col'>
                    {distincts.map((item) => (
                        <Table data={trabalham} heading={item} />
                    ))}
                </div>
                <div className='bg-inherit grid grid-rows-6 grid-cols-2 justify-items-center gap-y-2'>
                    <SelectMembers funcoes={funcoes} membros={membros} />
                    <button
                        id='btnAction'
                        className='bg-accentColor h-10 w-40 col-span-2 rounded-sm p-1 text-white font-medium hover:bg-windowColor'
                    >
                        Adicionar evento
                    </button>
                </div>
                <div>
                    <button id='btnClose' onClick={close}>
                        <Icon
                            classes='text-accent'
                            type={<FaTimes size={28} />}
                        />
                    </button>
                </div>
            </div>
        )
    }
}
