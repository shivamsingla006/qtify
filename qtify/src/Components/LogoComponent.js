import navBarContainerStyles from "../css/NavBarComponent.module.css"
export default function LogoComponent(){
    return (
        <div className={navBarContainerStyles.logoWrapper}>
            <img className={navBarContainerStyles.logoCss} src={require('../assets/qtifyLogo.png')} />
        </div>
    )
}