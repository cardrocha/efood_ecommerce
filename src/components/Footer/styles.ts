import styled from 'styled-components'
import { breakpoints, colors } from '../../../styles/styles'

export const FooterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${colors.purple};
  padding: 40px;
  text-align: center;

  img {
    width: 125px;
    margin: 0 auto;
  }

  .container {
    background-color: ${colors.purple};
  }

  .imgEfood {
    margin-bottom: 32px;

    @media (max-width: ${breakpoints.desktop}) {
      margin: 0 0 32px 0;
    }
  }

  .imgLinks {
    display: flex;
    gap: 8px;
    margin-bottom: 80px;

    img {
      width: 24px;
    }
  }
`

export const Paragraph = styled.p`
  width: 480px;
  margin: 0 auto;
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  text-align: center;
  color: ${colors.orange};

  @media (max-width: ${breakpoints.desktop}) {
    width: 280px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 12px;
    width: 280px;
  }
`
