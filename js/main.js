function showImage(src) {
    document.getElementById("lightbox-img").src = src;
    document.getElementById("lightbox").style.display = "flex";
  }
  
  document.getElementById("lightbox").onclick = function () {
    this.style.display = "none";
  };

  function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
  
    // 等 voices 載入
    const voices = speechSynthesis.getVoices();
  
    if (voices.length > 0) {
      utterance.voice = voices.find(v => v.lang.includes("de")) || voices[0];
    }
  
    utterance.lang = "de-CH";
    utterance.rate = 0.9;
  
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  }