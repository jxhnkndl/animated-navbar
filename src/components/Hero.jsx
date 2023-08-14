import HeroImage from '../assets/hero-image.jpeg';

export default function Hero() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `url(${HeroImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'top'
      }}
    ></div>
  );
}
