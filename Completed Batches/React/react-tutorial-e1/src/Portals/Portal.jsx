import { createPortal } from 'react-dom'

const Portal = () => {
  return createPortal(
    <>
      <h1>Portal</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, velit?</p>
      <button>Click</button>
    </>,
    document.getElementById("portal")
  )
}

export default Portal