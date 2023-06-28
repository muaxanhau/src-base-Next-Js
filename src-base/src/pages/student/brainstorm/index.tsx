import React, { FC } from 'react'
import { Container } from '@/pages.resources/student/brainstorm/elements'
import { ListCardCustom } from '@/pages.resources/student/brainstorm/components'
import { PageLayoutBaseModel } from '@/models'

const Brainstorm: PageLayoutBaseModel = () => {
  return (
    <Container>
      <ListCardCustom />
    </Container>
  )
}

export default Brainstorm
