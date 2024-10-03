import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Play, Trash2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Theme } from '@/types/themetype'

interface SidebarProps {
  isMinimized: boolean
  setIsMinimized: (value: boolean) => void
  playlists: string[]
  setPlaylists: (value: string[]) => void
  displayedPlaylists: string[]
  onPlaylistClick: (playlist: string) => void
  onDeletePlaylist: (playlist: string) => void
  theme: Theme
}

export default function Sidebar({
  isMinimized,
  setIsMinimized,
  playlists,
  setPlaylists,
  displayedPlaylists,
  onPlaylistClick,
  onDeletePlaylist,
  theme
}: SidebarProps) {
  const [playlistSearch, setPlaylistSearch] = useState('')
  const [newPlaylistName, setNewPlaylistName] = useState('')

  const filteredPlaylists = playlists.filter(playlist => 
    playlist.toLowerCase().includes(playlistSearch.toLowerCase())
  )

  const handleAddPlaylist = () => {
    if (newPlaylistName && !playlists.includes(newPlaylistName)) {
      setPlaylists(prev => [...prev, newPlaylistName])
      setNewPlaylistName('')
    }
  }

  return (
    <aside className={`transition-all duration-300 ${isMinimized ? 'w-16' : 'w-64'}`} style={{ backgroundColor: theme.secondary }}>
      <div className="p-4 flex items-center justify-between">
        <h2 className={`font-bold ${isMinimized ? 'sr-only' : ''}`}>Username's Melodic Vault</h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMinimized(!isMinimized)}
        >
          {isMinimized ? <ChevronRight /> : <ChevronLeft />}
        </Button>
      </div>
      <div className="px-4 mb-2">
        <Input
          placeholder="Search playlists"
          value={playlistSearch}
          onChange={(e) => setPlaylistSearch(e.target.value)}
          style={{ backgroundColor: theme.inputBackground, color: theme.inputText }}
        />
      </div>
      <ScrollArea className="h-[calc(100vh-12rem)]">
        <div className="p-4">
          {filteredPlaylists.map((playlist, index) => (
            <div key={index} className="group relative">
              <Button
                variant="ghost"
                className={`w-full justify-start mb-2 hover:text-white group-hover:outline group-hover:outline-1 group-hover:outline-offset-2 transition-all`}
                onClick={() => onPlaylistClick(playlist)}
                style={{ 
                  color: theme.text,
                  backgroundColor: displayedPlaylists.includes(playlist) ? theme.hoverBackground : 'transparent',
                  outlineColor: theme.hoverOutline,
                }}
              >
                {isMinimized ? <Play size={16} /> : playlist}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-0 top-1 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => onDeletePlaylist(playlist)}
              >
                <Trash2 size={14} className="text-red-500" />
              </Button>
            </div>
          ))}
        </div>
        <div className="p-4">
          <Input
            placeholder="+ Add New Playlist"
            value={newPlaylistName}
            onChange={(e) => setNewPlaylistName(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAddPlaylist()}
            style={{ backgroundColor: theme.inputBackground, color: theme.inputText }}
          />
        </div>
      </ScrollArea>
    </aside>
  )
}