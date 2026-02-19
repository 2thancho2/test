/* ===== 타이핑 ===== */
const basicText = "기초";
const skillText = "실력";

const basicEl = document.getElementById("basic");
const skillEl = document.getElementById("skill");
const cursorBasic = document.getElementById("cursor-basic");
const cursorSkill = document.getElementById("cursor-skill");

let i = 0;
let j = 0;

cursorSkill.style.display = "none";

function typeBasic() {
  if (i < basicText.length) {
    basicEl.textContent += basicText[i++];
    setTimeout(typeBasic, 300);
  } else {
    cursorBasic.style.display = "none";
    cursorSkill.style.display = "inline-block";
    setTimeout(typeSkill, 500);
  }
}

function typeSkill() {
  if (j < skillText.length) {
    skillEl.textContent += skillText[j++];
    setTimeout(typeSkill, 300);
  } else {
    cursorSkill.style.display = "none";
  }
}

typeBasic();

/* ===== 스크롤 애니메이션 (문단 + 체크박스) ===== */
const animatedItems = document.querySelectorAll('.scroll-animate');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

animatedItems.forEach(item => observer.observe(item));

/* ===== 타이핑 스크롤 시 사라짐 ===== */
const typing = document.querySelector('.typing');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    typing.classList.add('hide');
  }
});

/* ===== 체크 시 링크 + 자동 스크롤 ===== */
const checkbox = document.getElementById('agreeCheck');
const linkBox = document.getElementById('linkBox');

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    linkBox.style.display = 'block';
    linkBox.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  } else {
    linkBox.style.display = 'none';
  }
});
