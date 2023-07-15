export type FuncaoData = {
    id: number,
    nome: string,
    exerceSet: Array<{
        id: number,
        membro: any,
        funcao: any
    }>
}