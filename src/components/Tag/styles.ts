import styled from 'styled-components'
import { colors } from '../../../styles/styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${colors.orange};
  color: ${colors.purple};
  padding: ${(props) => (props.size === 'big' ? '4px 6px' : '6px 8px')};
  font-size: ${(props) => (props.size === 'big' ? '16px' : '12px')};
  font-weight: bold;
  display: inline-block;
`
