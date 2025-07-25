// let progress=document.getElementById("progress")
// let song=document.getElementById("song")
// let ctrlIcon=document.getElementById("ctrlIcon")
// let forward=document.getElementById("forward")
// let backward=document.getElementById("backward")


// const songs=[
//     {title:"Perfect",artist:"Luis Fonsi Ft. Puerto Rican",src: "Perfect.mp3"},
//     {title:"Little-Bit-More",artist:"Luis Fonsi Ft. Puerto Rican",src: "Little-Bit-More.mp3"},
//     {title:"Akashi-Chandra-Chandanya",artist:"Luis Fonsi Ft. Puerto Rican",src: "Akashi-Chandra-Chandanya.mp3"}
// ]

// let currentSongIndex=0;

// function playCurrentSong(){
//     song.src=songs[currentSongIndex].src
//     song.play()
//     ctrlIcon.classList.add("fa-pause")
//     ctrlIcon.classList.remove("fa-play")
// }
// function playNextSong(){
//     currentSongIndex=(currentSongIndex+1) % songs.length
//     playCurrentSong()
// }
// function playPreviousSong(){
//     currentSongIndex=(currentSongIndex-1 + songs.length) % songs.length
//     playCurrentSong()
// }
// // song.onloadedmetadata=function(){
// //     progress.max = song.duration
// //     progress.value = song.currentTime
   
// // }


// function playPause(){
//     if(ctrlIcon.classList.contains("fa-pause")){
//         song.pause()
//         ctrlIcon.classList.remove("fa-pause")
//         ctrlIcon.classList.add("fa-play")
//     }
//     else{
//         song.play()
//         ctrlIcon.classList.add("fa-pause")
//         ctrlIcon.classList.remove("fa-play")
//     }
// }


// setInterval(()=>{
// progress.value =song.currentTime
// },500)


// progress.onchange=function(){
//     song.play()
//     song.currentTime=progress.value
//     if(!song.paused){
//         song.play()
//     }
//     ctrlIcon.classList.add("fa-pause")
//     ctrlIcon.classList.remove("fa-play")
// }
// song.addEventListener("ended", function () {
//     ctrlIcon.classList.remove("fa-pause");
//     ctrlIcon.classList.add("fa-play");
//     playNextSong()
// })

// playCurrentSong()

    let progress = document.getElementById("progress");
    let song = document.getElementById("song");
    let ctrlIcon = document.getElementById("ctrlIcon");
    let forwardButton = document.getElementById("forward");
    let backwardButton = document.getElementById("backward");
    let titleElement=document.querySelector("h1")

    function playPause() {
        if (song.paused) {
            song.play();
            ctrlIcon.classList.remove("fa-play");
            ctrlIcon.classList.add("fa-pause");
        } else {
            song.pause();
            ctrlIcon.classList.remove("fa-pause");
            ctrlIcon.classList.add("fa-play");
        }
    }

    song.addEventListener("timeupdate", function() {
        progress.value = song.currentTime;
    });

    progress.oninput = function() {
        song.currentTime = progress.value;
    };

    forwardButton.onclick = function() {
        // Implement logic to play the next song
        playNextSong();
    };

    backwardButton.onclick = function() {
        // Implement logic to play the previous song
        playPreviousSong();
    };

    const songs = [
        { title: "Perfect", artist: "Luis Fonsi Ft. Puerto Rican", src: "Perfect.mp3" },
        { title: "Little-Bit-More", artist: "Luis Fonsi Ft. Puerto Rican", src: "Little-Bit-More.mp3" },
        { title: "Akashi-Chandra-Chandanya", artist: "Luis Fonsi Ft. Puerto Rican", src: "Akashi-Chandra-Chandanya.mp3" }
    ];
    let currentSongIndex = 0;

    function playCurrentSong() {
        titleElement.textContent=songs[currentSongIndex].title
        song.src = songs[currentSongIndex].src;
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }

    function playNextSong() {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        playCurrentSong();
    }

    function playPreviousSong() {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        playCurrentSong();
    }

    song.addEventListener("ended", function () {
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
        playNextSong(); // Automatically play the next song when the current song ends
    });

    // Initial play
    playCurrentSong();

