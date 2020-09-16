var isMobile = !!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
$(document).ready(function () {
  isMobile || particlesJS.load("particles-js", "/static/particles.json"),
    setTimeout(function () {
      $(".wrapper").fadeIn("slow");
    }, 500);
}),
  $(".page").click(function () {
    console.log($(this).attr("page")), changePage($(this).attr("page"));
  }),
  $(".discord").click(function () {
    alert("add me on Discord: @Ian#5898");
  });
function changePage(a) {
  if (1 == a)
    set_hello(), $(".wrapper").removeClass("wrapper-full"), $(".wrapper").css("background-color", "rgb(0, 92, 175)");
  else {
    $(".wrapper").addClass("wrapper-full");
    const a = $(".wrapper").css("background-color"),
      b = ["rgb(0, 137, 108)", "rgb(17, 50, 133)", "rgb(48, 90, 86)", "rgb(69, 96, 45)"];
    do randomColor = b[Math.floor(Math.random() * b.length)];
    while (randomColor == a);
    $(".wrapper").css("background-color", randomColor);
  }
  [1, 2, 3, 4, 5]
    .filter(b => b !== a)
    .forEach(a => {
      $(".page-" + a).fadeOut(400);
    }),
    setTimeout(() => {
      $(".page-" + a).fadeIn(400);
    }, 500);
}
function set_hello() {
  const a = [
    "Hello, there!",
    "Hi, there!",
    "\u4F60\u597D!",
    "\u3053\u3093\u306B\u3061\u306F!",
    "\u3061\u3047\u308B\uFF5E",
  ];
  let b;
  do b = a[Math.floor(Math.random() * a.length)];
  while (b === $(".hello").text());
  $(".hello").text(b);
}
$(".404").click(function () {
  $(".err-title").text(parseInt($(".err-title").text()) + 1);
});
let cache = [0],
  keys = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
$("body").keydown(function (a) {
  10 < cache.push(a.which) &&
    (cache.shift(),
    cache.every((a, b) => a === keys[b]) && ($("body").addClass("nyaa"), $(".hello").text("Nyaaaaa~"), (cache = [])));
});
