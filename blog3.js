let contentDiv = document.querySelector(".content");

function dataBinding(content) {

    let j = 0; //이미지 데이터 바인딩 대비 (이미지 순서 체크)

    document.querySelector(".top-meta").innerHTML += content["category"] + " &bullet; " + content["date"];
    document.querySelector(".title").innerHTML += content["title"];
    document.querySelector(".thumbnail").style.backgroundImage = `url("${content["thumbnail"]}")`;

    for (let i = 0; i < content["content"].length; i++) {
        switch (content["content"][i]["type"]) {
            case "img":
                contentDiv.innerHTML += "<div class='content-item-img'></div>";
                document.querySelectorAll(".content-item-img")[j].style.backgroundImage = `url("${content["content"][i]["content"]}")`;
                j++;
                break;
            case "img-no-loss-height":
                contentDiv.innerHTML += "<div class='content-item-img' style='background-size: auto 100%;'></div>";
                document.querySelectorAll(".content-item-img")[j].style.backgroundImage = `url("${content["content"][i]["content"]}")`;
                j++;
                break;
            case "img-no-loss-width":
                contentDiv.innerHTML += "<div class='content-item-img' style='background-size: 100% auto'></div>";
                document.querySelectorAll(".content-item-img")[j].style.backgroundImage = `url("${content["content"][i]["content"]}")`;
                j++;
                break;
            case "desc":
                contentDiv.innerHTML += "<div class='content-item-desc'>" + content["content"][i]["content"] + "</div>";
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

content3 = {
    "title" : "생성적 적대 신경망 (GAN)",
    "thumbnail" : "https://cdn.pixabay.com/photo/2023/05/04/15/22/multi-verse-7970350_1280.jpg",
    "category" : "딥러닝",
    "date" : "2023년 6월 2일",
    "content" : [
        {
            "type" : "img",
            "content" : "https://cdn.pixabay.com/photo/2023/05/19/18/01/ai-generated-8005083_1280.png"
        },
        {
            "type" : "desc",
            "content" : "출처: https://pixabay.com/ko/illustrations/ai-%EC%83%9D%EC%84%B1-%EA%B8%B0%EC%88%A0-%EA%B8%B0%EA%B3%84-%ED%95%99%EC%8A%B5-8005083/"
        },
        {
            "type" : "title",
            "content" : "GAN 컨셉"
        },
        {
            "type" : "box",
            "title" : "GAN (Generative Adversarial Network)",
            "content" : "생성자 신경망과 판별자 신경망이 서로 적대적으로 경쟁하며 정교한 결과를 만들어내는 모델"
        },
        {
            "type" : "text",
            "content" :
            "GAN은 위조 지폐를 만드는 범인과 위조 지폐를 감별하는 경찰을 통해 비유되곤 합니다. 이는 생성자 신경망과 판별자 신경망의 역할과 관련이 있는데요. GAN은 위조 데이터를 만들어 내는 생성자 신경망과, 위조 데이터를 판별하는 판별자 신경망의 대립으로 작동합니다. " +
            "생성자 신경망이 위조 데이터를 만들어 내면, 먼저 학습되어 있는 판별자 신경망이 위조 데이터인지 아닌지를 판별하게 됩니다. 생성자 신경망은 판별자 신경망이 위조 데이터를 진짜 데이터로 판별하게끔 하는 것이 목적이고, 판별자 신경망은 위조 데이터를 완벽하게 구분해 내는 것이 목적이지요. " +
            "이 과정을 여러 번 반복하게 되면, 생성자 신경망은 진짜같은 (판별자가 구분해내지 못할 정도의) 결과물을 만들 수 있게 되고, 판별자 신경망은 위조 데이터를 어느 정도 거를 수 있는 능력을 가지게 됩니다. " +
            "어느 정도 학습을 시키다 보면, 두 신경망의 능력이 대립되는 때가 오게 됩니다. 마치 창과 방패의 싸움같이요. 판별자 신경망이 위조 데이터의 50%만을 위조라고 판단하는 때입니다. 이 때가 학습을 마칠 때입니다."
        },
        {
            "type" : "title",
            "content" : "훈련 과정"
        },
        {
            "type" : "text",
            "content" : 
            "생성자와 판별자는 심층 신경망으로 생성자 신경망의 출력은 판별자 신경망의 입력에 직접 연결되어 있습니다. 이로써, 판별자의 손실을 역전파하여 생성자와 판별자를 학습하는 데에 이용할 수 있습니다."
        },
        {
            "type" : "img-no-loss-width",
            "content" : "https://hyeongminlee.github.io/img/GAN_001/fig_1.png"
        },
        {
            "type" : "desc",
            "content" : "출처: https://wikidocs.net/146217"
        },
        {
            "type" : "box",
            "title" : "판별자 신경망의 훈련",
            "content" : 
            "<ol>" + 
            "<li>생성자 신경망은 난수 노이즈를 받아서 위조 데이터를 생성합니다." + 
            "<li>위조 데이터는 진짜 데이터와 혼합되어 판별자 신경망의 입력으로 사용됩니다." +
            "<li>판별자 신경망은 cross-entropy-error 함수를 이용해 실제 레이블에 대한 판별자 신경망의 예측 레이블을 평가합니다." +
            "<li>Backpropagation을 통해 판별자 신경망의 매개 변수를 업데이트 합니다." +
            "</ol>"
        },
        {
            "type" : "box",
            "title" : "생성자 신경망의 훈련",
            "content" : 
            "<ol>" + 
            "<li>생성자 신경망은 난수 노이즈를 받아서 위조 데이터를 생성합니다." +
            "<li>위조 데이터는 진짜 데이터와 혼합되어 판별자 신경망의 입력으로 사용됩니다." +
            "<li>위조 데이터를 넘겨줄 때, 생성자 신경망은 판별자 신경망에게 위조 데이터를 진짜 데이터로 속여서 넘겨줍니다. (레이블 교체)" +
            "<li>판별자 신경망은 데이터가 진짜인지 위조인지를 평가하여 예측합니다." +
            "<li>판별자 신경망이 위조 데이터를 진짜 데이터로 예측했다면, 생성자 신경망의 loss는 작아집니다." +
            "</ol>"
        },
        {
            "type" : "title",
            "content" : "수식으로 살펴보기"
        },
        {
            "type" : "box",
            "title" : "GAN의 loss 함수",
            "content" : "<img src='https://www.stechstar.com/user/zbxe/files/attach/images/119/799/078/dbeaba0179430daba6f2226048733f74.png', width='100%'>"
        },
        {
            "type" : "text",
            "content" : 
            "위 수식의 의미를 살펴봅시다. 먼저 min max V(D, G)는 G는 V(D, G)가 min이 되려 하고, D는 V(D, G)가 max가 되려고 한다는 의미입니다. " +
            "D는 V(D, G)가 최대가 되는 것을 원합니다. 위조 데이터에는 0을 출력하고, 진짜 데이터에는 1을 출력해야 합니다. " +
            "V(D, G)가 최대가 되기 위해서, D(x)=1이 되어야 하고, D(G(z))=0이 되어야 합니다. D(x)=1이면 logD(x)는 0이 되고, log(1-D(G(z)))는 0이 됩니다. " +
            "결국 0이 되는데, 이게 최대인가 하는 생각이 드신 분들도 계실겁니다. 하지만 우리는 x가 0과 1 둘 중 하나이고, log(0) = -inf, log(1) = 1인 것을 간과해서는 안됩니다. " +
            "위의 GAN loss 함수에서 가장 큰 값은 0이라는 뜻입니다."
        },
        {
            "type" : "text",
            "content" : 
            "반대로, G는 V(D, G)가 최소가 되기를 기대하고 있습니다. 판별자 신경망이 위조 데이터를 1로 판별하기를 원한다는 뜻과 같습니다. " +
            "G는 수식의 앞 부분인 E_x~pdata(x)[logD(x)]는 신경쓰지 않습니다. 단지 뒤의 위조 데이터를 판별하는 곳에만 관심이 있을 뿐입니다. " +
            "D(G(z)) = 1이면 log(1 - 1) = log(0) = -inf이 됩니다. 요약하면, G의 목적은 V(D, G)가 최소가 되도록 하는 것입니다. "
        }
    ]
}

dataBinding(content3);