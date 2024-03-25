import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Botao } from '../../styles'

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
`

export const Titulo = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-left: 8px;
`

export const Info = styled.textarea`
  font-size: 18px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  margin-left: 48px;
  width: 100%;
  resize: none;
  border: none;
  background-color: transparent;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`

export const Div = styled.div`
  display: inline;
`

export const Texto = styled.h4`
  font-size: 18px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
`
