
import CartWidget from "./cartwidget";
import png from "../assets/pngegg.png"
function Navbar(){
    return(
      <div className="title"> 
        <h1>LA HAMBURGUESERIA</h1>
        <div className="list">
            <nav>
                <ul className="list_style">
                    <div className="list_style">
                    <li>TIENDA</li>
                    </div>
                    <div className="list_style">
                    <li>CONTACTO</li>
                    </div>
                    <div>
                    <CartWidget/>
                    </div>
                </ul>
            </nav>
        </div>
      </div>

    )
}

export default Navbar;