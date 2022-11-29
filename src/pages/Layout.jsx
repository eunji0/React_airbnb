import {Outlet} from 'react-router-dom';
import Header from '../component/Header';
import UnderHeader from '../component/underHeader';
import Footer from '../component/Footer';

function Layout() {
    return(
        <div>
            <Header/>
            <UnderHeader/>
            <Footer />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout;