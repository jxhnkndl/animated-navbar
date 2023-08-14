import HeroImage from '../assets/hero-image.jpg';

export default function Hero() {
  return (
    <div
      className="min-h-screen grid grid-cols-2 lg:grid-cols-3"
      style={{
        backgroundImage: `url(${HeroImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
    </div>
  );
}
