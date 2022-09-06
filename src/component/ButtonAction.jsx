import { ArrowRightCircle } from 'react-bootstrap-icons';

const ButtonAction = () => {
    return(
        <button className='btnBanner' onClick={() => console.log("connect")}>Ver la base de datos <ArrowRightCircle className='sepIcon' size={20}/> </button>
    )
}

export default ButtonAction;