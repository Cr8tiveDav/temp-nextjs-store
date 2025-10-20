import { LuUser } from 'react-icons/lu';
import Image from 'next/image';
import { currentUser, auth } from '@clerk/nextjs/server';

const UserIcon = async () => {
  // const {userId} = await auth()
  const user = await currentUser();
  const profileImage = user?.imageUrl;

  if (profileImage) {
    return (
      <Image
        src={profileImage}
        alt='User Profile'
        sizes='(nax-width:768px) 100vw, (max-width:1100px) 50vw, 33vw'
        width={24}
        height={24}
        priority
        className='rounded-full object-cover'
      />
    );
  }
  return <LuUser className='w-6 h-6 bg-primary rounded-full text-white' />;
};

export default UserIcon;
