import { Button } from '@/components/ui/button';
import { Bars3Icon } from '@heroicons/react/24/outline';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { navItems } from '../NavList/index.astro';

export function SheetSide() {
  return (
    <div className="block md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Bars3Icon className="size-5" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col gap-8 mt-32">
            {navItems.map((item) => (
              <SheetClose key={item.title}>
                <a href={item.href} className='flex flex-col items-center'>
                  <div className="w-full text-start max-w-2/3 p-4 text-muted-foreground hover:text-primary transition">
                    {item.label}
                  </div>
                </a>
              </SheetClose>
            ))}
          </div>
        </SheetContent>
      </Sheet >
    </div>
  )
}