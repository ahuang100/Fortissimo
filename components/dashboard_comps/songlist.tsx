import React, { useState } from 'react'
import { Music, Play, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Theme } from '@/types/themetype'

interface SongListProps {
  playlist: string
  onClosePlaylist: (playlist: string) => void
  theme: Theme
}

export default function SongList({ playlist, onClosePlaylist, theme }: SongListProps) {
  const [songSearch, setSongSearch] = useState('')
  const songs = Array(20).fill(null).map((_, i) => `Song ${i + 1}`)

  const filteredSongs = songs.filter(song => 
    song.toLowerCase().includes(songSearch.toLowerCase())
  )

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-bold">{playlist}</h2>
        <Button
          variant="ghost"
          size="icon"
          className="transition-colors"
          onClick={() => onClosePlaylist(playlist)}
        >
          <X size={16} className="text-red-500 hover:text-red-700" />
        </Button>
      </div>
      <Input
        placeholder="Search"
        value={songSearch}
        onChange={(e) => setSongSearch(e.target.value)}
        className="mb-4"
        style={{ backgroundColor: theme.inputBackground, color: theme.inputText }}
      />
      <ScrollArea className="flex-grow">
        <div className="space-y-4">
          {filteredSongs.map((song, songIndex) => (
            <div key={songIndex} className="flex items-center justify-between p-4" style={{ backgroundColor: theme.accent }}>
              <div className="flex items-center space-x-4">
                <Music size={24} />
                <span>{song}</span>
              </div>
              <div>
                <Button variant="ghost" size="icon" className="hover:text-green-500 transition-colors">
                  <Play size={16} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-red-500 transition-colors">
                  <X size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </>
  )
}