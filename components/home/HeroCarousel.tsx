import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import hero1 from '@/public/images/hero1.jpg';
import hero2 from '@/public/images/hero2.jpg';
import hero3 from '@/public/images/hero3.jpg';
import hero4 from '@/public/images/hero4.jpg';
import hero5 from '@/public/images/hero5.jpg';
import hero6 from '@/public/images/hero6.jpg';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';

export const carouselImages = [hero1, hero2, hero3, hero4, hero5, hero6];

const HeroCarousel = () => {
  return (
    <div className='hidden lg:block'>
      <Carousel>
        <CarouselContent>
          {carouselImages.map((image, index) => {
            return (
              <CarouselItem key={index}>
                <Card className='py-0'>
                  <CardContent className='p-2'>
                    <Image
                      src={image}
                      alt={`carousel image ${index + 1}`}
                      priority
                      className='w-full h-[24rem] rounded-md object-cover'
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
export default HeroCarousel;

// import * as React from 'react';

// import { Card, CardContent } from '@/components/ui/card';
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from '@/components/ui/carousel';

// export default function HeroCarousel() {
//   return (
//     <Carousel className='w-full max-w-xs'>
//       <CarouselContent>
//         {carouselImages.map((image, index) => {
//           return (
//             <CarouselItem key={index}>
//               <div className='p-1'>
//                 <Card>
//                   <CardContent className='flex aspect-square items-center justify-center p-2'>
//                     <Image
//                       src={image}
//                       alt={`carousel image ${index + 1}`}
//                       className='w-full rounded-md object-cover'
//                     />
//                   </CardContent>
//                 </Card>
//               </div>
//             </CarouselItem>
//           );
//         })}
//         {Array.from({ length: 5 }).map((_, index) => (
//           <CarouselItem key={index}>
//             <div className='p-1'>
//               <Card>
//                 <CardContent className='flex aspect-square items-center justify-center p-6'>
//                   <span className='text-4xl font-semibold'>{index + 1}</span>
//                 </CardContent>
//               </Card>
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//   );
// }
