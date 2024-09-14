import './index.scss';
import Logo from '../../assets/images/logo3.png'
import CurriculumVitae from '../../assets/documents/Mariagoretti-CV .pdf'

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
                    <h4>Discover More ! &#x2193;</h4>
                    <a href={CurriculumVitae} className="flat-button" download>
                    Download CV
                </a>
              
            </div>

        </div>
    )
}

export default Home;