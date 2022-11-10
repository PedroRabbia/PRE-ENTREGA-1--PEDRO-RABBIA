import logo from "../assets/pngegg.png"
import Carrito from "../assets/pngegg.png"
import "../App.css"
function CartWidget(){
    return(
     <div className="imagen">
        <img src={Carrito} className="imagen_medidas" alt=""/>
     </div>
        

    );
}

export default CartWidget;