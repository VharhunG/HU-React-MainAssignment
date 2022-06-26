
import { Route, Routes } from 'react-router-dom';

import './App.css';
import NavBar from './Components/UI/Navigation/NavBar';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import CheckoutPage from './pages/CheckoutPage';
import { useSelector } from 'react-redux';
import Modal from './Components/UI/Modal/Modal';
import "@fontsource/montserrat"
import WishlistPage from './pages/WishListPage';
import CourseDetail from './Components/CourseDetail/CourseDetail';

function App() {

  const bannerText = useSelector<RootState, string>((state: RootState) => state.uiReducer.bannerText)
  const showModal = useSelector<RootState, boolean>((state: RootState) => state.uiReducer.showModal)

  interface RootState {
    uiReducer: {
      bannerText: string,
      showModal: boolean
    }
  }

  return (
    <div className='App'>
      {showModal ? <Modal /> : <></> }
        <>
          <NavBar />
          <div style={{"width":"90%","position": "relative","left": "5%"}}>
          <div className="banner">
              <div className='banner-text'>{bannerText}</div>
              <img src="/images/logo-react.png" alt="banner-logo" />
          </div>
          <Routes>
            <Route path='/' element={<DashboardPage />} />
            <Route path='/checkout' element={<CheckoutPage />} />
            <Route path='/wishlist' element={<WishlistPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/course' element={<CourseDetail />} />
          </Routes>
        </div>
        </>
      </div>
    )
}

export default App;
