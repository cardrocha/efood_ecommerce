import { createGlobalStyle } from 'styled-components'

export const colors = {
  purple: '#210062',
  lightWhite: '#dbdfea',
  orange: '#FF8400',
  white: '#fff',
  black: '#000',
  red: '#ff0000'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const EstiloGlobal = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  list-style: none;

  body {
    background-color: ${colors.lightWhite};
  }

  .container {
    max-width: 1366px;
    width: 100%;
    margin: 0 auto;
  }

  }
`
