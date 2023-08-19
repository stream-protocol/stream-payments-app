import Link from 'next/link';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import EnvLabel from '@/components/EnvLabel';
import { DefaultLayoutNavigation } from './DefaultLayoutNavigation';
import { StreamPayMark } from './StreamPayMark';
import { Close } from './icons/Close';
import { Menu } from './icons/Menu';

interface Props {
    className?: string;
    children?: React.ReactNode;
    accountIsActive?: boolean;
}

export function DefaultLayout(props: Props) {
    const [navIsOpen, setNavIsOpen] = useState(false);

    return (
        <main className={twMerge('relative', 'md:grid', 'md:grid-cols-[312px,1fr]', props.className)}>
            <div
                className={twMerge(
                    'bg-black/10',
                    'bottom-0',
                    'fixed',
                    'hidden',
                    'left-0',
                    'right-0',
                    'top-0',
                    'z-10',
                    navIsOpen && 'block',
                    'md:hidden',
                )}
                onClick={() => setNavIsOpen(false)}
            />
            <DefaultLayoutNavigation
                accountIsActive={props.accountIsActive}
                className={navIsOpen ? 'translate-x-0' : '-translate-x-[100%]'}
            />
            <div
                className={twMerge(
                    'border-slate-200',
                    'border-b',
                    'flex',
                    'items-center',
                    'justify-between',
                    'px-3',
                    'py-5',
                    'md:hidden',
                )}
            >
                <Link href="/" className="flex flex-row space-x-2">
                    <StreamPayMark className="h-6" />
                    <EnvLabel />
                </Link>
                <button onClick={() => setNavIsOpen(cur => !cur)}>
                    {navIsOpen ? <Close className="fill-black h-6 w-6" /> : <Menu className="fill-black h-6 w-6" />}
                </button>
            </div>
            <div>{props.children}</div>
        </main>
    );
}
