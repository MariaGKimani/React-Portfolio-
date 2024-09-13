import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import Logo from '../../assets/images/logo1-removebg-preview.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFolder, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';

const Sidebar = () => {
  return (
    <div className='navbar'>
      <Link className='logo' to='/'>
        <img src={Logo} alt='logo' />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#COCED1" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#COCED1" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="project-link" to="/project">
          <FontAwesomeIcon icon={faFolder} color="#COCED1" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#COCED1" />
        </NavLink>
      </nav>

      <ul>
        <li>
            <a target='_blank' rel='' href='https://www.linkedin.com/in/mariagoretti-kimani-/'>
                <FontAwesomeIcon icon={faLinkedin}/>
            </a>
        </li>
        <li>
            <a target='_blank' rel='' href='https://github.com/MariaGKimani'>
                <FontAwesomeIcon icon={faGithub} />
            </a>
        </li>  
        <li>
            <a target='_blank' rel='' href='https://medium.com/@mariakimanigoretti'>
                <FontAwesomeIcon icon={faMedium} />
            </a>
        </li>
        <li>
            <a target='_blank' rel='' href='https://twitter.com/MariagorettiK '>
                <FontAwesomeIcon icon={faTwitter} />
            </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
