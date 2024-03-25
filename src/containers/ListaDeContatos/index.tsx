import Tarefa from '../../components/Contato'
import { MainContainer } from '../../styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraTarefas = () => {
    let tarefasFiltradas = itens
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )
      return tarefasFiltradas
    } else {
      return itens
    }
  }

  const tarefas = filtraTarefas()

  return (
    <MainContainer>
      <ul>
        {tarefas.map((t) => (
          <li key={t.nome}>
            <Tarefa numero={t.numero} email={t.email} nome={t.nome} id={t.id} />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeContatos
