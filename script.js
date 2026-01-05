let music=false;
function bgm() {

    const song= document.getElementById("song");
    song.volume = 0.6;
    music=true;
    song.play();
}