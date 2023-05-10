import { ButtonCart } from '../Button/styles'
import { BoxMenu, DescriptionMenu, TitleMenu } from './styles'

type Props = {
  image: string
  title: string
  description: string
}

const MenuList = ({ image, title, description }: Props) => (
  <BoxMenu>
    <img src={image} alt={title} />
    <TitleMenu>{title}</TitleMenu>
    <DescriptionMenu>{description}</DescriptionMenu>
    <ButtonCart type="button" title="clique aqui">
      Adicionar ao carrinho
    </ButtonCart>
  </BoxMenu>
)

export default MenuList
