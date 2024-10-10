import LogoWithName from '@/components/logoWithName'
import Image from 'next/image'

export default function SignIn() {
  return (
    <div className="grid grid-cols-2 justify-items-center mb-auto min-h-screen">
      <div className="flex flex-col gap-[3.125rem]">
        <LogoWithName />
        <Image
          alt=""
          src={'/background.png'}
          quality={100}
          width={1000}
          height={1000}
        />
      </div>

      <div className="my-auto bg-white rounded-[2rem] flex flex-col gap-[8.1875rem] py-[4.5rem] px-[5rem]">
        <div>Login</div>
        <div>Cadastrar</div>
      </div>
    </div>
  )
}
