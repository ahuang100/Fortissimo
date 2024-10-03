'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Taskbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
      <div className="text-2xl font-bold">Fortissimo</div>
      <nav className="space-x-4">
        <Link href="/sign-up" passHref>
          <Button variant="outline" className="text-gray-900 border-gray-300 hover:bg-gray-100">
            Sign Up
          </Button>
        </Link>
        <Link href="/log-in" passHref>
          <Button className="bg-gray-900 text-white hover:bg-gray-800">
            Log In
          </Button>
        </Link>
      </nav>
    </header>
  )
}