import stylesSiteBar from './SiteBar.module.css'
function SiteBar(){
    return(
        <div className={stylesSiteBar.sitebar_block}>
            <h1>this is sitebar</h1>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Account</a></li>
            </ul>
        </div>
    )
}
export default SiteBar