import searchIcon from '../../logo/search-icon.svg'
import './SearchBar.css'

const SearchBar: React.FC<{updateSearchKey: (search: string) => void}> = (props) => {

    const handleChange = (e: { target: { value: string; }; }) => {
        props.updateSearchKey(e.target.value)
    };

    return (
        <div className='search-bar-div'>
            <input type="text" role="textbox" onChange={handleChange} className="search-bar" placeholder='Search Here'/>
            <img src={searchIcon} alt="search-icon" style={{backgroundColor: "#FF6738", "padding":"11px"}} />
        </div>
    )
}

export default SearchBar