function append(value){
    let textarea = document.getElementById('message');
    textarea.value += value;
    textarea.focus();
    playClickSound();
}
function backspace(){
    let textarea = document.getElementById('message');
    textarea.value = textarea.value.slice(0,-1);
    textarea.focus();
    playClickSound();
}
function handleCapsLock() {
    var capsLockButton = document.getElementById('caps');
    var textarea = document.getElementById('message');
    var keyboardButtons = document.querySelectorAll('.keyboard .key');

    if (capsLockButton.classList.contains('active')) 
    {
      capsLockButton.classList.remove('active');
      textarea.style.textTransform = 'none';

      // Convert all keyboard buttons to lowercase
      keyboardButtons.forEach(function (button) {
        button.textContent = button.textContent.toLowerCase();
      });
    } else {
      capsLockButton.classList.add('active');
      textarea.style.textTransform = 'uppercase';

      // Convert all keyboard buttons to uppercase
      keyboardButtons.forEach(function (button) {
        button.textContent = button.textContent.toUpperCase();
      });
    }

    textarea.focus();
    playClickSound();
  }

  function handleEnter() {
    var textarea = document.getElementById('message');
    textarea.value += '\n'; // Append a newline character
    textarea.focus();
    playClickSound();
  }

  function handleSpacebar() {
    var textarea = document.getElementById('message');
    textarea.value += ' '; // Append a space character
    textarea.focus();
    playClickSound();
  }

  function playClickSound() {
    var clickSound = document.getElementById('clickSound');
    clickSound.currentTime = 0; // Reset the audio to the beginning
    clickSound.play();
  }
