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
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-full"
          >
            <Bars3Icon className="size-5" />
          </Button>
        </SheetTrigger>
        <SheetContent onCloseAutoFocus={(event) => event.preventDefault()}>
          <div className="mt-32 flex flex-col gap-8">
            {navItems.map((item) => (
              <SheetClose key={item.title}>
                <div className="flex flex-col items-center">
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-primary w-full max-w-2/3 p-4 text-start transition"
                  >
                    {item.label}
                  </a>
                </div>
              </SheetClose>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
