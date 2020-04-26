import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

export const HeaderNavLink: React.FC<{ href: string }> = ({
  href,
  children
}) => {
  const router = useRouter()
  const active = router.pathname === href
  return (
    <Link href={href}>
      <a
        className={
          (active
            ? 'text-gray-900 font-bold hover:text-black'
            : 'text-gray-600 hover:text-gray-900') +
          ' inline-block py-2 px-4 no-underline'
        }
      >
        {children}
      </a>
    </Link>
  )
}
