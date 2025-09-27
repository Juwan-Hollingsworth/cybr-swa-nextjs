import { technologiesMenuItems } from '@/data/header';
import { cn } from '@/utils/cn';
import MegaMenuItem from './MegaMenuItem';

interface TechnologiesMenuProps {
  className?: string;
}

const TechnologiesMenu = ({ className }: TechnologiesMenuProps) => {
  return (
    <div>
      <div className="fixed top-full left-1/2 z-50 hidden w-full max-w-[1290px] -translate-x-1/2 overflow-hidden rounded-[20px] bg-transparent py-6 transition-all duration-200 group-focus-within/nav:flex group-hover/nav:flex dark:bg-transparent"></div>
      <div
        className={cn(
          'dark:bg-background-6 border-stroke-1 dark:border-stroke-6 pointer-events-none absolute top-full left-1/2 z-50 mt-2 w-full min-w-[280px] -translate-x-1/2 translate-y-5 overflow-hidden rounded-[20px] border bg-white px-[60px] py-[70px] opacity-0 transition-transform duration-300 group-hover/nav:pointer-events-auto group-hover/nav:translate-y-0 group-hover/nav:opacity-100',
          className,
        )}>
        <div className="grid grid-cols-2 gap-x-8 gap-y-5">
          {technologiesMenuItems.map((item) => (
            <MegaMenuItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologiesMenu;