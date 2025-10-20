import Link from 'next/link';
import { Button } from '../ui/button';
import HeroCarousel from './HeroCarousel';

const Hero = () => {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
      <div>
        <h1 className='max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl'>
          We are changing the way people shop
        </h1>
        <p className='mt-8 max-w-xl text-lg leading-8 text-muted-foreground'>
          Discover a new shopping experience with our curated selection of
          products, designed to inspire and elevate your lifestyle.
        </p>
        <Button asChild size='lg' className='mt-10 text-white'>
          <Link href='/products'>Our Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
};
export default Hero;
