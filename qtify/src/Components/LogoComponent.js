import navBarContainerStyles from "../css/NavBarComponent.module.css"
export default function LogoComponent(){
    return (
        <img className={navBarContainerStyles.logoCss} src={require('../assets/qtifyLogo.png')} />
    )
}