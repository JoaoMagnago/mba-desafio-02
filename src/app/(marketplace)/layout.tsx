import { ReactNode } from 'react'

export default function MarketplaceLayout({
  children,
}: {
  children: ReactNode
}) {
  return <div className="mx-auto min-h-screen w-full">{children}</div>
}
