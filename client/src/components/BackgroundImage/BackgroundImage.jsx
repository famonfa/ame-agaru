import { useLocation } from 'react-router-dom'
import Cooking from '../../assets/cooking.png'
import style from './BackgroundImage.module.css'

const BackgroundImage = () => {
  const location = useLocation()

  if (location.pathname === '/about' || location.pathname === '/' ) {
    return null
  }

  return (  
    <div className={style.Cooking}>
      <img src={Cooking} alt="cookingLady" />
    </div>
  )
}

export default BackgroundImage