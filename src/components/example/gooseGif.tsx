import React from 'react'
import goose from './assets/image0.gif'
type GooseGifProps = {

}

const GooseGif: React.FC<GooseGifProps> = () => {
  return (
    <div>
      <body>
        <img src={goose} alt="geese" />
      </body>
    </div>
  )
}

export default GooseGif
