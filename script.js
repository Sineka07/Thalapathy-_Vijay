function bgm() {
    const song = document.getElementById("song");
    song.volume = 0.6;
    song.load();   // important
    song.play().catch(err => {
        console.log("Audio play error:", err);
    });
}
//function leo() {
  //  const thrisha = document.getElementById("thrisha");
   // thrisha.volume = 0.6;
   // thrisha.load();   // important
   // thrisha.play().catch(err => {
     //   console.log("Audio play error:", err);
   // });
//}

function leo() {
    const thrisha = document.getElementById("thrisha");

    if (thrisha.paused) {
        thrisha.volume = 0.6;
        thrisha.play().catch(err => {
            console.log("Audio play error:", err);
        });
    } else {
        thrisha.pause();
        thrisha.currentTime = 0; // optional: restart from beginning
    }
}


