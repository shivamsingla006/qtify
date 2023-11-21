import navBarContainerStyles from "../css/NavBarComponent.module.css"
import SearchInputField from "./SearchInputField.js"
import ButtonComponent from "./ButtonComponent.js"
import searchStyle from "../css/SearchInputField.module.css"
import LogoComponent from "./LogoComponent.js"
export default function NavBarComponent(){
    return (
        <div className={navBarContainerStyles.navbarcontainer}>
           {/* <LogoComponent /> */}
           <div className={navBarContainerStyles.logoWrapper}>
                <img className={navBarContainerStyles.logoCss} src={require('../assets/qtifyLogo.png')} />
            </div>
            <div className={searchStyle.searchWrapper}>
                <input className={searchStyle.inputStyle} type="text" placeholder="Search a album of your choice" />
                <ButtonComponent containIcon={true} buttonStyle={searchStyle.buttonStyle} />
            </div>
           <ButtonComponent buttonStyle={searchStyle.giveFeedbackBtn} containIcon={false} text={'Give Feedback'} />
        </div>
    )
}