import Header from '../../components/Header'
import RestaurantList from '../../components/ListRestaurant'
import Loader from '../../components/Loader'

import { useGetHomeQuery } from '../../services/api'

// export interface MenuItem {
//   foto: string
//   preco: number
//   id: number
//   nome: string
//   descricao: string
//   porcao: string
// }

// export type Establishment = {
//   id: number
//   titulo: string
//   destacado: boolean
//   tipo: string
//   avaliacao: number
//   descricao: string
//   capa: string
//   cardapio: MenuItem[]
// }

const Home = () => {
  const { data: restaurant } = useGetHomeQuery()

  if (restaurant) {
    return (
      <>
        <Header />
        <RestaurantList restaurant={restaurant} />
      </>
    )
  }
  return <Loader />
}

export default Home
