import { IResult } from "./types"

import bacon from "../../assets/pizza/bacon.jpg"
import cheese from "../../assets/pizza/cheese.jpg"
import combination from "../../assets/pizza/combination.jpg"
import corn from "../../assets/pizza/corn.jpg"
import eggplant from "../../assets/pizza/eggplant.jpg"
import hotchicken from "../../assets/pizza/hotchicken.jpg"
import margherita from "../../assets/pizza/margherita.jpg"
import meatball from "../../assets/pizza/meatball.jpg"
import mushroom from "../../assets/pizza/mushroom.jpg"
import pepperoni from "../../assets/pizza/pepperoni.jpg"
import pineapple from "../../assets/pizza/pineapple.jpg"
import potato from "../../assets/pizza/potato.jpg"
import prosciutto from "../../assets/pizza/prosciutto.jpg"
import shrimp from "../../assets/pizza/shrimp.jpg"
import steak from "../../assets/pizza/steak.jpg"
import taco from "../../assets/pizza/taco.jpg"


export const ResultData: IResult[] = [
    {
        id: 1,
        name: "베이컨 피자",
        my: "ENTP",
        best: "콤비네이션 피자",
        best2: "마르게리따 피자",
        desc: "머리는 차갑게, 가슴은 뜨겁게. 논리적이며 명확한 추진력을 가졌고, 매사 유쾌한 자세를 유지하시네요. 넘쳐나는 새로운 아이디어로 다양한 상황에 빠르게 적응할 수 있어요. 고기는 언제나 옳다! 어디에서나 빛나는 당신은 베이컨 피자입니다.",
        image: `${bacon}`,
    },
    {
        id: 2,
        name: "치즈 피자",
        my: "ISFP",
        best: "페퍼로니 피자",
        best2: "포테이토 피자",
        desc: "표현과 말수가 적고, 고요하게 누워있기 좋아하시는군요! 외출이나 여행보다는 안락의자에서 낮잠 자는 것을 즐기고요. 주로 조용하고 신중하다는 평가를 듣지만, 뚜렷한 색깔이 전혀 없는 것은 아니랍니다. 근본 중의 근본! 가장 무난함이 당신의 가장 큰 매력 아닐까요? 평범해 보이지만 꾸준히 사랑받는 당신은 치즈 피자입니다!",
        image: `${cheese}`,
    },
    {
        id: 3,
        name: "콤비네이션 피자",
        my: "INFJ",
        best: "미트볼 피자",
        best2: "베이컨 피자",
        desc: "어디에서나 적절하게 잘 어울리는 당신. 당신을 마다할 사람이 있을까요? 정적이지만 동적이고, 동적이다가도 정적인 매력의 소유자. 뭘 좋아할지 몰라 다 준비해보았습니다. 콤비네이션 피자입니다!",
        image: `${combination}`,
    },
    {
        id: 4,
        name: "옥수수 피자",
        my: "ESFP",
        best: "트러플머쉬룸 피자",
        best2: "루꼴라프로슈토 피자",
        desc: "자유로운 영혼의 소유자시군요! 즐거움과 새로움을 위해서라면 팔랑팔랑 나비처럼 날아가는 당신. 고민이 생기더라고 금새 훌훌 털어내는 쿨함의 대명사입니다. 단순하면서도 개성이 강한 당신은 옥수수 피자입니다!",
        image: `${corn}`,
    },
    {
        id: 5,
        name: "핫치킨 피자",
        my: "ENTJ",
        best: "쉬림프 피자",
        best2: "스테이크 피자",
        desc: "당신은 대담함과 야망으로 이루어지셨네요! 비효율과 애매한 것은 반드시 고쳐야 직성이 풀리고요. 빠른 결정 능력과 철저하면서도 화끈한 성격이 도전을 멈추지 않게 합니다. 새로움을 추구하는 당신은 핫치킨 피자입니다!",
        image: `${hotchicken}`,
    },
    {
        id: 6,
        name: "마르게리따 피자",
        my: "INTJ",
        best: "미트볼 피자",
        best2: "베이컨 피자",
        desc: "매사 신중하고 자기 표현이 많지 않으시군요. 하지만 굳이 말하지 않아도 아는 사람은 아는 매력을 가지셨습니다. 독특하면서도 눈에 띄지 않지만, 한번 빠져들면 한번 더 찾게 되는 당신, 유구한 전통을 가진 마르게리따 피자입니다!",
        image: `${margherita}`,
    },

    {
        id: 7,
        name: "트러플머쉬룸 피자",
        my: "ISFJ",
        best: "옥수수 피자",
        best2: "하와이안 피자",
        desc: "섬세하고 정제된 취향인 당신. 당신만의 배려심으로 주변 사람들에게 안정감과 편안함을 주는 편입니다. 주변 사람들에게 따뜻한 정서적 지지를 줄 줄 아는군요! 향기롭고 온화한 당신은 트러플머쉬룸 피자입니다.",
        image: `${mushroom}`,
    },
    {
        id: 8,
        name: "페퍼로니 피자",
        my: "ENFJ",
        best: "쉬림프 피자",
        best2: "치즈 피자",
        desc: "혹시 다재다능하다는 말을 많이 듣지 않나요? 게다가 호불호 없는 대중적인 명랑함까지 갖추셨군요! 당신의 열정과 동기 부여를 통해 주변 사람들도 자신의 잠재력을 최대한 발휘합니다. 언제든, 어디서든 자신의 몫을 해내는 당신은 페퍼로니 피자입니다.",
        image: `${pepperoni}`,
    },
    {
        id: 9,
        name: "포테이토 피자",
        my: "ESFJ",
        best: "치즈 피자",
        best2: "가지 피자",
        desc: "다정하고 사교적인 당신은 조화와 평화를 중시합니다. 다소 불편하고 껄끄러운 상황에서도 훌륭하게 사람들을 이끌고 조화로운 분위기를 만들어 내는군요! 담백하고 묵직하게 사랑받는 당신은 포테이토 피자입니다.",
        image: `${potato}`,
    },
    {
        id: 10,
        name: "루꼴라프로슈토 피자",
        my: "ISTJ",
        best: "옥수수 피자",
        best2: "하와이안 피자",
        desc: "당신은 침착함, 책임감. 이 두 단어로 표현할 수 있어요. 성실하지만 자신의 능력을 과시하지 않는 어른스러운 면도 갖추셨군요. 자극적이지 않지만 잘 정제된 당신! 루꼴라프로슈토 피자입니다.",
        image: `${prosciutto}`,
    },
    {
        id: 11,
        name: "하와이안 피자",
        my: "ESTP",
        best: "트러플머쉬룸 피자",
        best2: "루꼴라프로슈토 피자",
        desc: "활동적이고 즉흥적인 면을 가지셨네요! 가끔 예측하기 어렵거나 주변과 어울리지 않다는 생각을 하실 수도 있어요. 하지만 누군가 당신의 매력을 알아챈다면 더없는 시너지를 일으킬거예요. 자유롭고 호기로운 당신은 하와이안 피자입니다!",
        image: `${pineapple}`,
    },
    {
        id: 12,
        name: "쉬림프 피자",
        my: "INFP",
        best: "페퍼로니 피자",
        best2: "핫치킨 피자",
        desc: "눈물이 많고 감상적이지만, 동시에 호기심이 많으시군요! 독특하고 창의적인 사고방식은 다른 사람을 이해하고 보듬는데에 더욱 힘을 실어줍니다. 세심하고 깊이 있는 당신의 모습에 모두가 취할 거예요. 부드럽고 포근한 당신은 쉬림프 피자입니다.",
        image: `${shrimp}`,
    },
    {
        id: 13,
        name: "스테이크 피자",
        my: "INTP",
        best: "핫치킨 피자",
        best2: "타코 피자",
        desc: "직관적이고 논리적으로 생각하는 스타일이시군요. 분석하고 생각하는 것을 좋아하지만, 떄로는 자잘한 것들이 너무나 귀찮기도 하고요. 본인이 좋아하는 것에는 푹 빠져 정신을 차리지 못하는 당신! 정직하고 뚜렷한 스테이크 피자입니다!",
        image: `${steak}`,
    },
    {
        id: 14,
        name: "타코 피자",
        my: "ESTJ",
        best: "치즈 피자",
        best2: "가지 피자",
        desc: "정열적이고 표현이 풍부한 당신. 종종 화끈하다거나 불같은 면이 있다는 이야기를 들으실테지요. 그러나 그 불씨는 주변 사람들을 더욱 움직이게 하는 밝은 힘이 됩니다. 도전을 두려워하지 않고, 성실함과 끈기로 뭉쳐진 당신은 타코 피자입니다!",
        image: `${taco}`,
    },
    {
        id: 15,
        name: "가지 피자",
        my: "ISTP",
        best: "포테이토 피자",
        best2: "타코 피자",
        desc: "매우 논리적이고 합리적인 측면이 있으시네요. 누군가는 다가가기 어려운 사람이라고 생각할 수 있겠지만, 자신이 좋아하는 사람이나 분야에서 만큼은 사랑이 넘치는 스타일입니다. 스스로가 옳다고 생각하는 것을 꾸준히 끌고 나가는 끈기도 있고요. 아리송하면서도 슴슴한 매력을 가진 당신, 유구한 전통을 가진 마르게리따 피자입니다!",
        image: `${eggplant}`,
    },
    {
        id: 16,
        name: "미트볼 피자",
        my: "ENFP",
        best: "콤비네이션 피자",
        best2: "마르게리따 피자",
        desc: "과연 당신의 상상력과 친화력의 끝은 어디일까요? 모두를 한데 묶을 수 있는 화사함을 가지셨군요! 예측할 수 없는 다양함과 즉흥성으로 더욱 다각적인 매력을 뿜어냅니다. 긍정과 활력의 아이콘인 당신은 미트볼 피자입니다!",
        image: `${meatball}`,
    },
]