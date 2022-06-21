// local reviews data
const reviews = [
    {
      id: 1,
      name: "Andy Lau",
      job: "Full-Stack Developer",
      img:
        "https://res.cloudinary.com/deeztyphoon0529/image/upload/v1655698414/andy_lau_kbrjii.jpg",
      text:
        "Andy Lau Tak-wah BBS MH JP is a Hong Kong actor, singer-songwriter and film producer. He has been one of Hong Kong's most commercially successful film actors since the mid-1980s, performing in more than 160 films while maintaining a successful singing career at the same time. In the 1990s, Lau was branded by the media as one of the Four Heavenly Kings of Cantopop and was named as Fourth Tiger among the Five Tiger Generals of TVB during the 1980s. In the Philippines, he was previously given the screen name Ricky Chan.",
    },
    {
      id: 2,
      name: "Ruby Lin",
      job: "Software Engineer",
      img:
        "https://res.cloudinary.com/deeztyphoon0529/image/upload/v1655698423/Ruby-Lin_csadgz.jpg",
      text:
        "Ruby Lin Xinru is a Taiwanese actress, television and film producer, and pop singer. American entertainment critic Derek Elley named Lin as Taiwan TV Drama Queen",
    },
    {
      id: 3,
      name: "Typhoon",
      job: "Senior Software Engineer",
      img:
        "https://res.cloudinary.com/deeztyphoon0529/image/upload/v1655697276/profile_yftgmp.jpg",
      text:
        "Develop tools and applications by producing clean, efficient code",
    },
    {
      id: 4,
      name: "Zhang Ziyi",
      job: "Intern",
      img:
        "https://res.cloudinary.com/deeztyphoon0529/image/upload/v1655698435/zhang-ziyi_bqhoyb.jpg",
      text:
        "Zhang Ziyi is a Chinese actress and model. She is regarded as one of the Four Dan Actresses of China. Her first major role was in The Road Home.",
    },
  ];

  // select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

