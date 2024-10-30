const names = [
    "루카스",
    "레오나르드",
    "아드리안",
    "나르케",
    "엘리아스",
    "리히트호펜",
    "게오르크",
    "율리아",
    "아델베르트",
    "울리케",
    "프리드리히",
    "아인시델",
    "엘리자베트",
    "하이케",
    "슽",
    "가브리엘레",
    "에마누엘",
    "베아트릭스 마리아",
    "메클렌부르크",
    "이스마일로프" 
    ];

function getRandomNames() {
    if (names.length < 2) {
        document.getElementById("result").innerText = "2개 이상의 이름이 필요합니다.";
        return;
    }

    const randomIndices = [];
    while (randomIndices.length < 2) {
        const index = Math.floor(Math.random() * names.length);
        if (!randomIndices.includes(index)) randomIndices.push(index);
    }

    const [first, second] = randomIndices.map((index) => names[index]);
    document.getElementById("result").innerText = `생성된 CP : ${first} x ${second}`;
}

function goToWebsite() {
    window.location.href = "https://example.com"; // 원하는 사이트 링크로 변경
}
