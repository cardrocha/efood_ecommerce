import Menu from '../../models/Menu'

import sushiImg from '../../assets/image/sushi.jpg'
import ListMenu from '../../components/MenuList'
import LogoPerfil from '../../assets/image/sushi.jpg'
import HeaderPerfil from '../../components/HeaderPerfil'
import { ContainerSushi } from './styles'

const menuList: Menu[] = [
  {
    id: 1,
    image: sushiImg,
    title: 'Sushi na madeira',
    description:
      'Um rolo de sushi colorido e irresistível, recheado com salmão, atum, camarão e abacate.'
  },
  {
    id: 2,
    image: sushiImg,
    title: 'Sushi na madeira',
    description:
      'Um rolo de sushi colorido e irresistível, recheado com salmão, atum, camarão e abacate.'
  },
  {
    id: 3,
    image: sushiImg,
    title: 'Sushi na madeira',
    description:
      'Um rolo de sushi colorido e irresistível, recheado com salmão, atum, camarão e abacate.'
  },
  {
    id: 4,
    image: sushiImg,
    title: 'Sushi na madeira',
    description:
      'Um rolo de sushi colorido e irresistível, recheado com salmão, atum, camarão e abacate.'
  },
  {
    id: 5,
    image: sushiImg,
    title: 'Sushi na madeira',
    description:
      'Um rolo de sushi colorido e irresistível, recheado com salmão, atum, camarão e abacate.'
  },
  {
    id: 6,
    image: sushiImg,
    title: 'Sushi na madeira',
    description:
      'Um rolo de sushi colorido e irresistível, recheado com salmão, atum, camarão e abacate.'
  }
]

const PerfilSushi = () => (
  <ContainerSushi>
    <HeaderPerfil title="Japonesa" titlePerfil="Hioki Sushi" />
    <img className="imageSushi" src={LogoPerfil} alt="Hioki Sushi" />
    <ListMenu menu={menuList} />
  </ContainerSushi>
)

export default PerfilSushi
