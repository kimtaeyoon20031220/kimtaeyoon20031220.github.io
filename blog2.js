content = {
    "title" : "타이틀 디자인 title design",
    "thumbnail" : "https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1129780/regular_1708x683_0417-an-introduction-to-deep-learning-from-perceptrons-to-deep-networks-Waldek_Newsletter-5078bdbf19aea7271f07061a3e17c463.png",
    "category" : "딥러닝",
    "date" : "2023년 5월 3일",
    "content" : [
        {
            "type" : "img",
            "content" : "https://cdn.pixabay.com/photo/2023/05/19/18/01/ai-generated-8005083_1280.png",
        },
        {
            "type" : "img-desc",
            "content" : "https://pixabay.com/ko/illustrations/ai-%EC%83%9D%EC%84%B1-%EA%B8%B0%EC%88%A0-%EA%B8%B0%EA%B3%84-%ED%95%99%EC%8A%B5-8005083/",
        },
        {
            "type" : "title",
            "content" : "인공지능의 초기 모델: 퍼셉트론."
        },
        {
            "type" : "box",
            "title" : "오늘의 에디션",
            "content" : "인공지능의 기본, 퍼셉트론."
        },
        {
            "type" : "text",
            "content" : "컨텐츠입니다.<br>컨텐츠 작성."
        }, 
        {
            "type" : "img",
            "content" : "https://t1.kakaocdn.net/thumb/R1920x0.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fnews%2F7434b79a018800001.jpg"
        }
    ]
};

let contentDiv = document.querySelector(".content");

dataBinding(content);

function dataBinding(content) {

    let j = 0; //이미지 데이터 바인딩 대비 (이미지 순서 체크)

    document.querySelector(".top-meta").innerHTML += content["category"] + " &bullet; " + content["date"];
    document.querySelector(".title").innerHTML += content["title"];
    document.querySelector(".thumbnail").style.backgroundImage = `url("${content["thumbnail"]}")`;

    for (let i = 0; i < content["content"].length; i++) {
        switch (content["content"][i]["type"]) {
            case "img":
                contentDiv.innerHTML += "<div class='content-item-img'></div>";
                console.log(document.querySelectorAll(".content-item-img")[j]);
                document.querySelectorAll(".content-item-img")[j].style.backgroundImage = `url("${content["content"][i]["content"]}")`;
                j++;
                break;
            case "img-desc":
                contentDiv.innerHTML += "<div class='content-item-img-desc'>" + content["content"][i]["content"] + "</div>";
                break;
            case "title":
                contentDiv.innerHTML += "<div class='content-item-text-title'>" + content["content"][i]["content"] + "</div>";
                break;
            case "box":
                if (content["content"][i]["title"] != "") {
                    contentDiv.innerHTML += "<div class='content-item-text-box'>" + "<div class='content-item-text-box-title'>" + content["content"][i]["title"] + "</div>" + content["content"][i]["content"] + "</div>";
                } else {
                    contentDiv.innerHTML += "<div class='content-item-text-box'>" + content["content"][i]["content"] + "</div>";
                }
                break;
            case "text":
                contentDiv.innerHTML += "<div class='content-text'>" + content["content"][i]["content"] + "</div>";
        }
    }
}