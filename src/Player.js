import React from 'react'
import ReactPlayer from 'react-player'


export const Player = () => {
    return (
        <div>
            <ReactPlayer
                url={'https://www.youtube.com/watch?v=ysz5S6PUM-U'}
                playing={true}
                controls="false"

            />

        </div>

    )
}
