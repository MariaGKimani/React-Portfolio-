import './index.scss';
import Logo from '../../assets/images/logo3.png'
import { Link } from 'react-router-dom';

const Home =() =>{
    return(
        <div className='container home'>
            <div className='text-center'>
            <img
                    src={Logo} 
                    alt="Profile" 
                    className="profile-image"
                />
                <h1>Hello&#128075;, <br/>
                I'm Mariagoretti</h1>
                <p>Welcome to my portfolio! I am a passionate software developer <br/>
                    specializing in building amazing web applications.</p>
                    <h4>Get in touch &#x2193;</h4>
                    <Link to="/contact" className='flat-button' > CONTACT ME </Link>
              
            </div>

        </div>
    )
}

export default Home;