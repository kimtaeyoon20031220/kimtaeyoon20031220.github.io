let stackButton = document.querySelectorAll(".content-item-title-1");
let stackButtonNow = document.querySelector(".content-item-title-1");
let stackDesc = document.querySelector(".content-item-desc-1");

stackButtonNow.classList.add("content-item-title-1-active");

let stackInfo = [
    "기존 XML 방식의 UI 개발은 생산성을 저하시키는 요인이었습니다. 보일러 플레이트 코드가 많았고, class에서 UI를 조작하는 방식은 의도하지 않은 실수를 일으켰습니다. 우리는 Jetpack Compose로 선언형 프로그래밍 방식을 도입하여, 직관적인 문법과 불필요한 보일러 플레이트 코드를 제거함으로써 개발 시간을 단축시켰습니다.", 
    "", 
    "", 
    "",
    "",
    ""
];

for (let i = 0; i < stackButton.length; i++) {
    stackButton[i].addEventListener('click', () => {
        stackButton.forEach((el) => {
            el.classList.remove("content-item-title-1-active");
        });
        stackButtonNow = stackButton[i];
        stackButtonNow.classList.add("content-item-title-1-active");
        stackDesc.innerHTML = stackInfo[i];
    })
}

stackDesc.innerHTML = stackInfo[0];