// import NavBarComponent from "./Components/NavBarComponent.js";
import navBarContainerStyles from "./css/NavBarComponent.module.css"
import SearchInputField from "./Components/SearchInputField.js"
import ButtonComponent from "./Components/ButtonComponent.js"
import searchStyle from "./css/SearchInputField.module.css"

function App() {
  return (
    <nav className={navBarContainerStyles.navbarcontainer}>
            <img className={navBarContainerStyles.logoCss} src={require('./assets/qtifyLogo.png')} />
           <SearchInputField />
           <ButtonComponent buttonStyle={searchStyle.giveFeedbackBtn} containIcon={false} text={'Give Feedback'} />
    </nav>
  );
}

export default App;
