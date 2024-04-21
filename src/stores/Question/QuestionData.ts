import { IQuestion } from "./types"

export const QuestionData: IQuestion[] = [
    {
        id : 1,
        title: "주말 오후 시간. 분명 게임하자고 모여들 피자방 사람들이 보이지 않는다.",
        answerA: "'님들 모해 빨리 모여! @everyone' 당장 사람들을 모은다.",   // E관련
        answerB: "'다들 약속있나...' 그냥 혼자 게임을 한다.",   // I관련
        type: "EI",
    },
    {
        id : 2,
        title: "게임을 하다 보니 그 사이 사람들이 꽤 모여있다. 그런데 나와 다른 게임을 하고 있다.",
        answerA: "'무슨 게임해요? 나도 할래요!' 일단 채널에 들어가 끼어든다.",   // E관련
        answerB: "'오디오 겹쳐서 집중 안되겠지...' 우선 하고 있던 게임에 집중한다.",   // I관련
        type: "EI",
    },
    {
        id : 3,
        title: "게임에 몰두하고 있는 와중, 누군가 나를 급하게 멘션했다.",
        answerA: "'누구야 뭐야 당장 읽어!' 곧바로 확인한다.",   // E관련
        answerB: "귀찮다. 알림을 끄고 게임에 집중한다.",   // I관련
        type: "EI",
    },
    {
        id : 4,
        title: "다함께 모여서 게임을 하다가, 사람이 너무 많아져 채널이 나뉘게 됐다.",
        answerA: "그치만... 사람 많아야 더 재미있는데ㅜㅜ",   // E관련
        answerB: "드디어 조용하네.",   // I관련
        type: "EI",
    },
    {
        id : 5,
        title: "모르는 닉네임의 누군가가 채널에 들어왔다.",
        answerA: "'헉 뉴페이스다 안녕하세요!' 먼저 공손히 인사하고 MBTI부터 물어본다.",   // E관련
        answerB: "'누구지...낯선 사람이다...' 말을 걸지 않는다.",   // I관련
        type: "EI",
    },
    {
        id : 6,
        title: "할 게임도 없고, 도란도란 떠드는 시간. 나는 무슨 이야기를 할까?",
        answerA: "오늘의 TMI를 방출한다.",   // N관련
        answerB:  "'매체님 재미있는 이야기 해주세요.' 혹부리 할매를 부른다.", // S관련
        type: "NS",
    },
   
    {
        id : 7,
        title: "맙소사! 아주 멋진 POTG를 기록했다!",
        answerA: "'진웅님 제발 이거 봐줘요!' 채널에 강제로 초대해 상영회를 열고 칭찬을 기대한다.",   // N관련
        answerB: "'역시 나야...' 조용히 만족한다.",   // S관련
        type: "NS",
    },
    {
        id : 8,
        title: "각자 할 거 하는 방에서 나는-",
        answerA: "유튜브를 보던 숙제를 하던 할 거 한다.",   // N관련
        answerB: "그냥 멍때린다.",   // S관련
        type: "NS",
    },
    {
        id : 9,
        title: "오후 7시. 재현이 저녁 메뉴를 추천해달라고 한다.",
        answerA: "'김치 사발면에 참치 김밥 한줄이랑 빠다코코넛에 투게더 얹어 먹죠.' 홀린 듯 술술 말한다.",   // N관련
        answerB: "저걸 왜 나한테 묻는 걸까? 굶으라고 한다.",   // S관련
        type: "NS",
    },
    {
        id : 10,
        title: "중간고사 준비 중인 봉봉. 공부를 하다 말고 '여러분 저 잠와요...' 라고 한다.",
        answerA: "그만 자",   // N관련
        answerB: "공부해",   // S관련
        type: "NS",
    },
    {
        id : 11,
        title: "다함께 오버워치를 하는데 오늘따라 세나의 목소리가 지쳐보인다.",
        answerA: "'세나님 무슨 일이 있으신가요?' 뭔지는 몰라도 듣고 응원해주려 한다.",   // F관련
        answerB: "알빠노. 게임에 집중한다.",   // T관련
        type: "FT",
    },
    {
        id : 12,
        title: "뿡이의 감기가 좀처럼 낫지 않는다ㅜㅜ",
        answerA: "'약은 먹었나요? 아프지 말아요ㅠㅠ' 피자방 사람들 모두 건강했으면 좋겠다고 생각한다.",   // F관련
        answerB: "별 생각 없다.",   // T관련
        type: "FT",
    },
    {
        id : 13,
        title: "주문을 잘못하는 바람에 삐읍의 집에 구운 달걀이 90개나 배송됐다!",
        answerA: "'맛있겠다...' 그저 부럽다.",   // F관련
        answerB: "'저 주세요.' 냉큼 기회를 노린다.",   // T관련
        type: "FT",
    },
    {
        id : 14,
        title: "몇 시간 플레이한 게임이 슬픈 엔딩을 맞이했다.",
        answerA: "너무 슬퍼ㅠㅠ 눈물을 쏟는다.",   // F관련
        answerB: "'오 깼다!' 뿌듯한 마음으로 엔딩 크레딧을 스킵한다.",   // T관련
        type: "FT",
    },
    {
        id : 15,
        title: "누군가 음식방에 오늘 맛있게 먹었다며 음식 사진을 올렸는데... 어째 색감도 구도도 썩 맛있어 보이지 않는다.",
        answerA: "'본인이 맛있게 먹었으면 됐지~' 넘어간다.",   // F관련
        answerB: "'음식물 쓰레기 찍은거야?' 음식이라고 생각하지 않는다.",   // T관련
        type: "FT",
    },
    {
        id : 16,
        title: "사고 싶은 스팀 게임이 너무 비싸다... 어떡하지?",
        answerA: "'사 줘.' 한 줄기 희망을 가져본다.",   // P관련
        answerB: "우선 찜 해두고 이번 해 여름 세일 기간을 기다린다.",   // J관련
        type: "JP",
    },
    {
        id : 17,
        title: "드디어 오버워치 신규 캐릭터가 나왔다.",
        answerA: "공격력, 스킬, 쿨타임 등 모든 정보를 꼼꼼히 읽고 미리 플레이해본다.",   // J관련
        answerB: "'션 이거 어떻게 해?' 물어보기만 하고 평소 하던 캐릭터를 계속 플레이한다.",   // P관련
        type: "JP",
    },
    {
        id : 18,
        title: "오랜만에 하루종일 게임 하는 날이다!",
        answerA: "'오전 중에 로아 숙제하고 오후에는 딜러 경쟁하고 이따 리썰해야지!' 이미 스케줄은 정해져있다.",   // J관련
        answerB: "'어 마크할까?' 그날 하고싶은 것을 한다.",   // P관련
        type: "JP",
    },
    {
        id : 19,
        title: "힐러가 10시를 또 놓쳤다.",
        answerA: "저런ㅋㅋㅋㅋ",   // P관련
        answerB: "저도 놓쳤쇼...",   // J관련
        type: "JP",
    },
    {
        id : 20,
        title: "매체가 이번 주 피자를 세번째 먹으러 간다고 한다!",
        answerA: "'맛있겠다 피자!' 나도 데려가달라고 한다.",   // P관련
        answerB: "'그러니까 체중이 안빠지죠ㅋㅋㅋ' 매체 그만 먹어를 외친다.",   // J관련
        type: "JP",
    },
]