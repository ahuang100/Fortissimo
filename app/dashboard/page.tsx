'use client'

import React, { useState, useEffect } from 'react'
import Header from '@/components/dashboard_comps/topbar'
import Player from '@/components/dashboard_comps/player'
import Sidebar from '@/components/dashboard_comps/sidebar'
import PlaylistView from '@/components/dashboard_comps/playlistview'
import { Theme } from '@/types/themetype'

const colors: { light: Theme; dark: Theme } = {
  light: {
    background: '#ffffff',
    foreground: '#000000',
    primary: '#f3f4f6',
    secondary: '#e5e7eb',
    accent: '#d1d5db',
    text: '#111827',
    buttonText: '#4b5563',
    buttonBorder: '#9ca3af',
    inputBackground: '#ffffff',
    inputText: '#000000',
    hoverBackground: '#e5e7eb',
    hoverOutline: '#9ca3af',
    iconColor: '#000000',
    iconHoverColor: '#000000',
  },
  dark: {
    background: '#1f2937',
    foreground: '#ffffff',
    primary: '#374151',
    secondary: '#4b5563',
    accent: '#6b7280',
    text: '#f9fafb',
    buttonText: '#e5e7eb',
    buttonBorder: '#9ca3af',
    inputBackground: '#4b5563',
    inputText: '#ffffff',
    hoverBackground: '#4b5563',
    hoverOutline: '#9ca3af',
    iconColor: '#ffff00',
    iconHoverColor: '#ffff00',
  }
}

export default function Dashboard() {
  const [isLeftSidebarMinimized, setIsLeftSidebarMinimized] = useState(false)
  const [playlists, setPlaylists] = useState(['Playlist 1', 'Playlist 2', 'Playlist 3', 'Playlist 4', 'Playlist 5'])
  const [displayedPlaylists, setDisplayedPlaylists] = useState<string[]>([])
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [songProgress, setSongProgress] = useState(33)
  const [volume, setVolume] = useState(50)

  const theme = isDarkMode ? colors.dark : colors.light


  useEffect(() => {
    document.body.style.backgroundColor = theme.background
    document.body.style.color = theme.text
  }, [isDarkMode, theme.background, theme.text])

  const handlePlaylistClick = (playlist: string) => {
    if (!displayedPlaylists.includes(playlist)) {
      setDisplayedPlaylists(prev => prev.length < 2 ? [...prev, playlist] : [prev[1], playlist])
    }
  }

  const handleClosePlaylist = (playlist: string) => {
    setDisplayedPlaylists(prev => prev.filter(p => p !== playlist))
  }

  const handleDeletePlaylist = (playlist: string) => {
    setPlaylists(prev => prev.filter(p => p !== playlist))
    setDisplayedPlaylists(prev => prev.filter(p => p !== playlist))
  }

  return (
    <div className={`flex flex-col h-screen font-['Quattrocento',_serif]`} style={{ backgroundColor: theme.background, color: theme.text }}>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} theme={theme} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          isMinimized={isLeftSidebarMinimized}
          setIsMinimized={setIsLeftSidebarMinimized}
          playlists={playlists}
          setPlaylists={setPlaylists}
          displayedPlaylists={displayedPlaylists}
          onPlaylistClick={handlePlaylistClick}
          onDeletePlaylist={handleDeletePlaylist}
          theme={theme}
        />
        <PlaylistView
          displayedPlaylists={displayedPlaylists}
          onClosePlaylist={handleClosePlaylist}
          theme={theme}
        />
      </div>
      <Player
        songProgress={songProgress}
        setSongProgress={setSongProgress}
        volume={volume}
        setVolume={setVolume}
        theme={theme}
      />
    </div>
  )
}