window.RufflePlayer = window.RufflePlayer || {};
window.RufflePlayer.config = {autoplay:'on',unmuteOverlay:'hidden',backgroundColor:'#FFFFFF',scale:'showAll',allowScriptAccess:false,allowNetworking:'none',openUrlMode:'deny'};
window.addEventListener('DOMContentLoaded', async () => {
 const status=document.getElementById('status');
 try {
  if(!window.RufflePlayer.newest) throw new Error('Ruffle indisponível');
  const player=window.RufflePlayer.newest().createPlayer();
  document.getElementById('simulador').appendChild(player);
  await player.load({url:document.body.dataset.swf});
  status.hidden=true;
 } catch(error) {
  status.textContent='Não foi possível carregar o simulador. Abra o site por um servidor HTTP ou pelo GitHub Pages e confira os arquivos da pasta ruffle.';
 }
});
