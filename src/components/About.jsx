// src/components/About.jsx
import profilePhoto from '../assets/profile-photo.jpg';

export default function About() {
  return (
    <section className="section" id="about" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="container about-container">
        
        <div className="about-card">
          
          {/* Image Side */}
          <div className="about-image-wrapper">
            <img 
              src={profilePhoto} 
              alt="Nathanael Setiorahardjo" 
              className="about-image"
              onError={(e) => e.target.style.display = 'none'}
            />
          </div>

          {/* Text Side */}
          <div className="about-content">
            <h2 className="about-heading">
              A little about me.
            </h2>
            <div className="about-text">
              <p>
                Most people call me <strong>Yong</strong>. As a Computer Science student at BINUS University (Class of 2028), my goal is simple: I want to build technology that feels right and helps people who actually need it.
              </p>
              <p>
                Whether I am writing code, or leading my campus music organization, I care deeply about the human impact of what I do.
              </p>
              <p>
                I believe the best technology doesn't just work, it empowers.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}