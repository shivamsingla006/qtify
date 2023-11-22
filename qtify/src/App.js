// import NavBarComponent from "./Components/NavBarComponent.js";
import navBarContainerStyles from "./css/NavBarComponent.module.css"
import SearchInputField from "./Components/SearchInputField.js"
import ButtonComponent from "./Components/ButtonComponent.js"
import searchStyle from "./css/SearchInputField.module.css"
import LogoComponent from "./Components/LogoComponent.js"

function App() {
  return (
    <div className={navBarContainerStyles.navbarcontainer}>
        {/* <NavBarComponent /> */}
        {/* <nav className={navBarContainerStyles.navbarcontainer}> */}
           <LogoComponent />
           <SearchInputField />
           <div>
           <ButtonComponent buttonStyle={searchStyle.giveFeedbackBtn} containIcon={false} text={'Give Feedback'} />
           </div>
        {/* </nav> */}
    </div>
  );
}

export default App;
