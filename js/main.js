$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        dots: false,
        margin: 48,
        loop: true,
        responsive : {
            0 : {
                items: 2,
                margin: 32,
                // stagePadding: 90
            },
            601 : {
                items: 3
            },
            1001 : {
                items: 2
            },
            1340 : {
                items: 3,
                margin: 32
            },
            1740 : {
                margin: 48
            }
        }
    });
  });

//   Video

const videoBtn = document.querySelector('#video-btn');
const videoPicture = document.querySelector('.video__picture');
const videoWrapper = document.querySelector('.video__overlay');
const video = document.querySelector('#video-file')


videoWrapper.addEventListener('click', function () {
    if (video.paused) {
        videoPicture.classList.add('hidden');
        videoWrapper.classList.remove('video__overlay');
        videoBtn.classList.add('none');
        video.play();
    } else {
        videoWrapper.classList.add('video__overlay');
        videoBtn.classList.remove('none');
        video.pause();
    }
})

// Mobile Nav

const openNavBtn = document.querySelector('#openMobileNav');
const mobileNav = document.querySelector('#mobileNav');
const closeNavBtn = document.querySelector('#closeMobileNav');

openNavBtn.onclick = function () {
    mobileNav.classList.remove('none');
    document.body.classList.toggle('no-scroll');
}

closeNavBtn.onclick = function () {
    mobileNav.classList.add('none');
    document.body.classList.toggle('no-scroll');
}