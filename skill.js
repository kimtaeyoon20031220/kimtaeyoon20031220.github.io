dev_data = [
    {
        "image" : "https://i.namu.wiki/i/KcqDuQYTxNpUcLIMZTg28QXse0XiWx1G7K68kYYCo1GuhoHmhB_V8Qe9odGGt0BH9-0nQZTN53WXTNpDmwVfWQ.svg",
        "ability" : "medium",
        "name" : "C"
    },
    {
        "image" : "https://i.namu.wiki/i/k2nwDQNWZhSfRdbz2nPQzERjwjuWx3xxFHm3Q2m5xf868NeTGOQaGHOw_MhcqlkHqpCgk1GsLgCgUp6X-gnReiuWgGAIZjmHeHFRtWhkazrrEbfLc8fAEy6B2EpGDG9rSn1Q1nssQ7eUXB2aDSbJGg.svg",
        "ability" : "low",
        "name" : "C++"
    },
    {
        "image" : "https://i.pinimg.com/originals/6d/b1/59/6db159df526b6f5584902ebc21daca88.png",
        "ability" : "medium",
        "name" : "Flutter"
    },
    {
        "image" : "https://blog.kakaocdn.net/dn/bpzJ8L/btqAHJxe1Ib/x0ZAG10ADHAtc9ItRkLqp0/img.png",
        "ability" : "medium",
        "name" : "Kotlin"
    },
    {
        "image" : "https://3.bp.blogspot.com/-VVp3WvJvl84/X0Vu6EjYqDI/AAAAAAAAPjU/ZOMKiUlgfg8ok8DY8Hc-ocOvGdB0z86AgCLcBGAsYHQ/s1600/jetpack%2Bcompose%2Bicon_RGB.png",
        "ability" : "medium",
        "name" : "Jetpack Compose"
    },
    {
        "image" : "https://blog.kakaocdn.net/dn/9ZCsE/btqFp43DyIM/c7KHGrjY8OI3bYZvyQeej0/img.png",
        "ability" : "high",
        "name" : "HTML/CSS"
    },
    {
        "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
        "ability" : "low",
        "name" : "Javascript"
    },
    {
        "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
        "ability" : "high",
        "name" : "Python"
    },
]

plan_data = [
    {
        "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png",
        "ability" : "medium",
        "name" : "Figjam"
    },
    {
        "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/1024px-Notion-logo.svg.png",
        "ability" : "high",
        "name" : "Notion"
    },
]

design_data = [
    {
        "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png",
        "ability" : "high",
        "name" : "Figma"
    },
]

com_data = [
    {
        "image" : "https://upload.wikimedia.org/wikipedia/commons/e/e3/KakaoTalk_logo.svg",
        "ability" : "high",
        "name" : "KakaoTalk"
    },
    {
        "image" : "https://user-images.githubusercontent.com/23306911/71767498-1d3f7600-2f0d-11ea-9f8e-c0e2e8be8dff.png",
        "ability" : "high",
        "name" : "Excalidraw"
    },
    {
        "image" : "https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png",
        "ability" : "high",
        "name" : "Discord"
    }
]


dev = document.querySelector("#dev");
plan = document.querySelector("#plan");
design = document.querySelector("#design");
com = document.querySelector("#com");

dataBind(dev, dev_data, "Develop");
dataBind(plan, plan_data, "Plan");
dataBind(design, design_data, "Design");
dataBind(com, com_data, "Communicate");

function dataBind(obj, data, title) {
    obj.innerHTML += "<span class='skill-title'>" + title + "</span>"
    for(let i = 0; i < data.length; i++) {
        let color = "#4387ED";
        let width = "100%";
        if (data[i]["ability"] == "high") {
            color = "#4387ED";
            width = "100%";
        } else if (data[i]["ability"] == "medium") {
            color = "orange";
            width = "66%";
        } else {
            color = "#FC5960";
            width = "33%";
        }
        obj.innerHTML += 
        "<div class='skill-item'>" +
            `<div class='skill-icon'></div>` +
            "<div class='skill-content'>" + 
                `<div class='skill-name'>${data[i]["name"]}</div>`+ 
                "<div class='skill-bar'>" +
                    "<div class='skill-bar-back'></div>" +
                    "<div class='skill-bar-front' style='width: " + width + "; background-color: "+ color +";'></div>" +
                "</div>" +
            "</div>"
        "</div>"    

        obj.querySelectorAll(".skill-icon")[i].style.backgroundImage = `url("${data[i]["image"]}")`

        console.log(data[i]["image"])
    }
}