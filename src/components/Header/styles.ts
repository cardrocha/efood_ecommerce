import styled from 'styled-components'
import { breakpoints, colors } from '../../../styles/styles'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.purple};

  @media (max-width: ${breakpoints.desktop}) {
    overflow-y: hidden;
  }

  img {
    margin-top: 64px;
    margin-bottom: 100px;
  }
`
export const Text = styled.p`
  width: 700px;
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;
  padding-bottom: 40px;
  text-align: center;
  color: ${colors.orange};
  background-color: ${colors.purple};

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 28px;
    width: 350px;
  }
`
