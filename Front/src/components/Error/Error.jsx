import { useNavigate } from "react-router-dom"
import image from "../../images/error.png"

//Axs: Crear una img que diga lo que dice en la imagen y muestre el botón dentro de la imagen

export default function Error () {
    const navigate = useNavigate();
    return (
        <div>
            <img src={image} alt="Error 404. Esta página no existe" />
            <button onClick={()=>{navigate('/home')}}>Go Back Home!</button>
        </div>
    )
}