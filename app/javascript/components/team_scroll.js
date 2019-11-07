var onScrollHandler = function() {
  var newImageUrl = founder.src;
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop > 100) {
     newImageUrl = "menu.jpg"
  }
  // if (scrollTop > 200) {
  //    newImageUrl = "menu.jpg"
  // }
  founder.src = newImageUrl;
};
object.addEventListener ("scroll", onScrollHandler);
