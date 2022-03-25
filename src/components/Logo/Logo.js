import styled from "styled-components";
import {Navbar} from 'react-bootstrap'
import './Logo.css'

const MyLogo = styled(Navbar)`
font-family: "Permanent Marker", cursive;
font-size: 25px;
padding-left: 2rem;
`;

const Logo = () => {
    return ( 
        <MyLogo href="#home" className="gradient-text">
          Encuestas Rolling Code!
        </MyLogo>
     );
}
 
export default Logo;