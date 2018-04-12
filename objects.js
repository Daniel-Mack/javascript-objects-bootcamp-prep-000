var playlist = new Object({ artist: 'song' })

function updateplaylist(playlist, artistName, songTitle) {
  return Object.assign({},artistName, songTitle)
}