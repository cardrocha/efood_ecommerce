import styled from 'styled-components'
import { colors } from '../../../styles/styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  border: 1px solid ${colors.purple};
  padding: 4px;
  font-size: 16px;
  font-weight: bold;
  background-color: ${colors.purple};
  color: ${colors.orange};
  cursor: pointer;

  &:hover {
    filter: brightness(1.2);
  }

  &:active {
    border: 1px solid ${colors.orange};
  }
`
export const ButtonCart = styled(ButtonContainer)`
  width: 100%;
`

export const ButtonLink = styled(Link)`
  border: none;
  padding: 4px 8px;
  font-size: 16px;
  font-weight: bold;
  background-color: ${colors.purple};
  color: ${colors.orange};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    filter: brightness(1.2);
  }

  &:active {
    border: 1px solid ${colors.orange};
  }
`
