import logo from '../assets/logo.jpg'
import Button from './UI/Button.js'
import {CartContext} from '../store/CartContext.js'
import { useContext } from 'react'


const Header = () => {
    const {cartCount} = useContext(CartContext)
    return (
        <header id="main-header">
            <div id="title">
                <img src={logo}/>
                <h1>React Food Order App</h1>
            </div>
            <nav>
            <Button textOnly={true} >Cart ({cartCount})</Button>
            </nav>
        </header>
    )
}

export default Header