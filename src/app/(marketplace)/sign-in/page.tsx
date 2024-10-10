'use client'

import LogoWithName from '@/components/logoWithName'
import Image from 'next/image'
import { useState } from 'react'

export default function SignIn() {
  const [canSeePassword, setCanSeePassword] = useState(false)

  return (
    <div className="grid grid-cols-2 justify-items-center mb-auto min-h-screen">
      <div className="flex flex-col gap-[3.125rem]">
        <LogoWithName />
        <Image
          alt="Imagem de uma caixa de papelão com a logo do Marketplace no canto inferior direito, no fundo existe uma linha de um gráfico com ondulações e em volta da caixa há três balões com os textos 'Acompanhe os produtos vendidos', 'Gerencie seus anúncios' e 'Veja sua loja crescendo'"
          src={'/background.png'}
          quality={100}
          width={1000}
          height={1000}
          className="my-auto"
        />
      </div>

      <div className="flex flex-col gap-[8.1875rem] my-auto bg-white rounded-[2rem] py-[4.5rem] px-[5rem]">
        <div className="flex flex-col gap-[3rem]">
          <div className="flex flex-col gap-2">
            <h2 className="text-gray-500">Acesse sua conta</h2>
            <span className="body-sm text-gray-300">
              Informe seu e-mail e senha para entrar
            </span>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col">
              <span className="label-md text-gray-300">e-mail</span>
              <div className="flex items-center gap-[0.625rem] border-b border-spacing-[1px] border-gray-100">
                <Image
                  alt=""
                  src="/icons/mail.svg"
                  width={24}
                  height={24}
                  quality={50}
                />
                <input
                  className="body-md w-full placeholder-gray-200 h-[3rem] outline-none"
                  placeholder="Seu e-mail cadastrado"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="label-md text-gray-300">senha</span>
              <div className="flex items-center gap-[0.625rem] border-b border-spacing-[1px] border-gray-100">
                <Image
                  alt=""
                  src="/icons/access.svg"
                  width={24}
                  height={24}
                  quality={50}
                />
                <input
                  className="body-md w-full placeholder-gray-200 h-[3rem] outline-none"
                  type={canSeePassword ? 'text' : 'password'}
                  placeholder="Seu senha de acesso"
                />
                <button
                  className="w-6 h-6"
                  onClick={() => setCanSeePassword(!canSeePassword)}
                >
                  <Image
                    alt=""
                    src="/icons/view.svg"
                    width={24}
                    height={24}
                    quality={50}
                    className="cursor-pointer"
                  />
                </button>
              </div>
            </div>

            <button className="flex items-center justify-between w-full h-[3.5rem] px-5 text-white bg-orange-base rounded-[10px] hover:brightness-105 transition-all ease-in">
              Acessar{' '}
              <Image
                alt=""
                src="/icons/arrow-right-02.svg"
                width={24}
                height={24}
                quality={80}
              />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <span>Ainda não tem um conta?</span>
          <button className="flex items-center justify-between w-full h-[3.5rem] px-5 text-orange-base bg-transparent rounded-[10px] border border-spacing-1 border-orange-base hover:brightness-105 transition-all ease-in">
            Cadastrar{' '}
            <Image
              alt=""
              src="/icons/arrow-right-03.svg"
              width={24}
              height={24}
              quality={80}
            />
          </button>
        </div>
      </div>
    </div>
  )
}
