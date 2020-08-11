import React from 'react'
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
    return ( 
        <footer>
            <small>
            © 2020 made with <FaHeart style={{ color: 'red' }} /> by -{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://rc4dayyan.github.io">
                rc4dayyan
            </a>
            </small>
        </footer>
     );
}
 
export default Footer;