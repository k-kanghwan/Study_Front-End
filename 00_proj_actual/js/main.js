const backToTop = document.getElementById("backtotop");

const checkScroll = () => {
  let scrollY = window.scrollY;

  if (scrollY !== 0) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
};

const moveBackToTop = () => {
  if (window.scrollY > 0) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};

window.addEventListener("scroll", checkScroll);

backToTop.addEventListener("click", moveBackToTop);

/* ---------------------------------------------------- */
function transformNext(e) {
  const slideNext = e.target; // 클릭한 슬라이드 다음 버튼
  const slidePrev = slideNext.previousElementSibling; // 슬라이드 이전 버튼

  const classList = slideNext.parentElement.parentElement.nextElementSibling; // ul 태그 선택
  let activeLi = classList.getAttribute("data-position");
  const liList = classList.getElementsByTagName("li");

  if (Number(activeLi) < 0) {
    activeLi = Number(activeLi) + 260;

    slidePrev.style.color = "#0433bf";
    slidePrev.classList.add("slide-prev-hover");
    slidePrev.addEventListener("click", transformPrev);

    if (Number(activeLi) === 0) {
      slideNext.style.color = "#ccc";
      slideNext.classList.remove("slide-next-hover");
      slideNext.removeEventListener("click", transformNext);
    }
  }

  classList.style.transition = "transform 0.5s";
  classList.style.transform = "translateX(" + activeLi + "px)";
  classList.setAttribute("data-position", activeLi);
}

function transformPrev(e) {
  const slidePrev = e.target; // 클릭한 슬라이드 이전 버튼
  const slideNext = slidePrev.nextElementSibling; // 슬라이드 다음 버튼

  // ul 태그 선택
  const classList = slidePrev.parentElement.parentElement.nextElementSibling;
  let activeLi = classList.getAttribute("data-position");
  const liList = classList.getElementsByTagName("li");

  if (classList.clientWidth < liList.length * 260 + Number(activeLi)) {
    activeLi = Number(activeLi) - 260;

    if (classList.clientWidth > liList.length * 260 + Number(activeLi)) {
      slidePrev.style.color = "#ccc";
      slidePrev.classList.remove("slide-prev-hover");
      slidePrev.removeEventListener("click", transformPrev);
    }

    slideNext.style.color = "#0433bf";
    slideNext.classList.add("slide-next-hover");
    slideNext.addEventListener("click", transformNext);
  }

  classList.style.transition = "transform 0.5s";
  classList.style.transform = "translateX(" + activeLi + "px)";
  classList.setAttribute("data-position", activeLi);
}

const slidePrevList = document.getElementsByClassName("slide-prev");

for (let i = 0; i < slidePrevList.length; i++) {
  // ul 태그 선택
  let classList =
    // error Uncaught TypeError: Cannot read properties of undefined (reading 'parentElement')
    slidePrevList[i].parentElement.parentElement.nextElementSibling;
  let liList = classList.getElementsByTagName("li");

  if (classList.clientWidth < liList.length * 260) {
    // 슬라이드 이전 버튼 활성화
    slidePrevList[i].classList.add("slide-prev-hover");
    slidePrevList[i].addEventListener("click", transformPrev);
  } else {
    const arrowContainer = slidePrevList[i].parentElement;
    arrowContainer.removeChild(slidePrevList[i].nextElementSibling);
    arrowContainer.removeChild(slidePrevList[i]);
  }
}
