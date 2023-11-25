// @ts-nocheck 
import Link from 'next/link'
import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'

export default function NotFound() {
  return (
    <SlimLayout backgroundImage={"https://miro.medium.com/v2/resize:fit:1100/format:webp/1*w4lNtRoCqOClLp2WVL_pQw.jpeg"}>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <p className="mt-20 text-sm font-medium text-gray-700">404</p>
      <h1 className="mt-3 text-lg font-semibold text-gray-900">
        Page not found
      </h1>
      <p className="mt-3 text-sm text-gray-700">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <Button href="/" className="mt-10" variant="solid" color="green">
        Go back to homepage
      </Button>
    </SlimLayout>
  )
} 
