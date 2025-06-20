import { Routes, Route, Link } from "react-router-dom"
import Home from './Home'
import About from './About'
import Certificates from './Certificates'
import Projects from './Projects'
import Contacts from './Contacts'

function Header() {
    return (
        <>
            <nav>
                <ul>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/certificates'}>Certificates</Link>
                    <Link to={'/projects'}>Projects</Link>
                    <Link to={'/contacts'}>Contacts</Link>
                </ul>
            </nav>

            <header>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/certificates' element={<Certificates/>}/>
                    <Route path='/projects' element={<Projects/>}/>
                    <Route path='/contacts' element={<Contacts/>}/>
                </Routes>
            </header>
        </>
    )
}

export default Header