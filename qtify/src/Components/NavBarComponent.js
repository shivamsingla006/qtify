import navBarContainerStyles from "../css/NavBarComponent.module.css"
import SearchInputField from "./SearchInputField.js"
import ButtonComponent from "./ButtonComponent.js"
import searchStyle from "../css/SearchInputField.module.css"
export default function NavBarComponent(){
    return (
        <div className={navBarContainerStyles.navbarcontainer}>
           <img className={navBarContainerStyles.logoCss} src={require('../assets/qtifyLogo.png')} />
           <SearchInputField />
           <ButtonComponent buttonStyle={searchStyle.giveFeedbackBtn} containIcon={false} text={'Give Feedback'} />
        </div>
    )
}