import React, { useEffect } from 'react'
import { useSpeechContext } from '@speechly/react-client'

export const HomeScreen = () => {
  const { segment } = useSpeechContext()

  useEffect(() => {
    if (segment) {
      console.log(segment)
    }
  }, [segment])

  return (
    <div>
      {segment ? (
        <div className="segment">
          {segment.words.map((w) => w.value).join(' ')}
        </div>
      ) : null}
    </div>
  )
}
