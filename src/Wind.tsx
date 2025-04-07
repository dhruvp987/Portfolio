import './Wind.css'

function Wind({ startY, width, height, aniDur }: { startY, width, height, aniDur: number }) {
  const style = {
    width: `${width}px`,
    height: `${height}px`,
    // Center the rectangle along startY
    top: `${Math.floor(startY - (height / 2))}px`,
    animationDuration: `${aniDur}s`,
  };

  return (
    <div className="wind-div" style={style}></div>
  )
}

export default Wind;
