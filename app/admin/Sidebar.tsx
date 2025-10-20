'use client';
import { adminLinks } from '@/utils/links';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

const Sidebar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <aside>
      {adminLinks.map((link) => {
        const isActivePage = pathname === link.href;
        const variant = isActivePage ? 'default' : 'ghost';
        return (
          <Button
            asChild
            key={link.href}
            className='w-full text-white mb-2 capitalize font-normal justify-start'
            variant={variant}
          >
            <Link href={link.href}>{link.label}</Link>
          </Button>
        );
      })}
    </aside>
  );
};
export default Sidebar;
