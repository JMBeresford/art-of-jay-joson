/* eslint-disable jsx-a11y/media-has-caption */
import AspectRatioBox from './../AspectRatioBox'
import React from 'react'

const Video = React.forwardRef(
  ({ poster, className, sources, ...props }, ref) => {
    // Grab the aspect ratio out of the first source
    const aspectRatio = sources[0].aspectRatio

    return (
      <AspectRatioBox aspectRatio={aspectRatio}>
        <div
          style={{
            width: '100%',
            height: '100%',
            ...(poster
              ? {
                  background: `url(${poster}) center / contain no-repeat`,
                }
              : {}),
          }}
        >
          <video
            className={className}
            preload="auto"
            style={{
              width: '100%',
              height: '100%',
            }}
            {...props}
            ref={ref}
          >
            {sources.map((s) => (
              <source
                key={s.src}
                src={s.src}
                type={`video/${s.fileExtension}`}
              />
            ))}
          </video>
        </div>
      </AspectRatioBox>
    )
  }
)

export default Video
