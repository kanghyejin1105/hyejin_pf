$(document).ready(function(){

// const observer = new IntersectionObserver(
//   (entries, observer) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//             entry.target.classList.add("fade-in");
//           } else {
//             entry.target.classList.remove("fade-in");
//             }
//           });
//         },
//         { threshold: 0.5}
//       );
//       const targetElements = document.querySelectorAll(".info");
//       targetElements.forEach((element) => {
//         observer.observe(element);
//       });


    //slide
    $(".list_wrap").slick({
      centerMode: true,
      centerPadding: "100px",
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,

      //반응형포인트
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });
      });
      
