const birthdayCard = document.querySelector(".birthdayCard")
let isOpen = false
let imageInterval;
const backgroundMusic = document.getElementById("background-music");

const images = [
  "url('assets/we.webp')",
  "url('assets/we2.webp')",
  "url('assets/we3.webp')",
  "url('assets/we4.webp')",
  "url('assets/we5.webp')"
]; // 사용할 이미지 리스트

birthdayCard.addEventListener("click", () => {
    if(isOpen) {
        birthdayCard.classList.remove('open')
        isOpen = false
        clearInterval(imageInterval);

            // 배경음악 중단
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0; // 음악을 처음으로 되돌림
    } else {
        birthdayCard.classList.add('open')
        const imageElement = birthdayCard.querySelector('.image');
        isOpen = true
        let currentImageIndex = 0;
         imageElement.classList.add('visible'); // 처음 열 때는 투명도를 조정하여 나타나도록
        imageElement.style.backgroundImage = images[currentImageIndex];
        imageInterval = setInterval(() => {
             console.log("Changing background image...");

            // 애니메이션 효과를 위해 이미지 변경 전에 투명하게 만듦
            imageElement.classList.remove('visible');

            setTimeout(() => {
                // 이미지 백그라운드를 변경
                currentImageIndex = (currentImageIndex + 1) % images.length;
                imageElement.style.backgroundImage = images[currentImageIndex];

                // 이미지가 변경된 후에 다시 나타나도록 함
                imageElement.classList.add('visible');
            }, 1000); // 투명하게 된 후에 이미지를 교체 (1초 후에 변경)
        }, 3000); // 2초마다 이미지 변경

          backgroundMusic.play();
    }
})