import {
  LinkPerfil,
  CartPerfil,
  ContentPerfil,
  TituloTipoPerfil,
  TituloPerfil,
  TextoPerfil
} from './styles'

import LogoEfood from '../../assets/image/logo.svg'
import sombra from '../../assets/image/sombra.png'

type Props = {
  title: string
  titlePerfil: string
}

const HeaderPerfil = ({ title, titlePerfil }: Props) => (
  <>
    <ContentPerfil>
      <LinkPerfil to="/">Restautantes</LinkPerfil>
      <img src={LogoEfood} alt="logo da efood" />
      <CartPerfil>0 produto(s) no carrinho</CartPerfil>
    </ContentPerfil>
    <TextoPerfil>
      <TituloTipoPerfil>{title}</TituloTipoPerfil>
      <TituloPerfil>{titlePerfil}</TituloPerfil>
      <img className="sombra" src={sombra} alt="sombra do banner" />
    </TextoPerfil>
  </>
)

export default HeaderPerfil
