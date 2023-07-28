import { Trabalha } from '../Constants'

export default function Table(props: any) {
    const trabalham: Trabalha[] = props.data
    const heading: number = props.heading

    const TableHeaderRow = () => {
        return (
            <tr>
                <th className='border-y border-background shadow-md'>Membro</th>
                <th className='border-y border-background shadow-md'>Função</th>
            </tr>
        )
    }

    const filterTableRow = () => {
        return trabalham.filter((item: Trabalha) => item.culto.data == heading)
    }

    const cultoNomes: string[] = filterTableRow().map((item) => item.culto.nome)

    const TableRow = () => {
        return filterTableRow().map((item: Trabalha) => (
            <tr>
                <td className='border-y shadow-md border-background'>
                    {item.exerce.membro.nome}
                </td>
                <td className='border-y shadow-md border-background'>
                    {item.exerce.funcao.nome}
                </td>
            </tr>
        ))
    }

    return (
        <>
            <table className='rounded-md border-separate border border-spacing-1 border-background text-center'>
                <caption className='caption-top font-medium'>
                    {`${cultoNomes[0]}`}
                </caption>
                <TableHeaderRow />
                <TableRow />
            </table>
        </>
    )
}
