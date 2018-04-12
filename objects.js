var playlist = new Object({ artist: 'song' })

updatePlaylist(playlist, artistName, songTitle)

function updateplaylist(artistName, songTitle) {
  return Object.assign({},artistName, songTitle)
}