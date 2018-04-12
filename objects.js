var playlist = new Object({ artist: 'song' })

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({},artistName, songTitle)
}