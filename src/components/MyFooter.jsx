import { NavLink } from "react-bootstrap"



const MyFooter=()=>{
return(
<div className="d-flex justify-content-center mt-5 py-2 bg-info">
<p>se ne volete sapere di piu seguiteci nei social per restare sempre aggiornati sul meteo:</p>
<div className="d-flex mx-3 text-white">
    <navLink><i class="bi bi-instagram me-2"></i></navLink>
    <NavLink><i class="bi bi-twitter-x me-2"></i></NavLink>
    <NavLink><i class="bi bi-facebook me-2"></i></NavLink>
    <NavLink><i class="bi bi-youtube"></i></NavLink>
</div>



 </div>)
 }
export default MyFooter