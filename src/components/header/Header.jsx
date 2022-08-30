import headerStyles from './Header.module.css'
const Header = ()=>{
    console.log(headerStyles)
    return(
        <div className={`${headerStyles.header_block} ${headerStyles.header_active}`}>
            <h1>this is header</h1>
        </div>
    )
}
export default Header