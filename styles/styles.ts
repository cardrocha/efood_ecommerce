import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  fundo: '#210062',
  fundoHome: '#dbdfea',
  texto: '#FF8400',
  branco: '#fff',
  preto: '#000'
}

export const EstiloGlobal = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  list-style: none;

  .container {
    max-width: 1366px;
  }

  }
`
export const Container = styled.div`
  max-width: 1366px;
  width: 100%;
  margin: 0 auto;
  background-color: #dbdfea;
`
