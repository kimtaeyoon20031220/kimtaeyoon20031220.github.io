const topBar = document.querySelector(".top-bar");

const contentTemplate = '<div class="view-content"><div id="content-title"><h1>hihi index 1<h1></div><div id="content-divide"></div><div id="content-image"></div></div>';

const dataBinding = () => {

    const content = {
        "title" : "합성곱 신경망의 이해fkasdfkakljlkfjkj ab",
        "category" : "밑바닥부터 시작하는 딥러닝 1",
        "readin" : 3,
        "date" : {
            "month" : 5,
            "day" : 5,
            "year" : 2023
        },
        "content" : [
            {"index" : "hi", "image" : "", "desc" : ""},
            {"index" : "bye", "image" : "", "desc" : ""},
            {"index" : "333 index", "image" : "", "desc" : ""}
        ]
    }
    
    const mode = {
        "theme":"light",
    };

    document.querySelector("#main_css").href = "test_white.css";

    document.querySelector("#middle-info-title").innerHTML = content["title"];
    document.querySelector("#top-bar-title").innerHTML = content["title"];

    document.querySelector("#top-bar-cat").innerHTML = content["category"];

    document.querySelector("#left-group").innerHTML = "";

    document.querySelector("#middle-info-date").innerHTML = (content["date"]["month"] < 10 ? "0" + content["date"]["month"] : content["date"]["month"]) + "." + (content["date"]["day"] < 10 ? "0" + content["date"]["day"] : content["date"]["day"]) + "." + content["date"]["year"]
    document.querySelector("#middle-info-readin").innerHTML = " " + content["readin"] + "min read"

    for(let i = 0; i < content["content"].length; i++) {
        document.querySelector(".middle").innerHTML += contentTemplate;
        document.querySelector("#left-group").innerHTML += "<span class='index_num'>0"+ (i+1) +"</span>";
        document.querySelectorAll("#content-title")[i].innerHTML = content["content"][i]["index"];
    }
}

dataBinding();

let contentView = document.querySelectorAll(".view-content");
let contentIndex = document.querySelectorAll(".index_num");

let one = -1;
let pre = -1;

let scrollTime = 0;

addEventListener("mousewheel", e => {
    if (e.deltaY > 0) { // 아래로 내려가면.
        topBar.classList.remove("active");
        scrollTime += 1;
    } else {
        scrollTime -= 1;
        if (this.scrollY > 100) {
            topBar.classList.add("active");
        } else {
            topBar.classList.remove("active");
        }
    }
    console.log(scrollTime);
});