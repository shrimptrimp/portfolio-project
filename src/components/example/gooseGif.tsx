import React from 'react'
import goose from './image0.gif'
type GooseGifProps = {

}

const GooseGif: React.FC<GooseGifProps> = () => {
  return (
    <div>
      <body>
        <img src={goose} alt="this should be a goose" />
      </body>
    </div>
  )
}

export default GooseGif
