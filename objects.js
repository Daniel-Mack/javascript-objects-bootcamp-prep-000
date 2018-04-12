var playlist = new Object({ artist: 'song' })

function updatePlaylist(playlist, artistName, songTitle) {
 playlist[artistName] = 'songTitle'
 return playlist
}
 
 var removeFromPlaylist = (playlist, artistName)
 delete removeFromPlaylist.artistName
 return playlist