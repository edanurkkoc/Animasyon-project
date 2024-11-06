
document.body.style.backgroundColor = "black";

const words = document.querySelectorAll('.inner-headings .slide span');
const body = document.body;
let currentWordIndex = 0;

// Her kelime için animasyon süresini hesapla
const animationDuration = 10000; // 10 saniye
const displayDuration = animationDuration / words.length; // Her kelime için süre

// İlk kelime için arka plan rengini ayarla
function updateBackgroundColor() {
    const currentWord = words[currentWordIndex];
    const color = currentWord.getAttribute('data-color'); // data-color niteliğini al
    body.style.backgroundColor = color; // body arka plan rengini değiştir
}

// Kelime değişimlerini kontrol et
function changeWords() {
    updateBackgroundColor(); // Arka plan rengini güncelle
    currentWordIndex = (currentWordIndex + 1) % words.length; // Sonraki kelimeye geç
}

// Kelimeleri değiştir ve arka planı güncelle
setInterval(changeWords, 2000);
