import { Outlet } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
    return (
        <div>
            <Header />
              <Outlet />
            <Footer />
        </div>
    );
}