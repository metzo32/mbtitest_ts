import { IResult } from "./types"

import bacon from "../../assets/pizza/bacon.jpg"
import cheese from "../../assets/pizza/cheese.jpg"
import combination from "../../assets/pizza/combination.jpg"
import corn from "../../assets/pizza/corn.jpg"
import hotchicken from "../../assets/pizza/hotchicken.jpg"
import margherita from "../../assets/pizza/margherita.jpg"
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
        name: "베이컨피자",
        best: "ENTP",
        desc: "머리는 차갑게, 가슴은 뜨겁게. 논리적이며 명확한 추진력을 가졌고, 매사 유쾌한 자세를 유지하시네요. 고기는 언제나 옳다! 모두가 따르는 당신은 베이컨 피자입니다.",
        image: `${bacon}`,
    },
    {
        id: 2,
        name: "치즈피자",
        best: "ISFP",
        desc: "표현과 말수가 적고, 고요하게 누워있기 좋아하시는군요! 하지만 색깔이 전혀 없는 것은 아니랍니다. 근본 중의 근본! 가장 무난함이 당신의 가장 큰 매력 아닐까요? 평범해 보이지만 꾸준히 사랑받는 당신은 치즈피자입니다!",
        image: `${cheese}`,
    },
    {
        id: 3,
        name: "콤피네이션피자",
        best: "INFJ",
        desc: "어디에서나 적절하게 잘 어울리는 당신. 당신을 마다할 사람이 있을까요? 정적이지만 동적이고, 동적이다가도 정적인 매력의 소유자. 뭘 좋아할지 몰라 다 준비해보았습니다. 콤비네이션 피자입니다!",
        image: `${combination}`,
    },
    {
        id: 4,
        name: "옥수수피자",
        best: "ESFP",
        desc: "자유로운 영혼의 소유자시군요! 즐거움과 새로움을 위해서라면 팔랑팔랑 나비처럼 날아가는 당신. 고민이 생기더라고 금새 훌훌 털어내는 쿨함의 대명사입니다. 단순하면서도 개성이 강한 당신은 옥수수 피자입니다!",
        image: `${corn}`,
    },
    {
        id: 5,
        name: "핫치킨피자",
        best: "ENTJ",
        desc: "당신은 대담함과 야망으로 이루어지셨네요! 비효율과 애매한 것은 반드시 고쳐야 직성이 풀리고요. 빠른 결정 능력과 철저하면서도 화끈한 성격이 도전을 멈추지 않게 합니다. 새로움을 추구하는 당신은 핫치킨 피자입니다!",
        image: `${hotchicken}`,
    },
    {
        id: 6,
        name: "마르게리따피자",
        best: "INTJ",
        desc: "매사 신중하고 자기 표현이 많지 않으시군요. 하지만 굳이 말하지 않아도 아는 사람은 아는 매력을 가지셨습니다. 독특하면서도 눈에 띄지 않지만, 또 한번 빠져들면 찾게되는 당신, 유구한 전통을 가진 마르게리따 피자입니다!",
        image: `${margherita}`,
    },

    {
        id: 7,
        name: "버섯트러플피자",
        best: "ISFJ",
        desc: "사교적인 ESTP와 어울리는 스핑크스는 장난기가 많습니다.",
        image: `${mushroom}`,
    },
    {
        id: 8,
        name: "페퍼로니피자",
        best: "ENFJ",
        desc: "사교적인 ESTP와 어울리는 스핑크스는 장난기가 많습니다.",
        image: `${pepperoni}`,
    },
    {
        id: 9,
        name: "하와이안피자",
        best: "ESFJ",
        desc: "사교적인 ESTP와 어울리는 스핑크스는 장난기가 많습니다.",
        image: `${pineapple}`,
    },
    {
        id: 10,
        name: "포테이토피자",
        best: "ISTJ",
        desc: "당신은 침착함, 책임감. 이 두 단어로 표현할 수 있어요. 성실하지만 자신의 능력을 과시하지 않는 어른스러운 면도 갖추셨군요. 튀지 않고 묵직한 당신! 포테이토 피자입니다.",
        image: `${potato}`,
    },
    {
        id: 11,
        name: "루꼴라프로슈토피자",
        best: "ESTP",
        desc: "빨리써",
        image: `${prosciutto}`,
    },
    {
        id: 12,
        name: "쉬림프피자",
        best: "INFP",
        desc: "사교적인 ESTP와 어울리는 스핑크스는 장난기가 많습니다.",
        image: `${shrimp}`,
    },
    {
        id: 13,
        name: "스테이크피자",
        best: "INTP",
        desc: "직관적이고 논리적인 면을 탄탄히 갖추셨군요. 분석하고 생각하는 것을 좋아하지만, 떄로는 자잘한 것들이 너무나 귀찮기도 하고요. 본인이 좋아하는 것에는 푹 빠져 정신을 차리지 못하는 당신! 정직하고 뚜렷한 스테이크 피자입니다!",
        image: `${steak}`,
    },
    {
        id: 14,
        name: "타코피자",
        best: "ESTJ",
        desc: "정열적이고 표현이 풍부한 당신. 종종 화끈하다거나 불같은 면이 있다는 이야기를 들으실테지요. 도전을 두려워하지 않고, 성실함과 끈기로 뭉쳐진 당신은 타코 피자입니다!",
        image: `${taco}`,
    },
    {
        id: 15,
        name: "가지피자",
        best: "ISTP",
        desc: "매우 논리적이고 합리적인 측면이 있으시네요. 누군가는 다가가기 어려운 사람이라고 생각할 수 있겠지만, 자신이 좋아하는 사람이나 분야에서 만큼은 사랑이 넘치는 스타일입니다. 스스로가 옳다고 생각하는 것을 꾸준히 끌고 나가는 끈기도 있고요. 아리송하면서도 슴슴한 매력을 가진 당신, 유구한 전통을 가진 마르게리따 피자입니다!",
        image: `${cheese}`,
    },
    {
        id: 16,
        name: "올인원피자",
        best: "ENFP",
        desc: "과연 당신의 상상력과 친화력의 끝은 어디일까요? 모두를 한데 묶을 수 있는 화사함을 가지셨군요! ",
        image: `${cheese}`,
    },
]