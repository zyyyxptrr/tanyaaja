'use client'

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import Image from "next/image"
import Link from "next/link"

import image404 from "../../../../../public/images/404.png"

export default function NotFound () {
  return (
    <main className="w-full container py-8">
      <div className="w-full space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">
          Halaman tidak ditemukan!
        </h2>
        <p className="text-muted-foreground">
          Kami tidak dapat menemukan halaman yang Anda tuju, silahkan koreksi kembali alamat tujuan Anda atau kembali ke beranda
        </p>
      </div>
      <Separator className="my-6" />

      <div className="w-full flex flex-col gap-4 items-center justify-center">
        <Image src={image404} alt="Kucing menjatuhkan vas bunga" width={500} height={500} />
        <Button className="flex gap-2 items-center" asChild>
          <Link href="/login">
            Kembali ke beranda
            <ArrowRightIcon className="w-6 h-6" />
          </Link>
        </Button>
      </div>
    </main>
  )
}