import { PropagateLoader } from 'react-spinners'
import { colors } from '../../../styles/styles'
import { ContainerLoading } from './styles'

const Loader = () => (
  <ContainerLoading>
    <PropagateLoader color={colors.purple} />
  </ContainerLoading>
)

export default Loader
