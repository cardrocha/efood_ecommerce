import { useParams } from 'react-router-dom'

import { useGetPerfilQuery } from '../../services/api'
import { ContainerPerfil } from './styles'
import HeaderPerfil from '../../components/HeaderPerfil'
import ListMenu from '../../components/MenuList'
import Cart from '../../components/Cart'

const Perfil = () => {
  const { id } = useParams()
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data: cardapio } = useGetPerfilQuery(id!)

  if (!cardapio) {
    return <h3>Carregando...</h3>
  }

  return (
    <ContainerPerfil>
      <HeaderPerfil
        content={{
          id: cardapio.id,
          titulo: cardapio.titulo,
          destacado: cardapio.destacado,
          capa: cardapio.capa,
          tipo: cardapio.tipo,
          avaliacao: cardapio.avaliacao,
          descricao: cardapio.descricao,
          cardapio: []
        }}
      />
      <img className="imgPerfil" src={cardapio.capa} alt={cardapio.titulo} />
      <ListMenu menu={cardapio.cardapio} />
      <Cart />
    </ContainerPerfil>
  )
}

export default Perfil
