let stackButton = document.querySelectorAll(".content-item-title-1");
let stackButtonNow = document.querySelector(".content-item-title-1");
let stackDesc = document.querySelector(".content-item-desc-1");

stackButtonNow.classList.add("content-item-title-1-active");

let stackInfo = [
    "Android Native로 개발하기 위해서 Kotlin을 도입했습니다. 모두의 정원은 UMC 3기 프로젝트로 제작한 것인데, UMC에서 안드로이드 개발을 위해 Kotlin을 사용하는 정책을 따라 Java 대신 Kotlin을 도입하였습니다.", 
    "기존 XML 방식의 UI 개발은 생산성을 저하시키는 요인이었습니다. 보일러 플레이트 코드가 많았고, class에서 UI를 조작하는 방식은 의도하지 않은 실수를 일으켰습니다. 우리는 Jetpack Compose로 선언형 프로그래밍 방식을 도입하여, 직관적인 문법과 불필요한 보일러 플레이트 코드를 제거함으로써 개발 시간을 단축시켰습니다.", 
    "서버에서 받아온 사진을 표시하기 위해 Glide를 사용하였습니다. Compose 프레임워크에서 Glide를 사용하기 위해 Landscapist 라이브러리를 이용하였습니다.", 
    "클라이언트에서 요청을 하기 위해 JSON 데이터를 만들고, 서버로 전송하기 위해 JSON을 직렬화하는 데 Gson을 사용했습니다.",
    "Local Push Notification을 위해 Firebase Cloud Messaging 기술을 사용하였습니다. 다른 사용자의 클라이언트가 직접 우리 클라이언트에 푸시 알림 전송을 요청하며 작동합니다.",
    "클라이언트에서 서버로 요청을 보낼 때 사용하는 라이브러리입니다."
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