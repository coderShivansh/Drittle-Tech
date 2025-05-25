'use client';
import { cn } from '@/lib/functions';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { PropsWithChildren, useEffect, useRef } from 'react';

type Props = { href: string } & PropsWithChildren &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >;

const NOT_ALLOWED_ROUTES = ['/contact'];

/**
 * @param {Props} props
 * @return RCC (React Client Component)
 */
const NavLink = ({ href, children, className, ...props }: Props) => {
  const pathname = usePathname();
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!linkRef.current) return;

    const EL = linkRef.current;

    if (NOT_ALLOWED_ROUTES.some((el) => el === pathname)) {
      EL.closest('ul')?.style.setProperty('--width', `0px`);
      return;
    }

    if (pathname !== href) return;

    EL.closest('ul')?.style.setProperty('--active', props.id || '0');
    EL.closest('ul')?.style.setProperty('--width', `${EL.clientWidth}px`);

    let move = 0;

    const LIS = EL.closest('ul')?.querySelectorAll('li') || [];

    for (let i = 0; i < LIS.length; i++) {
      const li = LIS[i];
      const a = li.querySelector('a');

      if (a?.id === props.id) break;

      move += li?.clientWidth || 0;
    }

    EL.closest('ul')?.style.setProperty('--move', `${move}px`);
  }, [pathname, href, props.id]);

  return (
    <Link
      href={href}
      ref={linkRef}
      id={props.id}
      {...props}
      className={cn(
        'transition-all py-2 inline-block px-6 rounded-full font-medium',
        className,
        pathname === href && 'bg-white text-gray-950'
      )}>
      {children}
    </Link>
  );
};

export default NavLink;
