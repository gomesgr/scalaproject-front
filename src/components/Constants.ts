export type Funcao = {
    id: number,
    nome: string,
    exerceSet: Array<{
        id: number,
        membro: any,
        funcao: any
    }>
}
export const urlFuncao: string = 'http://localhost:8080/api/funcao'

export type MembroData = {
    id: number,
    nome: string,
    telefone: string,
    ativo: string,
    administrador: string,
    usuario: string,
    provedor: string,
    exerceSet: Array<{
        id: number,
        membro: any,
        funcao: any
    }>
}
export const urlMembro: string = 'http://localhost:8080/api/membro'

export interface ArrayObjectSelectState {
    selectedFuncao: Funcao | null
}