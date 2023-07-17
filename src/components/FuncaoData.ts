export type FuncaoData = {
    id: number,
    nome: string,
    exerceSet: Array<{
        id: number,
        membro: any,
        funcao: any
    }>
}

export const urlFuncao:string = ('http://localhost:8080/api/funcao')