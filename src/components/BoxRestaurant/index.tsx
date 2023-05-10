import Button from '../Button'
import Tag from '../Tag'
import {
  BoxContainer,
  BoxContent,
  Descricao,
  TagTitle,
  TitleContainer,
  Titulo
} from './styles'

type Props = {
  title: string
  to: string
  note: string
  content?: string
  category: string
  description: string
  image: string
}

const Restaurant = ({
  title,
  to,
  note,
  content,
  category,
  description,
  image
}: Props) => (
  <BoxContainer>
    <img src={image} alt={title} />
    <BoxContent>
      <TitleContainer>
        <Titulo>{title}</Titulo>
        <Titulo>{note}</Titulo>
      </TitleContainer>
      <TagTitle>
        {content && <Tag size="small">{content}</Tag>}
        {category && <Tag size="small">{category}</Tag>}
      </TagTitle>
      <Descricao>{description}</Descricao>
      <Button type="link" to={to} title="clique e saiba mais">
        Saiba mais
      </Button>
    </BoxContent>
  </BoxContainer>
)
export default Restaurant
