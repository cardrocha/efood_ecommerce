import styled from 'styled-components'
import { breakpoints, colors } from '../../../styles/styles'
import { TagContainer } from '../Tag/styles'

export const BoxContainer = styled.div`
  background-color: ${colors.white};
  position: relative;
  width: 100%;
  border: 1px solid ${colors.purple};

  @media (max-width: ${breakpoints.tablet}) {
    width: 95%;
    margin: 0 auto;
  }

  .note {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-right: 8px;
  }

  .star {
    margin-bottom: 10px;
    width: 20px;
    height: 20px;
  }

  img {
    width: 100%;
    height: 217px;
    object-fit: cover;
    object-position: top;
  }

  ${TagContainer} {
    margin-right: 16px;
  }
`
export const BoxContent = styled.div`
  width: 100%;
  padding: 8px 8px 12px 8px;
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const TagTitle = styled.div`
  position: absolute;
  top: 16px;
  right: 2px;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${colors.orange};
  display: block;
  margin-top: 8px;
  margin-bottom: 16px;
`
export const Description = styled.p`
  display: block;
  color: ${colors.orange};
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  width: 100%;
  margin-bottom: 16px;
`
