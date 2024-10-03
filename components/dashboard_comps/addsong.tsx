import React, { useState } from 'react'
import { Search, Plus } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Theme } from '@/types/themetype'

interface AddSongProps {
  playlist: string
  theme: Theme
}

export default function AddSong({ playlist, theme }: AddSongProps) {
  const [newSongUrl, setNewSongUrl] = useState('')

  return (
    <div className="mt-8 space-y-4">
      <h3 className="text-xl font-semibold">Let's lengthen that playlist</h3>
      <div className="flex items-center space-x-2">
        <Search size={20} />
        <Input 
          placeholder="Search for New Songs" 
          className="flex-1"
          style={{ backgroundColor: theme.inputBackground, color: theme.inputText }}
        />
      </div>
      <div className="flex items-center space-x-2">
        <Plus size={20} />
        <Input 
          placeholder="Add by URL" 
          className="flex-1"
          value={newSongUrl}
          onChange={(e) => setNewSongUrl(e.target.value)}
          style={{ backgroundColor: theme.inputBackground, color: theme.inputText }}
        />
        <Button style={{ backgroundColor: theme.accent, color: theme.text }}>Add</Button>
      </div>
    </div>
  )
}