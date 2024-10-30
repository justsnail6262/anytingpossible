const names = [
    "루카스 아스카니엔",
    "레오나르드 비텔스바흐",
    "아드리안 아스카니엔",
    "나르케 파르네세",
    "엘리아스 호엔촐레른",
    "막스 리히트호펜",
    "게오르크 아스카니엔",
    "율리아 체링겐",
    "아델베르트 호엔촐레른",
    "울리케 크라이스트",
    "프리드리히 호엔촐레른",
    "아인시델",
    "엘리자베트 호엔촐레른",
    "하이케 아인시델",
    "슽",
    "가브리엘레 파르네세",
    "에마누엘 비텔스바흐",
    "베아트릭스 마리아 외스터라이히에스테",
    "알버트 메클렌부르크",
    "미하일 블라디미로비치 이스마일로프",
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
