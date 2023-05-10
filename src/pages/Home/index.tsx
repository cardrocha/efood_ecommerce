import RestaurantList from '../../components/ListRestaurant'
import Establishment from '../../models/Restaurant'

import sushiImg from '../../assets/image/sushi.png'
import dolceImg from '../../assets/image/dolce.png'
import Header from '../../components/Header'

const restaurantList: Establishment[] = [
  {
    id: 1,
    to: 'sushi',
    image: sushiImg,
    title: 'Hioki Sushi',
    note: '4.9 ⭐',
    content: 'Destaque da semana',
    category: 'Japonesa',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
  },
  {
    id: 2,
    to: 'dolce',
    image: dolceImg,
    title: 'La Dolce Vita Trattoria',
    note: '4.6 ⭐',
    content: '',
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 3,
    to: '/dolce',
    image: dolceImg,
    title: 'La Dolce Vita Trattoria',
    note: '4.6 ⭐',
    content: '',
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 4,
    to: '/dolce',
    image: dolceImg,
    title: 'La Dolce Vita Trattoria',
    note: '4.6 ⭐',
    content: '',
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  }
]

const Home = () => (
  <>
    <Header />
    <RestaurantList restaurant={restaurantList} />
  </>
)

export default Home
