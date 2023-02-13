var typed=new Typed(".variable", {
    strings: ["Full Stack Web Developer", "Coder", "Problem Solver"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed=new Typed(".variable_about", {
    strings: ["Full Stack Web Developer","Coder", "Problem Solver"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
//   var typed=new Typed(".post", {
//     strings: ["Full Stack Web Developer", "Coder", "Problem Solver"],
//     typeSpeed: 100,
//     backSpeed: 60,
//     loop: true,
//   });

$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $("header").toggleClass("toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $("header").removeClass("toggle");

    if ($(window).scrollTop() > 0) {
      $(".top").show();
    } else {
      $(".top").hide();
    }
  });

  // smooth scrolling

  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });
});

function hello() {
  console.log("hii");
}

function gotodrive() {
  window.open(
    "https://drive.google.com/file/d/1f3iTp0zU24L_MB9LjhszOwHuSaGrb9ca/view?usp=share_link"
  );
}

GitHubCalendar(".calendar", "sitansu04");

// or enable responsive functionality:
GitHubCalendar(".calendar", "sitansu04", { responsive: true });

// Use a proxy
const username = "sitansu04";
GitHubCalendar(".calendar", "sitansu04", {
  proxy(username) {
    return fetch(`https://your-proxy.com/github?user=${username}`);
  },
}).then((r) => console.log(r));
