import styled from 'styled-components'
import { breakpoints, cores } from '../../../styles/styles'

export const FooterBox = styled.div`
  max-width: 1366px;
  width: 100%;
  height: 298px;
  background-color: ${cores.fundo};
  padding: 40px;
  text-align: center;

  .container {
    background-color: ${cores.fundo};
  }

  .imgEfood {
    margin-bottom: 32px;

    @media (max-width: ${breakpoints.desktop}) {
      margin: 0 0 32px 0;
    }
  }

  .imgLinks {
    display: flex;
    margin: 0 590px;
    gap: 8px;
    width: 200px;
    margin-bottom: 80px;

    @media (max-width: ${breakpoints.desktop}) {
      margin: 0 0 80px 300px;
    }

    img {
      width: 24px;
    }
  }
`

export const Paragrafo = styled.p`
  width: 480px;
  margin: 0 auto;
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  text-align: center;
  color: ${cores.texto};
`
