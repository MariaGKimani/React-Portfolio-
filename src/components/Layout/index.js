import { Outlet } from 'react-router-dom';  // Import Outlet from react-router-dom
import Sidebar from '../Sidebar';
import './index.scss';
import Footer from '../Footer';

const Layout = () => {
    return (
        <div className='App'>
            <Sidebar />
            {/* Outlet  used to tell the React Router,  where the specific page(Home,page should go, depending on what route the user is on. */}
            <div className='page'>
                <Outlet /> 
            </div>
            <Footer /> 
        </div>
    );
}



export default Layout;
