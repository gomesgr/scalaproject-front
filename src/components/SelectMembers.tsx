import Select from 'react-select'
import { useState } from 'react'
import { FuncaoObject, Funcao, Membro, MembroObject} from './Constants'
export default function SelectMembers(props: any) {
    const funcoes: Funcao[] = props.funcoes

    const [funcaoSelectedOption, setFuncaoSelectedOption] = useState<FuncaoObject>({ selectedFuncao: null })
    const [membroSelectedOptions, setMembroSelectedOptions] = useState<MembroObject>({ selectedMembro: null })

    const [funcaoSelectedOption1, setFuncaoSelectedOption1] = useState<FuncaoObject>({ selectedFuncao: null })
    const [membroSelectedOptions1, setMembroSelectedOptions1] = useState<MembroObject>({ selectedMembro: null })

    const [funcaoSelectedOption2, setFuncaoSelectedOption2] = useState<FuncaoObject>({ selectedFuncao: null })
    const [membroSelectedOptions2, setMembroSelectedOptions2] = useState<MembroObject>({ selectedMembro: null })

    const [funcaoSelectedOption3, setFuncaoSelectedOption3] = useState<FuncaoObject>({ selectedFuncao: null })
    const [membroSelectedOptions3, setMembroSelectedOptions3] = useState<MembroObject>({ selectedMembro: null })

    const [funcaoSelectedOption4, setFuncaoSelectedOption4] = useState<FuncaoObject>({ selectedFuncao: null })
    const [membroSelectedOptions4, setMembroSelectedOptions4] = useState<MembroObject>({ selectedMembro: null })
    return (
        <>
            
                <Select
                    name='funcao-1'
                    className='h-10 w-48 border border-slate-300'
                    options={funcoes}
                    value={funcaoSelectedOption.selectedFuncao}
                    onChange={(option: Funcao | null) =>
                        setFuncaoSelectedOption({ selectedFuncao: option })}
                    placeholder='Função'
                    getOptionLabel={(funcao: Funcao) => funcao.nome}
                    getOptionValue={(funcao: Funcao) => funcao.nome}
                    backspaceRemovesValue={true}
                    isClearable={true}
                    isOptionDisabled={(option: Funcao) => {
                        return (
                            (funcaoSelectedOption1.selectedFuncao === option) ||
                            (funcaoSelectedOption2.selectedFuncao === option) ||
                            (funcaoSelectedOption3.selectedFuncao === option) ||
                            (funcaoSelectedOption4.selectedFuncao === option) 
                        )
                    }}
                    
                />
                <Select
                    name='membro-1'
                    className='h-10 w-64'
                    options={props.membros}
                    value={membroSelectedOptions.selectedMembro}
                    onChange={(options: Membro | null) =>
                        setMembroSelectedOptions({ selectedMembro: options })}
                    placeholder='Membro'
                    getOptionLabel={(membro: Membro) => membro.nome}
                getOptionValue={(membro: Membro) => membro.nome}
                isOptionDisabled={(option: Membro) => {
                    return (
                        (membroSelectedOptions1.selectedMembro === option) ||
                        (membroSelectedOptions2.selectedMembro === option) ||
                        (membroSelectedOptions3.selectedMembro === option) ||
                        (membroSelectedOptions4.selectedMembro === option)
                    )
                }}
                />
            
            
            {/* 1 */}
            
                <Select
                    className='h-10 w-48 border border-slate-300'
                    options={funcoes}
                    value={funcaoSelectedOption1.selectedFuncao}
                    onChange={(option: Funcao | null) =>
                        setFuncaoSelectedOption1({ selectedFuncao: option })}
                    placeholder='Função'
                    getOptionLabel={(funcao: Funcao) => funcao.nome}
                    getOptionValue={(funcao: Funcao) => funcao.nome}
                    backspaceRemovesValue={true}
                    isClearable={true}
                    isOptionDisabled={(option: Funcao) => {
                        return (
                            (funcaoSelectedOption.selectedFuncao === option)  ||
                            (funcaoSelectedOption2.selectedFuncao === option) ||
                            (funcaoSelectedOption3.selectedFuncao === option) ||
                            (funcaoSelectedOption4.selectedFuncao === option) 
                        )
                    }}
                    
                />
                <Select
                    name='membro-1'
                    className='h-10 w-64'
                    options={props.membros}
                    value={membroSelectedOptions1.selectedMembro}
                    onChange={(options: Membro | null) =>
                        setMembroSelectedOptions1({ selectedMembro: options })}
                    placeholder='Membro'
                    getOptionLabel={(membro: Membro) => membro.nome}
                    getOptionValue={(membro: Membro) => membro.nome}
                    isOptionDisabled={(option: Membro) => {
                        return (
                            (membroSelectedOptions.selectedMembro === option) ||
                            (membroSelectedOptions2.selectedMembro === option) ||
                            (membroSelectedOptions3.selectedMembro === option) ||
                            (membroSelectedOptions4.selectedMembro === option)
                        )
                    }}
                />
            
            
            {/* 2 */}
            
                <Select
                    className='h-10 w-48 border border-slate-300'
                    options={funcoes}
                    value={funcaoSelectedOption2.selectedFuncao}
                    onChange={(option: Funcao | null) =>
                        setFuncaoSelectedOption2({ selectedFuncao: option })}
                    placeholder='Função'
                    getOptionLabel={(funcao: Funcao) => funcao.nome}
                    getOptionValue={(funcao: Funcao) => funcao.nome}
                    backspaceRemovesValue={true}
                    isClearable={true}
                    isOptionDisabled={(option: Funcao) => {
                        return (
                            (funcaoSelectedOption.selectedFuncao === option)  ||
                            (funcaoSelectedOption1.selectedFuncao === option) ||
                            (funcaoSelectedOption3.selectedFuncao === option) ||
                            (funcaoSelectedOption4.selectedFuncao === option) 
                        )
                    }}
                    
                />
                <Select
                    name='membro-1'
                    className='h-10 w-64'
                    options={props.membros}
                    value={membroSelectedOptions2.selectedMembro}
                    onChange={(options: Membro | null) =>
                        setMembroSelectedOptions2({ selectedMembro: options })}
                    placeholder='Membro'
                    getOptionLabel={(membro: Membro) => membro.nome}
                    getOptionValue={(membro: Membro) => membro.nome}
                    isOptionDisabled={(option: Membro) => {
                        return (
                            (membroSelectedOptions.selectedMembro === option) ||
                            (membroSelectedOptions1.selectedMembro === option) ||
                            (membroSelectedOptions3.selectedMembro === option) ||
                            (membroSelectedOptions4.selectedMembro === option)
                        )
                    }}
                />
            
            
            {/* 3 */}
            
                <Select
                    className='h-10 w-48 border border-slate-300'
                    options={funcoes}
                    value={funcaoSelectedOption3.selectedFuncao}
                    onChange={(option: Funcao | null) =>
                        setFuncaoSelectedOption3({ selectedFuncao: option })}
                    placeholder='Função'
                    getOptionLabel={(funcao: Funcao) => funcao.nome}
                    getOptionValue={(funcao: Funcao) => funcao.nome}
                    backspaceRemovesValue={true}
                    isClearable={true}
                    isOptionDisabled={(option: Funcao) => {
                        return (
                            (funcaoSelectedOption.selectedFuncao === option)  ||
                            (funcaoSelectedOption1.selectedFuncao === option) ||
                            (funcaoSelectedOption2.selectedFuncao === option) ||
                            (funcaoSelectedOption4.selectedFuncao === option) 
                        )
                    }}
                    
                />
                <Select
                    name='membro-1'
                    className='h-10 w-64'
                    options={props.membros}
                    value={membroSelectedOptions3.selectedMembro}
                    onChange={(options: Membro | null) =>
                        setMembroSelectedOptions3({ selectedMembro: options })}
                    placeholder='Membro'
                    getOptionLabel={(membro: Membro) => membro.nome}
                    getOptionValue={(membro: Membro) => membro.nome}
                    isOptionDisabled={(option: Membro) => {
                        return (
                            (membroSelectedOptions.selectedMembro === option) ||
                            (membroSelectedOptions1.selectedMembro === option) ||
                            (membroSelectedOptions2.selectedMembro === option) ||
                            (membroSelectedOptions4.selectedMembro === option)
                        )
                    }}
                />
            

            {/* 4 */}
            
                <Select
                    className='h-10 w-48 border border-slate-300'
                    options={funcoes}
                    value={funcaoSelectedOption4.selectedFuncao}
                    onChange={(option: Funcao | null) =>
                        setFuncaoSelectedOption4({ selectedFuncao: option })}
                    placeholder='Função'
                    getOptionLabel={(funcao: Funcao) => funcao.nome}
                    getOptionValue={(funcao: Funcao) => funcao.nome}
                    backspaceRemovesValue={true}
                    isClearable={true}
                    isOptionDisabled={(option: Funcao) => {
                        return (
                            (funcaoSelectedOption.selectedFuncao === option)  ||
                            (funcaoSelectedOption1.selectedFuncao === option) ||
                            (funcaoSelectedOption2.selectedFuncao === option) ||
                            (funcaoSelectedOption3.selectedFuncao === option)
                        )
                    }}
                    
                />
                <Select
                    name='membro-1'
                    className='h-10 w-64'
                    options={props.membros}
                    value={membroSelectedOptions4.selectedMembro}
                    onChange={(options: Membro | null) =>
                        setMembroSelectedOptions4({ selectedMembro: options })}
                    placeholder='Membro'
                    getOptionLabel={(membro: Membro) => membro.nome}
                    getOptionValue={(membro: Membro) => membro.nome}
                    isOptionDisabled={(option: Membro) => {
                        return (
                            (membroSelectedOptions.selectedMembro === option) ||
                            (membroSelectedOptions1.selectedMembro === option) ||
                            (membroSelectedOptions2.selectedMembro === option) ||
                            (membroSelectedOptions3.selectedMembro === option)
                        )
                    }}
                />
            
        </>
    )
}