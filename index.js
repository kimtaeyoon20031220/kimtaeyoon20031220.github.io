skill_data = [
    {
        "image" : "https://i.pinimg.com/originals/6d/b1/59/6db159df526b6f5584902ebc21daca88.png",
        "desc" : "상태 주기를 활용한 UI를 개발할 수 있고, SQFlite, PageView 등 다양한 라이브러리를 활용할 수 있습니다.",
        "name" : "Flutter"
    },
    {
        "image" : "https://blog.kakaocdn.net/dn/bpzJ8L/btqAHJxe1Ib/x0ZAG10ADHAtc9ItRkLqp0/img.png",
        "desc" : "Kotlin을 활용한 Android Native 화면 개발을 할 수 있으며, MVVM 아키텍처를 적용할 수 있고, Retrofit2를 이용한 서버 요청을 처리할 수 있습니다.",
        "name" : "Kotlin"
    },
    {
        "image" : "https://3.bp.blogspot.com/-VVp3WvJvl84/X0Vu6EjYqDI/AAAAAAAAPjU/ZOMKiUlgfg8ok8DY8Hc-ocOvGdB0z86AgCLcBGAsYHQ/s1600/jetpack%2Bcompose%2Bicon_RGB.png",
        "desc" : "Jetpack Compose의 선언형 문법을 이용한 화면 개발을 할 수 있으며, Google Maps등의 Compose 전용 라이브러리를 사용할 수 있습니다.",
        "name" : "Jetpack Compose"
    },
    {
        "image" : "https://blog.kakaocdn.net/dn/9ZCsE/btqFp43DyIM/c7KHGrjY8OI3bYZvyQeej0/img.png",
        "desc" : "HTML을 이용하여 웹 페이지 구조를 짤 수 있고, CSS로 각종 효과와 디자인을 적용할 수 있습니다.",
        "name" : "HTML/CSS"
    },
    {
        "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
        "desc" : "Javascript를 적용하여 웹 페이지를 동적으로 개발할 수 있습니다.",
        "name" : "Javascript"
    },
]

skill = document.querySelector("#skill");
dataBind(skill, skill_data);

function dataBind(obj, data) {
    for(let i = 0; i < data.length; i++) {
        obj.innerHTML += 
        "<div class='content-img-text-item'>" +
            "<div class='content-img-text-item-img'></div>" +
            "<div class='content-img-text-item-text'>" +
                "<div class='timeline-text-title'>" +
                    skill_data[i]["name"] +
                "</div>" +
                "<div class='timeline-text-content'>" +
                    skill_data[i]["desc"] +
                "</div>" +
            "</div>" + 
        "</div>";

        obj.querySelectorAll(".content-img-text-item-img")[i].style.backgroundImage = `url("${data[i]["image"]}")`

        console.log(data[i]["image"])
    }
}