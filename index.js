skill_data = [
    {
        "image" : "https://i.pinimg.com/originals/6d/b1/59/6db159df526b6f5584902ebc21daca88.png",
        "desc" : "~~~를 만들 수 있고, ~~~한 능력을 가지고 있습니다. 또한 ~~~ 라이브러리를 사용할 수 있으며, ~~~한 서비스를 만들 수 있습니다.",
        "name" : "Flutter"
    },
    {
        "image" : "https://blog.kakaocdn.net/dn/bpzJ8L/btqAHJxe1Ib/x0ZAG10ADHAtc9ItRkLqp0/img.png",
        "desc" : "medium",
        "name" : "Kotlin"
    },
    {
        "image" : "https://3.bp.blogspot.com/-VVp3WvJvl84/X0Vu6EjYqDI/AAAAAAAAPjU/ZOMKiUlgfg8ok8DY8Hc-ocOvGdB0z86AgCLcBGAsYHQ/s1600/jetpack%2Bcompose%2Bicon_RGB.png",
        "desc" : "medium",
        "name" : "Jetpack Compose"
    },
    {
        "image" : "https://blog.kakaocdn.net/dn/9ZCsE/btqFp43DyIM/c7KHGrjY8OI3bYZvyQeej0/img.png",
        "desc" : "high",
        "name" : "HTML/CSS"
    },
    {
        "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
        "desc" : "low",
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