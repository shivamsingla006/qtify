import navBarContainerStyles from "../css/NavBarComponent.module.css"
import SearchInputField from "./SearchInputField.js"
import ButtonComponent from "./ButtonComponent.js"
import searchStyle from "../css/SearchInputField.module.css"
import LogoComponent from "./LogoComponent.js"
export default function NavBarComponent(){
    return (
        <nav className={navBarContainerStyles.navbarcontainer}>
           <LogoComponent />
           <SearchInputField />
           <div style={{cursor: 'pointer'}}>
                <ButtonComponent buttonStyle={searchStyle.giveFeedbackBtn} containIcon={false} text={'Give Feedback'} />
           </div>
        </nav>
    )
}