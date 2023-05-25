import styled from 'styled-components'
import { breakpoints } from '../../../styles/styles'

export const ContainerPerfil = styled.div`
  position: relative;

  .imgPerfil {
    width: 1366px;
    height: 280px;
    object-fit: cover;

    @media (max-width: ${breakpoints.desktop}) {
      width: 100%;
    }
  }

  .sombra {
    position: absolute;
    top: 185px;
    left: 0;
    z-index: 0;
    background: rgba(0, 0, 0, 0.2);
  }
`
