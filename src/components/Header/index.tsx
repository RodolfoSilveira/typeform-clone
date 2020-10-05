import { useTransform, useViewportScroll } from 'framer-motion'
import * as S from './styles'

const Header = () => {
  const { scrollYProgress } = useViewportScroll()

  const headerY = useTransform(scrollYProgress, [0.188, 0.198], ['0%', '-100%'])

  return <S.Container style={{ y: headerY }} />
}

export default Header
