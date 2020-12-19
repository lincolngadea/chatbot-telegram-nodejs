const Youtube = require('youtube-node')
const config = require('./yt-config.json')

const youtube = new Youtube();
youtube.setKey(config.key);

youtube.search('Exercício em casa para bíceps', 2, function(error, result){
  if(!error){
    console.log(JSON.stringify(result,null,2))
  }else{
    console.error("Deu zica...")
  }
})