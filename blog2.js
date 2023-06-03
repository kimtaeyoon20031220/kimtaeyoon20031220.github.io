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
                contentDiv.innerHTML += "<div class='content-item-img' style='background-size: auto 100%'></div>";
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

content2 = {
    "title" : "선형 회귀",
    "thumbnail" : "https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1129780/regular_1708x683_0417-an-introduction-to-deep-learning-from-perceptrons-to-deep-networks-Waldek_Newsletter-5078bdbf19aea7271f07061a3e17c463.png",
    "category" : "딥러닝",
    "date" : "2023년 6월 2일",
    "content" : [
        {
            "type" : "img",
            "content" : "https://cdn.pixabay.com/photo/2023/05/19/18/01/ai-generated-8005083_1280.png",
        },
        {
            "type" : "desc",
            "content" : "출처: https://pixabay.com/ko/illustrations/ai-%EC%83%9D%EC%84%B1-%EA%B8%B0%EC%88%A0-%EA%B8%B0%EA%B3%84-%ED%95%99%EC%8A%B5-8005083/",
        },
        {
            "type" : "title",
            "content" : "우리 주위의 선형회귀"
        },
        {
            "type" : "box",
            "title" : "선형 회귀",
            "content" : "선형 모델을 사용하여 회귀 문제를 푸는 것"
        },
        {
            "type" : "text",
            "content" : 
                "선형 회귀는 다양한 곳에서 쓰이고 있어요.<br>" + 
                "우리 주위에서 선형 회귀를 이용하는 예를 어렵지 않게 찾아볼 수 있답니다.<br>" +
                "아래 예시를 보면 선형 회귀를 어디에서 쓰는지 쉽게 알 수 있을거예요.<br>"
        }, 
        {
            "type" : "box",
            "title" : "",
            "content" : "<ul><li>면적에 따른 주택의 가격<li>공부 시간과 성적의 관계<li>키와 몸무게 간의 관계</ul>"
        },
        {
            "type" : "text",
            "content" : 
            "무언가 공통점이 보이는 것 같지 않나요? " +
            "아마 다들 쉽게 공통점을 찾으셨을거라 생각하는데요. " +
            "데이터를 모아봤을 때 하나의 직선으로 일반화하여 표현할 수 있다면, 선형 회귀로 풀기 적합한 문제입니다. " +
            "집 면적이 크면 클수록 주택의 가격이 올라가는 경향을 보이죠? " +
            "또, 공부를 많이 하면 할 수록, 시험 성적도 높아지는 것은 당연하다는 생각까지 들겁니다. " + 
            "이런 식으로 데이터 간의 상관 관계를 선형적으로 표현해서 데이터가 주어졌을 때 결과를 예측하는 것이 선형 회귀가 할 수 있는 일이에요.<br>"
        },
        {
            "type" : "img-no-loss-height",
            "content" : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Regression_lineaire_avec_R.svg/500px-Regression_lineaire_avec_R.svg.png",
        },
        {
            "type" : "desc",
            "content" : "출처: https://velog.io/@good159897/%EC%84%A0%ED%98%95-%ED%9A%8C%EA%B7%80%EC%99%80-%EB%A1%9C%EC%A7%80%EC%8A%A4%ED%8B%B1-%ED%9A%8C%EA%B7%80"
        },
        {
            "type" : "text",
            "content" : 
            "위의 그래프는 데이터가 우상향하고 있음을 표현하고 있네요. " +
            "직선을 없애고 데이터 포인트만 두었을때, 뭔가 그 사이로 직선을 그어보고 싶지 않나요?! " +
            "선형 회귀를 이용하면 산발적인 데이터를 가장 잘 표현하는 하나의 직선을 구할 수 있습니다."
        },
        {
            "type" : "text",
            "content" : 
            "그럼 이제 선형 회귀를 어떻게 계산하는지 알아볼까요?"
        },
        {
            "type" : "title",
            "content" : "선형 회귀 계산하기"
        },
        {
            "type" : "box",
            "title" : "선형 회귀 식",
            "content" : "f(x) = wx + b"
        },
        {
            "type" : "text",
            "content" :
            "뭔가 학창 시절에 많이 본 식이죠? 바로 1차원 방정식입니다. 앞서, 선형 회귀는 이름 그대로 데이터를 예측하기 위해 선을 긋는 것이라고 했습니다. " +
            "이 선이 1차원으로 표현되기 때문에, 회귀 식이 1차원 방정식으로 표현되는 것입니다. " +
            "선형 회귀에서 x는 입력 데이터, w은 가중치(weight), b는 편향(bias)라고 부릅니다. 선형 회귀 식에서 우리가 다룰 수 있는 미지수는 w와 b뿐입니다." +
            "때문에, 선형 회귀도 데이터를 가장 잘 표현하는 w와 b를 찾는 것이 목적입니다."
        },
        {
            "type" : "title",
            "content" : "선형 회귀의 종류"
        },
        {
            "type" : "text",
            "content" : "선형 회귀는 2가지 종류가 있습니다."
        },
        {
            "type" : "box",
            "title" : "",
            "content" : "<ul><li>단순 선형 회귀<li>다중 선형 회귀</ul>"
        },
        {
            "type" : "text",
            "content" :
            "선형 회귀는 두 가지 종류로 나눌 수 있습니다. 단순 선형 회귀는 앞서 보았던 f(x) = wx + b 꼴로 나타내는 방식입니다. 입력 데이터의 특징이 하나 뿐일 때 사용합니다. " +
            "다중 선형 회귀는 f(x, y, z) = w0 + w1 * x + w2 * y + w3 * z 꼴로 나타내는 방식입니다. 입력 데이터의 특징이 여러 개일때 사용합니다. 앞서 예시로 들었던 '면적에 따른 주택 가격'에 다른 특징을 추가해서 다중 선형 회귀의 예시로 들어보겠습니다. " +
            "앞선 예시에서는 데이터의 특징이 '면적' 단 한개였습니다. 하지만, 현실에서 주택 가격에 반영되는 요소는 훨씬 많죠? '면적' 말고도 '지하철 역까지의 거리', '공원까지의 거리' 등을 들 수 있을겁니다. 그럼 여기서는 x에 '면적', y에 '지하철 역까지의 거리', z에 '공원까지의 거리' 데이터가 들어가게 됩니다. " 
        },
        {
            "type" : "title",
            "content" : "선형 회귀의 원리"
        },
        {
            "type" : "text",
            "content" : 
            "이제 선형 회귀를 왜 쓰는지, 어떤 데이터를 예측할 때 쓰면 좋은지를 알았습니다. 그런데, 선형 회귀 알고리즘은 어떻게 각 데이터 포인트를 보고 데이터를 가장 잘 표현하는 직선을 그리는 걸까요? " + 
            "선형 회귀에서는 '손실 함수' 라는 것을 사용해서 데이터를 한 직선으로 얼마나 '못' 표현했는지를 계산합니다. "
        },
        {
            "type" : "img-no-loss-width",
            "content" : "https://blog.kakaocdn.net/dn/bMgddM/btrAsrpIQ10/MvTi5yAvMVjgLifqVmkKYK/img.png"
        },
        {
            "type" : "desc",
            "content" : "출처: https://blog.mnc.ai/7"
        },
        {
            "type" : "box",
            "title" : "loss를 구하는 공식",
            "content" : "sum{i=0}{n}{(f(x_i) - y_i)^2} / n",
        },
        {
            "type" : "text",
            "content" :
            "가장 대표적인 손실 함수는 sum{i=0}{n}{(예측한 값 - 실제 값)^2} 입니다. 훈련 데이터 포인트마다 예측한 값과 실제 값의 차이에 제곱을 해서 차이를 극대화 시키고, 이 값들의 평균을 내는 공식입니다. " +
            "손실 함수를 통해 loss라고 부르는 값을 받을 수 있는데, 이것이 바로 '데이터가 직선으로 얼마나 못 표현되었는지'를 나타내는 값입니다. 그러면 이제 loss를 구했으니, 직선을 어떻게 바꾸는지를 알아야겠죠? "
        },
        {
            "type" : "text",
            "content" : "직선을 데이터를 가장 잘 표현할 수 있는 직선으로 바꾸려면 loss를 최소화 시키는 w와 b를 찾아야 합니다. 특징이 한 개뿐이라면, 손실 함수는 2차원의 형태로 나타납니다. 2차원으로 표현되는 손실함수는 분석적인 방법으로 계산할 수 있습니다. 하지만, 특징이 3개 이상이라면? " +
            "특징이 여러 개 일때는 경사 하강법을 이용하는 것이 좋습니다."
        },
        {
            "type" : "title",
            "content" : "경사 하강법"
        },
        {
            "type" : "text",
            "content" : 
            "경사 하강법을 쉽게 설명하는 예시로 '눈을 감고 골짜기를 내려가는 것'을 많이 듭니다. 눈을 감고 골짜기를 내려가려면 어떻게 해야 할까요? 단지 땅에 닿고 있는 발의 감각으로만 이동해야 할겁니다. " +
            "발이 앞쪽으로 기운다면 앞쪽으로 내려가는 길이 있다는 것이겠지요. 경사 하강법도 똑같습니다. 지금 우리는 손실 함수 그래프의 골짜기 위에 서 있습니다. 우리는 손실 함수 그래프의 맨 아래 쪽으로 가야 합니다. " +
            "손실 함수 그래프에서는 현재 위치에서의 미분 값을 통해 어디로 내려갈지 결정합니다."
        },
        {
            "type" : "img-no-loss-height",
            "content" : "https://t1.daumcdn.net/cfile/tistory/99334E495D81B36B2F"
        },
        {
            "type" : "desc",
            "content" : "출처: https://www.google.com/url?sa=i&url=https%3A%2F%2Fbioinformaticsandme.tistory.com%2F125&psig=AOvVaw2GuD1gg-nguHxf4CV32BUu&ust=1685775666452000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNjS8O-BpP8CFQAAAAAdAAAAABAE"
        },
        {
            "type" : "text",
            "content" : 
            "손실 함수 그래프를 얼마만큼씩 내려갈지는 '학습률'을 통해 정합니다. '학습률'은 한 번에 매개변수를 변경하는 비율을 말합니다. 학습률이 작으면 아주 작은 보폭으로 골짜기를 내려갈 것이고, 반대로 높다면 큰 보폭으로 골짜기를 내려가겠죠? " +
            "학습률은 loss 값을 줄이는 데에 큰 영향을 줍니다. 만약 학습률이 너무 작다면 학습을 하다가 평평한 부분을 만났을 때 멈출 것입니다. local minima에 멈출 수도 있는 것이고요. 그곳이 손실이 가장 낮은 곳이라고 착각하는 것이지요. 우리는 global minima를 찾아야 하는데, local minima를 구하는 것은 높은 loss을 가진 채로 학습이 멈출 수도 있다는 것을 의미합니다. 반대로 학습률이 너무 높다면 좌우로 진동하다가 위로 발산해 버릴 수 있습니다. " +
            "그래서 선형 회귀를 위해서는 적합한 학습률을 구하는 것도 하나의 과제입니다. "
        }
    ],
};

dataBinding(content2);