import { Content, Texto } from './styles'

import LogoEfood from '../../assets/image/logo.svg'

const Header = () => (
  <Content className="container">
    <img src={LogoEfood} alt="logo da efood" />
    <Texto>Viva experiências gastronômicasno conforto da sua casa</Texto>
  </Content>
)

export default Header
