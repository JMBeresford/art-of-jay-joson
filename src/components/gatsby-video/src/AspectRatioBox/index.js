import React from 'react'

const AspectRatioBox = ({
  aspectRatio,
  children,
  className,
  style,
  ...props
}) => (
  <div
    className={className}
    style={{
      width: '100%',
      ...style,
    }}
    {...props}
  >
    <div
      style={{
        height: 0,
        overflow: 'hidden',
        paddingTop: `${100 / aspectRatio}%`,
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        {children}
      </div>
    </div>
  </div>
)

export default AspectRatioBox
