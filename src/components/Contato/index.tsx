import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'
import { Botao, BotaoSalvar } from '../../styles'

type Props = ContatoClass

const Tarefa = ({
  nome: nomeOriginal,
  email: emailOriginal,
  numero: numeroOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [numero, setNumero] = useState('')

  useEffect(() => {
    if (
      nomeOriginal.length > 0 ||
      emailOriginal.length > 0 ||
      numeroOriginal.length > 0
    ) {
      setEmail(emailOriginal)
      setNome(nomeOriginal)
      setNumero(numeroOriginal)
    }
  }, [nomeOriginal, emailOriginal, numeroOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setEmail(emailOriginal)
    setNome(nomeOriginal)
    setNumero(numeroOriginal)
  }

  return (
    <S.Card>
      <label htmlFor={nome}>
        <S.Titulo>
          {estaEditando ? <em>Editando: </em> : ''}
          {nome}
        </S.Titulo>
      </label>
      <S.Div>
        <S.Texto>Nome:</S.Texto>
        <S.Info
          disabled={!estaEditando}
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
        />
      </S.Div>
      <S.Div>
        <S.Texto>E-mail:</S.Texto>
        <S.Info
          disabled={!estaEditando}
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
        />
      </S.Div>
      <S.Div>
        <S.Texto>Número:</S.Texto>
        <S.Info
          disabled={!estaEditando}
          value={numero}
          onChange={(evento) => setNumero(evento.target.value)}
        />
      </S.Div>
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    nome,
                    email,
                    numero,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
