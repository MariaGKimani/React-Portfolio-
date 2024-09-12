import { Outlet } from 'react-router-dom';  // Import Outlet from react-router-dom
import Sidebar from '../Sidebar';
import './index.scss';

const Layout = () => {
    return (
        <div className='App'>
            <Sidebar />
            {/* Outlet  used to tell the React Router,  where the specific page(Home,page should go, depending on what route the user is on. */}
            <div className='page'>
                <Outlet /> 
            </div>
        </div>
    );
}

export default Layout;
