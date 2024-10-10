import Image from 'next/image'

export default function LogoWithName() {
  return (
    <div className="flex gap-[1.25rem] items-center pt-[2.5rem] pl-[2.5rem]">
      <Image
        alt="Marketplace logo"
        src={'/icons/logo.svg'}
        width={90}
        height={70}
      />

      <div className="flex flex-col gap-4">
        <h1 className="text-gray-500">Marketplace</h1>
        <div className="body-md text-gray-400">Painel de Vendedor</div>
      </div>
    </div>
  )
}
