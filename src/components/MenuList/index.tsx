import Menu from '../../models/Menu'
import MenuList from '../Menu'
import { ContainerMenu, List } from './styles'

type Props = {
  menu: Menu[]
}

const ListMenu = ({ menu }: Props) => (
  <ContainerMenu>
    <div className="container">
      <ul>
        <List>
          {menu.map((menu) => (
            <MenuList
              key={menu.id}
              image={menu.image}
              title={menu.title}
              description={menu.description}
            />
          ))}
        </List>
      </ul>
    </div>
  </ContainerMenu>
)

export default ListMenu
