import SiteBar from "../sitebar/SiteBar";
import Profile from "../content/Profile";

function MainSection (){
    return(
       <div className={'main_section'}>
           <SiteBar/>
           <Profile/>
       </div>
    )
}
export default MainSection