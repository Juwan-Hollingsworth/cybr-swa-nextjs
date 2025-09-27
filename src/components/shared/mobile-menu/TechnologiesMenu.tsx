import { technologiesMenuItems } from '@/data/header';
import Link from 'next/link';
import MobileMenuItem from './MobileMenuItem';

const TechnologiesMenu = () => {
  return (
    <MobileMenuItem id="technologies" title="Technologies" hasSubmenu={true}>
      <ul>
        {technologiesMenuItems.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              className="text-tagline-1 text-secondary/60 dark:text-accent/60 border-stroke-4 dark:border-stroke-6 block w-full border-b py-3 text-left font-normal transition-all duration-200">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </MobileMenuItem>
  );
};

TechnologiesMenu.displayName = 'TechnologiesMenu';
export default TechnologiesMenu;