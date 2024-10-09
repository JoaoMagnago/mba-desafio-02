import Image from 'next/image'

export default function SignIn() {
  return (
    <div className="grid grid-cols-2 justify-items-center my-auto">
      <Image
        alt=""
        src={'/background.png'}
        quality={100}
        width={1000}
        height={1000}
        className="border border-spacing-2"
      />
      <div className="">Form</div>
    </div>
  )
}
