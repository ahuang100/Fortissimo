import React from 'react'
import { Frame } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Theme } from '@/types/themetype'

interface HeaderProps {
  isDarkMode: boolean
  setIsDarkMode: (value: boolean) => void
  theme: Theme
}

export default function Header({ isDarkMode, setIsDarkMode, theme }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-6 py-4" style={{ backgroundColor: theme.primary }}>
      <div className="flex items-center space-x-4">
        <Frame size={32} />
        <h1 className="text-2xl font-bold">Fortissimo</h1>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="outline" className="transition-colors duration-300 ease-in-out" style={{ color: theme.buttonText, borderColor: theme.buttonBorder, backgroundColor: 'transparent' }}>Music Chamber</Button>
        <Button variant="outline" className="transition-colors duration-300 ease-in-out" style={{ color: theme.buttonText, borderColor: theme.buttonBorder, backgroundColor: 'transparent' }}>Log Out</Button>
        <div className="flex items-center space-x-2">
          <span>🌙</span>
          <Switch checked={isDarkMode} onCheckedChange={setIsDarkMode} />
          <span>☀️</span>
        </div>
      </div>
    </header>
  )
}