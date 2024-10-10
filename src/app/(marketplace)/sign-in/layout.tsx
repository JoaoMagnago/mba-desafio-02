import Image from 'next/image'
import { ReactNode } from 'react'

export default function SignInLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex gap-[1.25rem] items-center pt-[2.5rem] pl-[2.5rem]">
        <Image
          alt="Marketplace logo"
          src={'/icons/logo.svg'}
          width={90}
          height={70}
        />

        <div className="flex flex-col gap-4">
          <h1 className={''}>Marketplace</h1>
          <div>Painel de Vendedor</div>
        </div>
      </div>
      {children}
    </div>
  )
}
