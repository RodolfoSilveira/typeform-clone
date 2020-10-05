import * as S from './styles'
import FirstAndSecond from '../FirstAndSecond'

const Main = () => (
  <S.Wrapper>
    <S.Section style={{ height: '72.7%' }}>
      <FirstAndSecond />
    </S.Section>

    <S.Section style={{ height: '9.7%' }}>
      <S.Sticky className="third" />
    </S.Section>

    <S.Section style={{ height: '10.1%' }}>
      <S.Sticky className="fourth" />
    </S.Section>
  </S.Wrapper>
)

export default Main
