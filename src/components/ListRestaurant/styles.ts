import styled from 'styled-components'
import { cores } from '../../../styles/styles'

export const Container = styled.section`
  width: 1024px;
  padding-left: 20px;
  padding-right: 100px;
  background-color: ${cores.fundoHome};
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 80px;
  margin-bottom: 120px;
`
