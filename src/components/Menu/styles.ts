import styled from 'styled-components'
import { cores } from '../../../styles/styles'

export const BoxMenu = styled.div`
  width: 320px;
  height: 338px;
  background-color: ${cores.texto};
  padding: 8px 8px;

  img {
    width: 100%;
    margin-bottom: 8px;
  }
`
export const TitleMenu = styled.h3`
  font-size: 16px;
  font-weight: bold;
  color: ${cores.fundo};
  margin-bottom: 8px;
`
export const DescriptionMenu = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${cores.fundo};
  margin-bottom: 20px;
`
