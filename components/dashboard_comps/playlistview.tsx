import React from 'react'
import { Music } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import SongList from '@/components/dashboard_comps/songlist'
import AddSong from '@/components/dashboard_comps/addsong'
import { Theme } from '@/types/themetype'

interface PlaylistViewProps {
  displayedPlaylists: string[]
  onClosePlaylist: (playlist: string) => void
  theme: Theme
}

export default function PlaylistView({ displayedPlaylists, onClosePlaylist, theme }: PlaylistViewProps) {
  if (displayedPlaylists.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <Music size={64} className="mx-auto mb-4" />
          <h2 className="text-4xl font-bold italic">Start Composing</h2>
        </div>
      </div>
    )
  }

  return (
    <AnimatePresence>
      {displayedPlaylists.map((playlist) => (
        <motion.main
          key={playlist}
          className="flex-1 overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-6 h-full flex flex-col">
            <SongList playlist={playlist} onClosePlaylist={onClosePlaylist} theme={theme} />
            <AddSong playlist={playlist} theme={theme} />
          </div>
        </motion.main>
      ))}
    </AnimatePresence>
  )
}