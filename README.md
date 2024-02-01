![Home do EFOOD](/src/assets/image/efood.png)


# EFOOD - Simulação de E-commerce de Restaurantes

EFOOD é um projeto que simula um e-commerce de restaurantes, permitindo aos usuários visualizar e comprar pratos oferecidos por diversos estabelecimentos. Utiliza requisições para listar restaurantes e seus respectivos pratos por meio de uma API.

## Funcionalidades

- **Listagem de Restaurantes:** Os usuários podem visualizar uma lista de restaurantes disponíveis.
- **Listagem de Pratos:** Dentro de cada restaurante, é possível visualizar os pratos oferecidos.
- **Carrinho de Compras:** Os clientes podem adicionar e remover pratos do carrinho, com a capacidade de calcular a soma dos valores dos itens.
- **Geração de Token de Pedido:** Um token de pedido é gerado quando o usuário finaliza a compra.
- **Checkout e Pagamento:** O projeto oferece funcionalidades básicas de checkout e pagamento.

## Tecnologias Utilizadas

- **React**: Utilizado para a construção da interface do usuário.
- **React Router DOM**: Para a navegação entre as diferentes páginas do aplicativo.
- **Redux**: Gerenciamento de estado, especialmente para o carrinho de compras.
- **React Query**: Utilizado para realizar requisições e armazenar em cache os dados da API.
- **Styled-Components**: Biblioteca para estilização dos componentes.
- **TypeScript**: Adiciona tipagem estática ao JavaScript, aumentando a robustez e a manutenibilidade do código.

## Como Executar

1. Clone o repositório do projeto:

````bash
git clone https://github.com/seu-usuario/efood.git

2. Navegue até o diretório do projeto:

````bash
cd efood

3. Instale as dependências:

````bash
npm install
# ou
yarn install

4. Inicie o servidor de desenvolvimento:

````bash
npm run dev
# ou
yarn dev


