export type Funcao = {
    id: number
    nome: string
    exerceSet: Array<{
        id: number
        membro: any
        funcao: any
    }>
}
export const urlFuncao: string = 'http://localhost:8080/api/funcao'

export type Membro = {
    id: number
    nome: string
    email: string
    administrador: string
    usuario: string
    exerceSet: Array<{
        id: number
        membro: any
        funcao: any
    }>
}
export const urlMembro: string = 'http://localhost:8080/api/membro'

export type CultosBool = {
    culto: Culto | null
    existe: boolean
}

export type Culto = {
    data: number
    nome: string
}
export const urlCulto: string = 'http://localhost:8080/api/culto'

export interface FuncaoObject {
    selectedFuncao: Funcao | null
}

export interface MembroObject {
    selectedMembro: Membro | null
}

export type Exerce = {
    id: number
    membro: Membro
    funcao: Funcao
}

export type Trabalha = {
    id: number
    exerce: Exerce
    culto: Culto
}

export const urlTrabalha: string = 'http://localhost:8080/api/trabalha'

export type GoogleUser = {
    access_token: string
    authuser: string
    expires_in: number
    prompt: string
    scope: string
    token_type: string
}

export type GoogleProfile = {
    email: string
    family_name: string
    given_name: string
    id: string
    locale: string
    name: string
    picture: string
    verified_email: boolean
}

export interface ChaveValorTrabalha {
    data: number
    valor: Trabalha
}
