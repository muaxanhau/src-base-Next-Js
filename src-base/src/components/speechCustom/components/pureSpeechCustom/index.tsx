import React, { FC, useEffect } from 'react'
import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill'
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition'
import { ComponentBaseModel } from '@/models'
import { Button, Circle, Container } from './elements'
import ImageCustom from '@/components/imageCustom'
import { icons } from '@/values/images'
import TextCustom from '@/components/textCustom'

const appId = '8c640251-6fba-4eb9-bc2b-f94699154c81'
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId)
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition)

type PureSpeechProps = ComponentBaseModel & {
  resetWhenSpeechEnd?: boolean
  onSpeechEndTextChange?: (text: string) => void
}
const PureSpeechCustom: FC<PureSpeechProps> = ({
  resetWhenSpeechEnd = true,
  onSpeechEndTextChange = () => {},
}) => {
  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition()
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: !resetWhenSpeechEnd })
  const stopListening = () => SpeechRecognition.stopListening()

  useEffect(() => {
    if (listening || !transcript.length) {
      return
    }

    onSpeechEndTextChange(transcript)
  }, [transcript, listening])

  if (!browserSupportsSpeechRecognition) {
    return <TextCustom>Browser doesn't support speech recognition.</TextCustom>
  }

  return (
    <Container isRecording={listening}>
      <Circle />
      <Circle />
      <Circle />
      <Circle />

      <Button
        onTouchStart={startListening}
        onMouseDown={startListening}
        onTouchEnd={stopListening}
        onMouseUp={stopListening}
      >
        <ImageCustom
          src={icons.ic_microphone_filled_blue}
          animationWhenHover={true}
        />
      </Button>
    </Container>
  )
}

export default PureSpeechCustom
