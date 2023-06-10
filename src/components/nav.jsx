import { BsUpload } from 'react-icons/bs'
function Nav() {
    return(
<div className="Nav">
<ul>
<li><a href="/"className="Home">Home</a></li>
<li ><a href="/League"className="League">League</a></li>
<li><a href="/Overwatch" className="Overwatch">Overwatch</a></li>
<li><a href="/Valorant" className="Valorant">Valorant</a></li>
<li><a href="/Misc" className="Misc">Misc</a></li>
<li ><a href="/Upload" className="Upload"><BsUpload/></a></li>

</ul>
</div>
)}


export default Nav