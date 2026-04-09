'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'



const links = [
    { name: 'Home', href: '/Home' },
    { name: 'Blog', href:'/Blog'},
    { name: 'About Us', href: '/AboutUs' },
    { name: 'Contact', href: '/Contact' },
      { name: 'Todo', href: '/Todos' },
        { name: 'Gallery', href: '/gallery' },
]

export default function NavBar() {
const path = usePathname()


 return(
    <nav className="flex gap-4 p-4 bg-gray-100  text-black" >
        {links.map(link =>(
            <Link
            key={link.href}
            href={link.href}
            className={path === link.href ? 'text-blue-800' : 'text-gray-500'}
            >
                {link.name}
            </Link>
        ))}
    </nav>
 )

}
