import Restaurant from '../BoxRestaurant'
import { Container, List } from './styles'

import Establishment from '../../models/Restaurant'

type Props = {
  title?: string
  restaurant: Establishment[]
}

const RestaurantList = ({ title, restaurant }: Props) => (
  <Container>
    <div className="container">
      <h2>{title}</h2>
      <ul>
        <List>
          {restaurant.map((restaurant) => (
            <Restaurant
              key={restaurant.id}
              to={restaurant.to}
              image={restaurant.image}
              title={restaurant.title}
              note={restaurant.note}
              content={restaurant.content}
              category={restaurant.category}
              description={restaurant.description}
            />
          ))}
        </List>
      </ul>
    </div>
  </Container>
)

export default RestaurantList
