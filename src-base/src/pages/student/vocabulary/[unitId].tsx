import React, { ReactElement, useEffect } from 'react'
import { Container } from '@/pages.resources/student/vocabulary/elements'
import { ListCardCustom } from '@/pages.resources/student/vocabulary/components'
import { PageLayoutBaseModel } from '@/models'
import { useRouter } from 'next/router'
import { useQueryVocabularies } from '@/repositories'
import { ParsedUrlQuery } from 'querystring'

type VocabularyQuery = ParsedUrlQuery & {
  unitId: string
}
const Vocabulary: PageLayoutBaseModel = () => {
  const router = useRouter()
  const { unitId } = router.query as VocabularyQuery
  const { vocabularies } = useQueryVocabularies(unitId)

  useEffect(() => {
    console.log(vocabularies?.records)
  }, [vocabularies?.records.length])

  return (
    <Container>
      <ListCardCustom data={vocabularies?.records} />
    </Container>
  )
}

Vocabulary.getLayout = (page: ReactElement) => page

export default Vocabulary
