const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active')
  })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')

    })
}

function playSound(e){
   
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  
   
    if(!audio) return;
    audio.currentTime = 0
    audio.play()      

}
  
window.addEventListener('keydown', playSound)

 var kick = new Audio();
 kick.src = 'assets/sounds/library-1/Kick.wav';

 var snare = new Audio();
 snare.src = 'assets/sounds/library-1/snare.wav';

 var chh = new Audio();
 chh.src = 'assets/sounds/library-1/ClosedHH.wav';

 var hh = new Audio();
 hh.src = 'assets/sounds/library-1/HH.wav';

 var crash = new Audio();
 crash.src = 'assets/sounds/library-1/Crash.wav';

 var clap = new Audio();
 clap.src = 'assets/sounds/library-1/clap.wav';

 var conga = new Audio();
 conga.src = 'assets/sounds/library-1/Conga.wav';

 var cowbell = new Audio();
 cowbell.src = 'assets/sounds/library-1/Cowbell.wav';

 var shaker = new Audio();
 shaker.src = 'assets/sounds/library-1/Shaker.wav';