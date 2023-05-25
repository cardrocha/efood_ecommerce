import { createGlobalStyle } from 'styled-components'

export const cores = {
  fundo: '#210062',
  fundoHome: '#dbdfea',
  texto: '#FF8400',
  branco: '#fff',
  preto: '#000'
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
    background-color: ${cores.fundoHome};
  }

  .container {
    max-width: 1366px;
    width: 100%;
    margin: 0 auto;
  }

  }
`
