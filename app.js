function animationStart() {
  let t1 = gsap.timeline();

  t1.from(".logo", {
    opacity: 0,
    y: -40,
    duration: 0.7,
  })
    .from(
      "a",
      {
        opacity: 0,
        y: -40,
        duration: 0.7,
        stagger: 0.19,
      },
      "-=.2"
    )
    .from(
      ".btn",
      {
        opacity: 0,
        y: -40,
        duration: 0.7,
        stagger: 0.2,
      },
      "-=0.7"
    );

  gsap.from(".hero .left", {
    delay: 1.7,
    opacity: 0,
    y: 70,
    duration: 1.5,
    stagger: 0.2,
  });

  gsap.from(".hero .right", {
    delay: 1.7,
    opacity: 0,
    y: 70,
    scale: 0,
    rotate: 30,
    duration: 1.5,
    stagger: 0.2,
  });
}

function scrollAnimation() {
  gsap.to(".ul", {
    x: "-100%",
    duration: 14,
    repeat: -1,
    ease: "none",
    scrollTrigger: {
      trigger: ".ul",
      toggleActions: "play restart play play",
      start: "top center",
      end: "bottom top",
      // markers: true,
    },
  });
}

function cardAnimationOdd() {}

function helpWithCardAnimation() {
  let itemElements = document.querySelectorAll(".item");
  itemElements.forEach((item) => {
    let item_id = parseInt(item.dataset.id);
    if (item_id % 2 !== 0) {
      gsap.from(item, {
        opacity: 0,
        x: -300,
        duration: 1,
        // ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top center",
          end: "bottom center",
          once: true,
        },
      });
    } else {
      gsap.from(item, {
        opacity: 0,
        x: 300,
        duration: 1,
        // ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top center",
          end: "bottom center",
          once: true,
        },
      });
    }
  });
}

function initApp() {
  const bottomContainer = document.querySelector(".bottomContainer");
  let cards = [];
  fetch("card.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      cards = data;
      console.log("got data :", cards);

      if (cards.length > 0) {
        cards.forEach((item) => {
          console.log(item);
          let itemdiv = document.createElement("div");
          itemdiv.classList.add("item");
          itemdiv.innerHTML = `  <div class="card-text">
            <h1>${item.title}</h1>
                  <div class="content">
                    <button>
                      <img src="./noth-east.svg" alt="arrow" />
                    </button>
                    <span>Learn More</span>
                  </div>
                </div>
                <img src="${item.image}" alt="" />`;

          itemdiv.dataset.id = item.id;
          itemdiv.dataset.appear = item.appear;

          bottomContainer.appendChild(itemdiv);
        });
      }
      helpWithCardAnimation();
    });
}
initApp();
animationStart();
scrollAnimation();
// cardAnimation();
