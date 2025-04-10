import './Wind.css'

type WindStyle = {
  width: string;
  height: string;
  top: string;
  animationDuration: string;
}

function Wind({ style }: { style: WindStyle }) {
  return (
    <div className="wind-div" style={style}></div>
  )
}

export default Wind;
