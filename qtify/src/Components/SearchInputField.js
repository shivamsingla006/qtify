import searchStyle from "../css/SearchInputField.module.css"
import ButtonComponent from "./ButtonComponent.js"
export default function SearchInputField(){
    return (
        <div className={searchStyle.searchWrapper}>
            <input className={searchStyle.inputStyle} type="text" placeholder="Search a album of your choice" />
            <ButtonComponent containIcon={true} buttonStyle={searchStyle.buttonStyle} />
        </div>
    )
}