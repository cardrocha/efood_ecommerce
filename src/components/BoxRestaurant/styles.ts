import styled from 'styled-components'
import { cores } from '../../../styles/styles'
import { TagContainer } from '../Tag/styles'

export const BoxContainer = styled.div`
  background-color: ${cores.branco};
  position: relative;
  margin-bottom: 40px;
  width: 471px;
  margin-left: 140px;
  border: 1px solid ${cores.fundo};

  :nth-child(2) {
    margin-left: 100px;
  }

  :nth-child(4) {
    margin-left: 100px;
  }

  img {
    width: 100%;
  }

  ${TagContainer} {
    margin-right: 16px;
  }
`
export const BoxContent = styled.div`
  width: 456px;
  padding: 8px;
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const TagTitle = styled.div`
  position: absolute;
  top: 16px;
  right: 2px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${cores.texto};
  display: block;
  margin-top: 8px;
  margin-bottom: 16px;
`
export const Descricao = styled.p`
  color: ${cores.texto};
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  display: block;
  margin-bottom: 16px;
`
