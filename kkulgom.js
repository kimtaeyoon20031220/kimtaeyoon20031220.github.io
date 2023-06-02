let stackButton = document.querySelectorAll(".content-item-title-1");
let stackButtonNow = document.querySelector(".content-item-title-1");
let stackDesc = document.querySelector(".content-item-desc-1");

stackButtonNow.classList.add("content-item-title-1-active");

let stackInfo = [
    "Android와 iOS를 동시에 개발할 수 있는 Flutter 프레임워크를 이용함으로써 개발 시간을 효과적으로 단축시켰습니다. 프로젝트 기간이 5주인데다, 개발자가 혼자였기 때문에 Native로 개발하면 기간 내에 프로젝트를 완수하지 못했겠지만, Flutter를 도입함으로써 개발 효율성을 높였습니다.", 
    "사용자의 환경 설정 데이터와 날짜 데이터를 SharedPreferences에 저장하였습니다.", 
    "사용자가 챌린지를 한 기록과, 일지 기록, 뱃지 기록 등을 SQFlite를 이용하여 로컬 데이터베이스에 저장하였습니다. 이후 날짜 별로 불러오기, 기록 형태 별로 불러오기 등의 기능을 구현하였습니다.", 
];

for (let i = 0; i < stackButton.length; i++) {
    stackButton[i].addEventListener('click', () => {
        stackButton.forEach((el) => {
            el.classList.remove("content-item-title-1-active");
        });
        stackButtonNow = stackButton[i];
        stackButtonNow.classList.add("content-item-title-1-active");
        stackDesc.innerHTML = stackInfo[i];
    });
}

stackDesc.innerHTML = stackInfo[0];