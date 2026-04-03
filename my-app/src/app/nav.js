import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
    return (
        <nav className="fixed top-0 left-0 h-[6rem] w-[100%] bg-[#1B1B1B] flex items-center justify-between gap-50 z-999">
            <Link href="/">
                <Image src="/LOGO.svg" alt="logo" width={129} height={40} className="ml-[71px] cursor-pointer hover:scale-99 hover:opacity-10 transition-all duration-500"/></Link>
            <ul className="flex gap-20 text-white text-lg mr-[71px]">
                <Link href="/page.js" className=" transition-all duration-200 underline-none hover:text-gray-400">Domů</Link>
                <Link href="/navigator" className=" transition-all duration-200 underline-none hover:text-gray-400">Navigator</Link>
                <Link href="/o-nas" className=" transition-all duration-200 underline-none hover:text-gray-400">O nás</Link>
            </ul>
        </nav>
    )
}
