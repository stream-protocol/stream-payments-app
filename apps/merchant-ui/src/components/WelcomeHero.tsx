import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

interface Props {
    className?: string;
}

export function WelcomeHero(props: Props) {
    return (
        <Image
            className={twMerge(props.className)}
            src="/stream_pay_hero.svg"
            alt="Welcome to StreamPay"
            width={400}
            height={1000}
        />
    );
}
