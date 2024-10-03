import React, { useState, useRef, useEffect } from 'react'
import { SkipBack, Play, Pause, SkipForward, Volume2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Theme } from '@/types/themetype'

interface PlayerProps {
  songProgress: number
  setSongProgress: (value: number) => void
  volume: number
  setVolume: (value: number) => void
  theme: Theme
}

export default function Player({ songProgress, setSongProgress, volume, setVolume, theme }: PlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const progressBarRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true)
    handleMouseMove(e)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging && progressBarRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const width = rect.width
      const progress = Math.min(Math.max(x / width, 0), 1) * 100
      setSongProgress(progress)
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mousemove', handleMouseMove as any)
    return () => {
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mousemove', handleMouseMove as any)
    }
  }, [isDragging])

  return (
    <footer className="p-4" style={{ backgroundColor: theme.primary }}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="icon" 
            style={{ color: theme.iconColor }}
          >
            <SkipBack size={16} />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsPlaying(!isPlaying)}
            style={{ color: theme.iconColor }}
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            style={{ color: theme.iconColor }}
          >
            <SkipForward size={16} />
          </Button>
        </div>
        <div className="text-sm">Currently playing: Song Title</div>
        <div className="flex items-center space-x-2">
          <Volume2 size={20} />
          <Slider
            value={[volume]}
            max={100}
            step={1}
            onValueChange={(value) => setVolume(value[0])}
            className="w-24"
          />
        </div>
      </div>
      <div 
        ref={progressBarRef}
        className="w-full h-2 bg-gray-300 rounded-full overflow-hidden cursor-pointer"
        onMouseDown={handleMouseDown}
      >
        <div 
          className="h-full bg-white" 
          style={{ width: `${songProgress}%`, transition: isDragging ? 'none' : 'width 0.1s ease-out' }}
        ></div>
      </div>
    </footer>
  )
}