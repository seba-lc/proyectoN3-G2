import styled from "styled-components";
import {Navbar} from 'react-bootstrap'
import './Logo.css'

const MyLogo = styled(Navbar)`
font-family: 'Zen Dots', cursive;
`

const Logo = () => {
    return ( 
      <div className="neon-box">
        <MyLogo href="#home" className="neon-text">
          E21i
        </MyLogo>
        </div>
     );
}
 
export default Logo;