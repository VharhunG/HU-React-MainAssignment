import { useState } from "react"
import "./Dropdown.css"

const Dropdown: React.FC<{ changeSort: (text: string) => void}> = (props) => {

    const [isListOpen, setIsListOpen] = useState(false)

    const toggleList = () => {
        setIsListOpen(!isListOpen)
    }

    return (
        <div className="dd-wrapper">
            <div className="dd-header">
            <button
                className="dd-header-btn"
                onClick={toggleList}
            >
                    {"Course Price < >"}
            </button>
            </div>
            {isListOpen && (<div className="dd-list">
                <div>
                <button
                    type="button"
                    className="dd-list-item"
                    key="high"
                    onClick={() => props.changeSort("high")}
                >
                    High to Low
                </button>
                </div>
                <div>
                <button
                    type="button"
                    className="dd-list-item"
                    key="low"
                    onClick={() => props.changeSort("low")}
                >
                    Low to High
                </button>
                </div>
            </div>)}
        </div>
    )
}

export default Dropdown
