import { Trans } from '@lingui/macro'
import styled from 'styled-components/macro'
import { ThemedText } from 'theme'

interface PoolsSectionProps {
  poolsData: string[]
}

const Header = styled(ThemedText.MediumHeader)`
  font-size: 28px !important;
`

const PoolsSectionWrapper = styled.div``

export default function PoolsSection(props: PoolsSectionProps) {
  return (
    <PoolsSectionWrapper>
      <Header>
        <Trans>Pools</Trans>
      </Header>
    </PoolsSectionWrapper>
  )
}
