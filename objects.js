var playlist = new Object({ artist: 'song' })

function updateplaylist(artistName, songTitle) {
  return Object.assign({},artistName, songTitle)
}