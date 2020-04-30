
var konamicode = "38384040373937396665"
var pressed = ""
var win = document.getElementById("win");
var fail = document.getElementById("fail");
var theme = document.getElementById("theme");
var click = document.getElementById("click");
theme.play()
document.addEventListener("keydown", function(e){
click.play()
pressed += e.which
if (konamicode == pressed) {
  document.querySelector('.nice').textContent = "YOU WIN!";
  theme.pause()
  win.play()
  var textWrapper =  document.querySelector('.nice');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.nice .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 1000,
    delay: (el, i) => 100 * (i+1)
  }).add({
    targets: '.nice',
    opacity: 0,
    duration: 700,
    easing: "easeOutExpo",
    delay: 700
  });
  setTimeout(function(){ window.location.href = "nice.html"; }, 5000);
} else {
    if (pressed.length === konamicode.length) {
        document.querySelector('.nice').textContent = "WRONG!";
        theme.pause()
        fail.play()
        setTimeout(function(){ document.querySelector('.nice').textContent = "TRY AGAIN!"; }, 2500);
        setTimeout(function(){ window.location.reload(); }, 4000);
    }
}
  })



