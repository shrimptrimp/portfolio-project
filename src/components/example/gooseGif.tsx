import React from 'react'
import goose from './image0.gif'
type GooseGifProps = {

}

const GooseGif: React.FC<GooseGifProps> = () => {
  return (
    <div>
        <img src={goose} alt="this should be a goose" />
    </div>
  )
}

export default GooseGif
