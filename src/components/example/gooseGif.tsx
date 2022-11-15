import React from 'react'
import goose from 'src\components\example\image0.gif'
type GooseGifProps = {

}

const GooseGif: React.FC<GooseGifProps> = () => {
  return (
    <div>
      <body>
        <img src={goose} alt="my-gif" />
      </body>
    </div>
  )
}

export default GooseGif
