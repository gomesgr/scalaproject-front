import Select from 'react-select'
import { useState } from 'react'
import { ArrayObjectSelectState, Funcao} from './Constants'
export default function SelectMembers(props: any) {

    const [funcaoSelectedOption, setFuncaoSelectedOption] = useState<ArrayObjectSelectState>({
        selectedFuncao: null
    })
    const [membroSelectedOptions, setMembroSelectedOptions] = useState()
    
    const membrosOptionList = Array(props.membros.length).fill(0)
        membrosOptionList.map((_data, at) => {
            membrosOptionList[at] = {
                value: props.membros[at].nome,
                label: props.membros[at].nome
        }
    })

    const funcoesOptionList = Array(props.funcoes.length).fill(0)
    funcoesOptionList.map((_data, at) => {
        funcoesOptionList[at] = {
            value: props.funcoes[at].nome,
            label: props.funcoes[at].nome
        }
    })

    return (
        <>
            <Select
                className='h-10 w-48 border border-slate-300'
                options={props.funcoes}
                value={funcaoSelectedOption.selectedFuncao}
                onChange={(option: Funcao | null) => {
                    setFuncaoSelectedOption({ selectedFuncao: option })
                    }
                }
                getOptionLabel={(funcao: Funcao) => funcao.nome}
                getOptionValue={(funcao: Funcao) => funcao.nome}
                backspaceRemovesValue={true}
                isClearable={true}
                
            />
            {/* <Select
                className='h-10 w-64 border border-slate-300'
                placeholder='Membro'
                value={membroSelectedOptions}
                onChange={(data) => setMembroSelectedOptions(data)}
                isMulti
            /> */}
        </>
    )
}