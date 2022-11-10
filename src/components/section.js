import itemListContainer from "./itemListContainer"
import Carousel from "./itemListContainer" 
import "../App.css"
function Section(){
    return(
        <div className="section_container">
           <h1>PEDI LAS MEJORES HAMBURGUESAS EN *</h1>
           <div class="container">
            <itemListContainer = {greeting}/>
           </div>
            
           
        </div>
    )
}

export default Section