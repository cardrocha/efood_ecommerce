import Menu from '../../models/Menu'

import pizzaImg from '../../assets/image/pizza.png'
import ListMenu from '../../components/MenuList'
import LogoPerfil from '../../assets/image/dolceBanner.png'
import HeaderPerfil from '../../components/HeaderPerfil'
import { ContainerDolce } from './styles'

const menuList: Menu[] = [
  {
    id: 1,
    image: pizzaImg,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 2,
    image: pizzaImg,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 3,
    image: pizzaImg,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 4,
    image: pizzaImg,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 5,
    image: pizzaImg,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 6,
    image: pizzaImg,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }
]

const PerfilDolce = () => (
  <ContainerDolce>
    <HeaderPerfil title="Italiana" titlePerfil="La Dolce Vita Trattoria" />
    <img className="imgDolce" src={LogoPerfil} alt="La Dolce" />
    <ListMenu menu={menuList} />
  </ContainerDolce>
)

export default PerfilDolce
