let initialSrc = "/assets/founder-13e9c0be46a53c4859ae85334a2815bf7846ea7bfa6a3da4a2a86a2510e33977.jpg";
let scrollSrc = "/assets/menu-e68d9ac20913e080e8af1ec562b3bf1628ab24a0c55e2d51da68cc7e170712ce.jpg";
// let element = document.getElementById("abc");

$(window ).scroll(function() {
  // If user didn't scroll 500px set default z-index
  if ($(this).scrollTop()>500) {
    $(".person").attr("src", scrollSrc);
    // element.classList.add("hidden");
  } else {
      // If user scrolled 1200px change logo's z-index to 9999
      $(".person").attr("src", initialSrc);
      // element.classList.remove("hidden");
  }
});

// $(window).scroll(function() {
//    let value = $(this).scrollTop();
//    // if (value > 750)
//    if (value > 500)
//       $(".person").attr("src", scrollSrc);
//    else
//       $(".person").attr("src", initialSrc);
// });

// <img class="person" src="/assets/founder-13e9c0be46a53c4859ae85334a2815bf7846ea7bfa6a3da4a2a86a2510e33977.jpg">
// <img class="person" src="/assets/founder-3e9c0be46a53c4859ae85334a2815bf7846ea7bfa6a3da4a2a86a2510e33977.jpg">
// <img class="person" src="/assets/founder-13e9c0be46a53c4859ae85334a2815bf7846ea7bfa6a3da4a2a86a2510e33977.jpg">
// <img alt="alttext" src="/assets/menu-e68d9ac20913e080e8af1ec562b3bf1628ab24a0c55e2d51da68cc7e170712ce.jpg">

// src="/assets/founder-3e9c0be46a53c4859ae85334a2815bf7846ea7bfa6a3da4a2a86a2510e33977.jpg"
// $(document).ready(function(){
//     var offset2 = $(document).height();
//    var lineHF = offset2 - $("#bottommark").position().top;
//     $(window).scroll(function(){
//         var offset1 = $(document).height();
//         var offset = $(window).scrollTop();
//         var lineH = offset1 - $("#bottommark").position().top - offset;
//         var lineHpart = lineHF/5; //just in case animation have 5 frames/images

//         //below is code in case that animation have 5 frames.
//         //If number of frames is different, edit code (add/remove if loops)

//         $("span").html(lineH);
//             if (lineH > lineHpart*4) {
//                 $("#animation").attr("src", "founder.jpg");
//             }
//             if ((lineH < lineHpart*4) && (lineH > lineHpart*3)) {
//                 $("#animation").attr("src", "menu.jpg");
//             }
//         });
//     });

// const onScrollHandler = function() {
//   let newImageUrl = image.src;
//   let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//   if (scrollTop > 100) {
//      newImageUrl = "menu.jpg"
//   }
//   // if (scrollTop > 200) {
//   //    newImageUrl = "menu.jpg"
//   // }
//   image.src = newImageUrl;
// };
// object.addEventListener ("scroll", onScrollHandler);
