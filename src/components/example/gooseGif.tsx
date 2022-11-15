import React from 'react'
type GooseGifProps = {

}

const GooseGif: React.FC<GooseGifProps> = () => {
  return (
    <div>
      <body>
        <img src={require('./image0.gif')} alt="my-gif" />
      </body>
    </div>
  )
}

export default GooseGif
