import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <nav className="space-x-6 mb-4 md:mb-0">
          <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">About</Link>
          <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Socials</Link>
          <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Feedback</Link>
        </nav>
        <div className="text-sm text-gray-600">© 2024 Fortissimo. All rights reserved.</div>
      </div>
    </footer>
  )
}