import './Hero.css'

const Hero:React.FC = () => {
  return (
    <div className='hero'>
      <div className='hero_overlay'></div>

      <div className='hero_content'>
        <h1 className='hero_title'>SPOTLIGHT TODAY</h1>
        <p className='hero_description'>
          Deva, a mysterious former union leader played by Rajinikanth, gets
          pulled into a deadly web of smuggling, corruption and organ trafficking
          when he investigates his friend’s suspicious death. As he confronts
          crime lord Simon (Nagarjuna), he must rebuild his old gang to take him
          down in this high-voltage action thriller.
        </p>
         <button className="hero_btn"> Watch Now</button>
      </div>
    </div>
  )
}

export default Hero
