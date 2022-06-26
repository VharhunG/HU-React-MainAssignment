import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { uiActions } from '../../Store/ui-slice'
import CourseList from '../CourseList/CourseList'
import SearchBar from '../SearchBar/SearchBar'
import ShoppingCart from '../ShoppingCart/ShoppingCart'
import './Dashboard.css'

const Dashboard: React.FC = () => {

    const dispatch = useDispatch()

    const [searchKey, setSearchKey] = useState('')

    useEffect(() => {
        dispatch(uiActions.changeBannerText('Discover Latest Courses on React'))
    }, [dispatch])

    return (

        <div>

            <div className='main-content'>
                <CourseList searchKey={searchKey}/>
                <div style={{flex:"1"}}>
                    <SearchBar updateSearchKey={(search) => setSearchKey(search)} />
                    <ShoppingCart />
                </div>
            </div>

        </div>
    )
}

export default Dashboard