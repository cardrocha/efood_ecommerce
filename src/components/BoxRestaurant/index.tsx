import Button from '../Button'
import Tag from '../Tag'

import star from '../../assets/image/star.svg'

import * as S from './styles'

type Props = {
  id: number
  title: string
  note: number
  contents: string[]
  description: string
  image: string
}

const Restaurant = ({
  id,
  title,
  note,
  contents,
  description,
  image
}: Props) => (
  <S.BoxContainer>
    <img src={image} alt={title} />
    <S.BoxContent>
      <S.TitleContainer>
        <S.Title>{title}</S.Title>
        <div className="note">
          <S.Title>{note}</S.Title>
          <img className="star" src={star} alt="ícone estrela" />
        </div>
      </S.TitleContainer>
      <S.TagTitle>
        {contents.map((content) => (
          <Tag key={content}>{content}</Tag>
        ))}
      </S.TagTitle>
      <S.Description>{description}</S.Description>
      <Button type="link" to={`/perfil/${id}`} title="clique e saiba mais">
        Saiba mais
      </Button>
    </S.BoxContent>
  </S.BoxContainer>
)
export default Restaurant
