// ==========================================
// 1. RUSSIAN LITERATURE DATABASE (30 BOOKS)
// ==========================================
const BOOKS = [
  {
    id: 1,
    title: "죄와 벌",
    originalTitle: "Преступление и наказание",
    author: "표도르 도스토옙스키",
    year: "1866년",
    era: "era-tsar",
    format: "format-novel",
    genres: ["genre-psychology", "genre-philosophy"],
    similarAuthors: ["author-dostoevsky", "author-camus"],
    summary: "가난한 대학생 라스콜니코프가 초인 사상에 빠져 고리대금업자 노파를 살해한 뒤, 양심의 가책과 죄책감으로 고뇌하다가 소냐의 사랑과 신앙을 통해 구원받는 과정을 그린 심리 소설의 걸작입니다.",
    quote: "인간이 두려워하는 것은 오직 새로운 단계, 자신들의 새로운 말을 내딛는 것뿐이다.",
    pageLink: "https://ko.wikipedia.org/wiki/%EC%A5%84%EC%99%80_%EB%B2%8C"
  },
  {
    id: 2,
    title: "카라마조프 가의 형제들",
    originalTitle: "Братья Карамазовы",
    author: "표도르 도스토옙스키",
    year: "1880년",
    era: "era-tsar",
    format: "format-novel",
    genres: ["genre-philosophy", "genre-psychology"],
    similarAuthors: ["author-dostoevsky", "author-camus"],
    summary: "친부 살해라는 자극적인 소재를 통해 신과 악마, 자유의지, 종교적 구원 등 인간 정신의 가장 깊고 근본적인 질문들을 깊이 파고드는 세계 문학사의 정점입니다.",
    quote: "만일 신이 존재하지 않는다면, 모든 것이 허용될 것이다.",
    pageLink: "https://ko.wikipedia.org/wiki/%EC%B9%B4%EB%9D%BC%EB%A7%88%EC%A1%B0%ED%94%84%EA%B0%80%EC%9D%98_%ED%98%95%EC%A0%9C%EB%93%A4"
  },
  {
    id: 3,
    title: "전쟁과 평화",
    originalTitle: "Война и мир",
    author: "레프 톨스토이",
    year: "1869년",
    era: "era-tsar",
    format: "format-novel",
    genres: ["genre-history", "genre-politics"],
    similarAuthors: ["author-tolstoy"],
    summary: "나폴레옹의 러시아 침공 시기를 배경으로, 전쟁이라는 거대한 역사적 격랑 속에서 변화해 가는 여러 러시아 귀족 가문의 운명을 그린 사실주의 대서사시입니다.",
    quote: "가장 강한 전사는 이 두 가지, 바로 시간과 인내다.",
    pageLink: "https://ko.wikipedia.org/wiki/%EC%A0%84%EC%9F%81%EA%B3%B8_%ED%8F%89%ED%99%94"
  },
  {
    id: 4,
    title: "안나 카레니나",
    originalTitle: "Анна Каренина",
    author: "레프 톨스토이",
    year: "1877년",
    era: "era-tsar",
    format: "format-novel",
    genres: ["genre-love", "genre-politics"],
    similarAuthors: ["author-tolstoy", "author-shakespeare"],
    summary: "상류사회 귀족 안나 카레니나가 젊은 장교 브론스키와 사랑에 빠지며 파멸해 가는 비극과, 지주 레빈의 대조적인 삶을 통해 진정한 행복과 도덕성을 탐구합니다.",
    quote: "행복한 가정은 서로 닮았지만, 불행한 가정은 모두 저마다의 이유로 불행하다.",
    pageLink: "https://ko.wikipedia.org/wiki/%EC%95%88%EB%82%98_%EC%B9%B4%EB%A0%88%EB%8B%88%EB%82%98"
  },
  {
    id: 5,
    title: "예브게니 오네긴",
    originalTitle: "Евгений Онегин",
    author: "알렉산드르 푸시킨",
    year: "1833년",
    era: "era-tsar",
    format: "format-poetry-novel",
    genres: ["genre-love", "genre-philosophy"],
    similarAuthors: ["author-shakespeare"],
    summary: "러시아 근대 문학의 개척자 푸시킨이 지은 독창적인 '운문 소설'로, 권태에 절어 사는 귀족 청년 오네긴과 순수한 소녀 타티야나의 엇갈린 비극적 사랑을 감미로운 운율로 담았습니다.",
    quote: "습관은 하늘이 우리에게 준 선물, 그것은 행복의 대용품이다.",
    pageLink: "https://ko.wikipedia.org/wiki/%EC%98%88%EB%B8%8C%EA%B2%8C%EB%8B%88_%EC%98%A4%EB%84%A4%EA%B8%B4"
  },
  {
    id: 6,
    title: "죽은 혼",
    originalTitle: "Мёртвые души",
    author: "니콜라이 고골",
    year: "1842년",
    era: "era-tsar",
    format: "format-novel",
    genres: ["genre-humor", "genre-politics"],
    similarAuthors: ["author-haruki", "author-marquez"],
    summary: "세금 감면과 신분 상승을 노려 서류상에만 살아 있는 죽은 농노(혼)를 사들이는 협잡꾼 치치코프의 기괴한 여정을 통해 당대 러시아 관료제와 지주들의 탐욕과 부조리를 날카롭게 풍자했습니다.",
    quote: "웃음 속에 보이지 않는 눈물이 흐른다는 것을 모르는 사람은 아무도 없다.",
    pageLink: "https://ko.wikipedia.org/wiki/%EC%A3%BD%EC%9D%80_%ED%98%BC"
  },
  {
    id: 7,
    title: "거장과 마르가리타",
    originalTitle: "Мастер и Маргарита",
    author: "미하일 불가코프",
    year: "1967년(사후 출판)",
    era: "era-soviet",
    format: "format-novel",
    genres: ["genre-love", "genre-philosophy", "genre-humor"],
    similarAuthors: ["author-haruki", "author-marquez"],
    summary: "악마 볼란드 일당이 1930년대 공포정치 치하의 모스크바에 나타나 소동을 피우는 환상적 사건과, 억압받는 작가 '거장'을 향한 마르가리타의 숭고한 사랑을 마술적 사실주의 기법으로 융합한 수작입니다.",
    quote: "원고는 타지 않는다.",
    pageLink: "https://ko.wikipedia.org/wiki/%EA%B1%B0%EC%9E%A5%EA%B3%BC_%EB%A7%88%EB%A5%B4%EA%B0%80%EB%A6%AC%ED%83%80"
  },
  {
    id: 8,
    title: "닥터 지바고",
    originalTitle: "Доктор Живаго",
    author: "보리스 파스테르나크",
    year: "1957년",
    era: "era-soviet",
    format: "format-novel",
    genres: ["genre-love", "genre-history"],
    similarAuthors: ["author-han", "author-shakespeare"],
    summary: "러시아 혁명과 내전의 광풍 속에서 의사이자 시인인 지바고와 운명의 여인 라라의 비극적인 사랑, 그리고 혁명 속에서도 꺾이지 않는 개인의 고귀한 영혼과 예술적 성찰을 노래합니다.",
    quote: "당신을 사랑해요. 당신과 나, 우리 둘이 함께 있는 이 세상은 온통 기적으로 가득 차 있어요.",
    pageLink: "https://ko.wikipedia.org/wiki/%EB%8B%A5%ED%84%B0_%EC%A7%80%EB%B0%94%EA%B3%A0"
  },
  {
    id: 9,
    title: "이반 데니소비치, 수용소의 하루",
    originalTitle: "Один день Ивана Денисовича",
    author: "알렉산드르 솔제니친",
    year: "1962년",
    era: "era-soviet",
    format: "format-short",
    genres: ["genre-politics", "genre-philosophy"],
    similarAuthors: ["author-han", "author-camus"],
    summary: "스탈린 시대 강제 노동 수용소(굴라크)에 갇힌 평범한 수용수 슈호프의 숨막히는 혹독한 단 하루를 극도의 절제된 시선으로 묘사하여 인간 존엄성의 묵직한 의미를 고발했습니다.",
    quote: "수용소에서 살아남으려면 무언가를 요구해서는 안 된다. 오직 버텨야 할 뿐이다.",
    pageLink: "https://ko.wikipedia.org/wiki/%EC%9D%B4%EB%B0%98_%EB%8D%B0%EB%8B%88%EC%86%8C%EB%B9%84%EC%B9%98,_%EC%88%98%EC%9A%A9%EC%86%8C%EC%9D%98_%ED%95%98%EB%A3%A8"
  },
  {
    id: 10,
    title: "갈매기",
    originalTitle: "Чайка",
    author: "안톤 체호프",
    year: "1896년",
    era: "era-tsar",
    format: "format-play",
    genres: ["genre-love", "genre-philosophy"],
    similarAuthors: ["author-shakespeare"],
    summary: "시골 영지를 배경으로 기성 세대와 신진 세대 예술가들의 충돌, 그리고 얽히고설킨 짝사랑과 상실을 그린 4막 희극입니다. 체호프 극예술의 정수로 꼽힙니다.",
    quote: "나는 갈매기예요... 아니, 그게 아니지. 나는 여배우예요.",
    pageLink: "https://ko.wikipedia.org/wiki/%EA%B0%88%EB%A7%A4%EA%B8%B0_(%ED%9D%AC%EA%B3%A1)"
  },
  {
    id: 11,
    title: "개를 데리고 다니는 여인",
    originalTitle: "Дама с собачкой",
    author: "안톤 체호프",
    year: "1899년",
    era: "era-tsar",
    format: "format-short",
    genres: ["genre-love"],
    similarAuthors: ["author-haruki"],
    summary: "얄타 휴양지에서 만나 서로 가정이 있는 상태에서 깊은 사랑에 빠져버린 남녀의 쓸쓸하면서도 지극히 사실적인 고독과 애잔한 사랑을 서정적으로 그린 명단편입니다.",
    quote: "그들에게는 남들에게는 숨겨져 있는 모든 것, 삶의 비밀이 가장 중요하고 가치 있는 것이었다.",
    pageLink: "https://ko.wikipedia.org/wiki/%EA%B0%9C%EB%A5%BC_%EB%8D%B0%EB%A6%AC%EA%B3%A0_%EB%8B%A4%EB%8B%98%EB%8A%94_%EC%97%AC%EC%9D%B8"
  },
  {
    id: 12,
    title: "롤리타",
    originalTitle: "Lolita",
    author: "블라디미르 나보코프",
    year: "1955년",
    era: "era-soviet", // 망명 작가이나 시대상 분류
    format: "format-novel",
    genres: ["genre-love", "genre-psychology"],
    similarAuthors: ["author-haruki", "author-camus"],
    summary: "중년의 교수 험버트 험버트가 어린 소녀 롤리타에게 느끼는 집착에 가까운 열정과 광기 어린 심리를 뛰어난 영어 수사와 언어적 유희로 그려낸 충격적이고도 매혹적인 걸작입니다.",
    quote: "롤리타, 내 삶의 빛, 내 몸의 불꽃. 나의 죄, 나의 영혼.",
    pageLink: "https://ko.wikipedia.org/wiki/%EB%A1%A4%EB%A6%AC%ED%83%80"
  },
  {
    id: 13,
    title: "아버지와 아들",
    originalTitle: "Отцы и дети",
    author: "이반 투르게네프",
    year: "1862년",
    era: "era-tsar",
    format: "format-novel",
    genres: ["genre-politics", "genre-philosophy"],
    similarAuthors: ["author-tolstoy"],
    summary: "구세대 지주인 '아버지들'의 낭만주의와 기성 관습에 맞서며 허무주의(니힐리즘)를 신봉하는 '아들들' 세대의 혁명적 대학생 바자로프의 대립을 명징한 필치로 그렸습니다.",
    quote: "인간은 누구나 스스로 자신을 가르쳐야 한다네.",
    pageLink: "https://ko.wikipedia.org/wiki/%EC%95%84%EB%B2%84%EC%A7%80%EC%99%80_%EC%95%84%EB%93%A4"
  },
  {
    id: 14,
    title: "수용소 군도",
    originalTitle: "Архипелаг ГУЛАГ",
    author: "알렉산드르 솔제니친",
    year: "1973년",
    era: "era-soviet",
    format: "format-essay",
    genres: ["genre-politics", "genre-history"],
    similarAuthors: ["author-han"],
    summary: "솔제니친 본인의 생생한 수용소 경험과 수백 명의 증언 및 기록을 바탕으로 만든 거대한 르포타주이자 수필로, 스탈린 치하 공포와 억압의 메커니즘을 낱낱이 파헤친 대작입니다.",
    quote: "인간의 영혼을 짓밟는 국가의 기구란 얼마나 무력한가.",
    pageLink: "https://ko.wikipedia.org/wiki/%EC%88%98%EC%9A%A9%EC%86%8C_%EA%B5%B0%EB%8F%84"
  },
  {
    id: 15,
    title: "외투",
    originalTitle: "Шинель",
    author: "니콜라이 고골",
    year: "1842년",
    era: "era-tsar",
    format: "format-short",
    genres: ["genre-politics", "genre-humor"],
    similarAuthors: ["author-haruki"],
    summary: "모스크바의 하급 관원 아카키 아카키예비치가 평생 아끼고 아껴서 장만한 소중한 새 외투를 강도에게 빼앗긴 뒤, 관료들의 냉대 속에 시름시름 앓다 죽어 유령이 되는 서글프고 기괴한 리얼리즘의 창시작입니다.",
    quote: "나는 당신들의 형제입니다. 왜 나를 괴롭힙니까?",
    pageLink: "https://ko.wikipedia.org/wiki/%EC%9Wait%ED%85%A8_(%EC%86%8C%EC%84%A4)"
  },
  {
    id: 16,
    title: "우리 시대의 영웅",
    originalTitle: "Герой нашего времени",
    author: "미하일 레르몬토프",
    year: "1840년",
    era: "era-tsar",
    format: "format-novel",
    genres: ["genre-psychology", "genre-love"],
    similarAuthors: ["author-camus"],
    summary: "러시아 코카서스를 배경으로 냉소적이고 권태에 빠진 청년 귀족 페초린의 모험과 연애, 결투를 다루며, 19세기 전반기 러시아 지식인의 방황과 허무를 그린 최초의 심리 소설입니다.",
    quote: "내 영혼은 일찍부터 슬픔에 익숙해졌고 상상 속의 고통을 즐길 정도가 되었다.",
    pageLink: "https://ko.wikipedia.org/wiki/%EC%96%B4%EB%A6%AC_%EC%8B%9C%EB%8C%80%EC%9D%98_%EC%98%81%EC%9B%85"
  },
  {
    id: 17,
    title: "우리들",
    originalTitle: "Мы",
    author: "예브게니 자먀틴",
    year: "1924년(망명 출판)",
    era: "era-soviet",
    format: "format-novel",
    genres: ["genre-politics", "genre-philosophy"],
    similarAuthors: ["author-camus", "author-haruki"],
    summary: "유리로 만들어진 완전히 통제된 미래의 '단일 제국'에서 번호로 불리는 인간들이 기계화된 삶을 사는 디스토피아를 고발한 작품으로, 올더스 헉슬리와 조지 오웰에게 지대한 영향을 끼쳤습니다.",
    quote: "나는 자유보다 행복을 더 사랑한다. 이것이 나의 유일한 진실이다.",
    pageLink: "https://ko.wikipedia.org/wiki/%EC%9A%B0%EB%A6%AC%EB%93%A4"
  },
  {
    id: 18,
    title: "구덩이",
    originalTitle: "Котлован",
    author: "안드레이 플라토노프",
    year: "1987년(사후 출판)",
    era: "era-soviet",
    format: "format-novel",
    genres: ["genre-politics", "genre-philosophy"],
    similarAuthors: ["author-camus"],
    summary: "이상적인 거대 공산주의 집단 주택의 기초를 놓기 위해 끊임없이 구덩이를 파헤쳐 나가지만, 결국 누구를 위한 것인지 알 수 없는 허망함과 부조리를 서정적이고 묵시록적으로 그린 디스토피아 소설입니다.",
    quote: "그는 끝없이 파내려간 그 거대한 구덩이 속에서 침묵하는 역사의 무게를 느꼈다.",
    pageLink: "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D1%82%D0%BB%D0%BE%D0%B2%D0%B0%D0%BD_(%D0%BF%D0%BE%D0%B2%D0%B5%D1%81%D1%82%D1%8C)"
  },
  {
    id: 19,
    title: "어머니",
    originalTitle: "Мать",
    author: "막심 고리키",
    year: "1906년",
    era: "era-tsar", // 연대는 혁명기 차르 말기
    format: "format-novel",
    genres: ["genre-politics", "genre-history"],
    similarAuthors: ["author-tolstoy"],
    summary: "무지하고 고통받던 평범한 어머니 펠라게야 닐로브나가 공장 노동자 아들의 사회주의 혁명 운동에 동참하며 민중의 위대한 투사로 의식화되고 성장해 나가는 사회주의 리얼리즘 문학의 시초입니다.",
    quote: "우리 영혼이 짓밟히는 것을 보고도 침묵하는 자들은 공범이다.",
    pageLink: "https://ko.wikipedia.org/wiki/%EC%96%B4%EB%A8%B8%EB%8B%88_(%EC%86%8C%EC%84%A4)"
  },
  {
    id: 20,
    title: "벚꽃 동산",
    originalTitle: "Вишнёвый сад",
    author: "안톤 체호프",
    year: "1904년",
    era: "era-tsar",
    format: "format-play",
    genres: ["genre-politics", "genre-history"],
    similarAuthors: ["author-shakespeare"],
    summary: "변화하는 20세기 초 경제적 격변 속에서 몰락해 가는 옛 귀족 가문이 벚꽃 동산이 경매에 넘어가는 와중에도 현실을 직시하지 못하고 방황하는 모습을 씁쓸하고 희극적으로 그려낸 4막 극작입니다.",
    quote: "작별이다, 옛 삶이여! 안녕, 새로운 삶이여!",
    pageLink: "https://ko.wikipedia.org/wiki/%EB%B2%9A%EA%BD%83_%EB%8F%99%EC%82%B0"
  },
  {
    id: 21,
    title: "어두운 가로수 길",
    originalTitle: "Тёмные аллеи",
    author: "이반 분닌",
    year: "1943년",
    era: "era-soviet", // 집필은 망명기(소련 시대)
    format: "format-short",
    genres: ["genre-love"],
    similarAuthors: ["author-haruki"],
    summary: "러시아 최초로 노벨문학상을 수상한 이반 분닌이 망명지 프랑스에서 쓴 사랑 테마 단편 모음집입니다. 관능적이고 슬프며 아름다웠던 지나간 날의 사랑의 한때를 수려한 묘사로 살려냈습니다.",
    quote: "사랑은 그저 환영에 불과할지라도, 우리 생의 유일한 빛이다.",
    pageLink: "https://ru.wikipedia.org/wiki/%D0%A2%D1%91%D0%BC%D0%BD%D1%8B%D0%B5_%D0%B0%D0%BB%D0%BB%D0%B5%D0%B8"
  },
  {
    id: 22,
    title: "바지를 입은 구름",
    originalTitle: "Облако в штанах",
    author: "블라디미르 마야콥스키",
    year: "1915년",
    era: "era-soviet", // 혁명 전야 및 초기
    format: "format-poem",
    genres: ["genre-politics", "genre-love"],
    similarAuthors: ["author-han"],
    summary: "혁명 시인 마야콥스키가 기성 사회의 도덕과 종교, 예술을 거칠고 격정적인 미래주의 운율로 난타하며, 실연의 고통과 정치적 분노를 대담한 은유로 선언한 불후의 장시입니다.",
    quote: "너희의 사랑, 너희의 예술, 너희의 사회를 무너뜨리겠다. 나는 바지를 입은 구름이다.",
    pageLink: "https://ko.wikipedia.org/wiki/%EB%B0%94%EC%A7%80%EB%A5%BC_%EC%9E%85%EC%9D%80_%EA%B5%AC%EB%A6%84"
  },
  {
    id: 23,
    title: "시선집",
    originalTitle: "Стихотворения",
    author: "마리나 츠베타예바",
    year: "1910-1941년(활동기)",
    era: "era-soviet",
    format: "format-poem",
    genres: ["genre-love", "genre-philosophy"],
    similarAuthors: ["author-han"],
    summary: "혁명과 전쟁, 가난과 고독 속에서 극적인 삶을 살며 비극적으로 생을 마감한 츠베타예바의 격렬하고 내밀한 서정시 모음입니다. 상실에 맞서는 영혼의 노래를 담고 있습니다.",
    quote: "나의 시들은 해 묵은 귀한 포도주처럼, 언젠가 제 때를 맞이할 것이다.",
    pageLink: "https://ko.wikipedia.org/wiki/%EB%A7%88%EB%A6%AC%EB%82%98_%EC%B8%A0%EB%B2%A0%ED%83%80%EC%98%88%EB%B0%94"
  },
  {
    id: 24,
    title: "채파예프와 푸스토타",
    originalTitle: "Чапаев и Пустота",
    author: "빅토르 페레빈",
    year: "1996년",
    era: "era-modern",
    format: "format-novel",
    genres: ["genre-philosophy", "genre-humor"],
    similarAuthors: ["author-haruki"],
    summary: "1919년 러시아 적백 내전기의 영웅 채파예프의 참모장 '푸스토타'가 현대 모스크바의 정신병원과 시공간을 교차하며 불교적 공(空)사상과 포스트모던 해학을 체험하는 파격적 소설입니다.",
    quote: "우리가 현실이라 부르는 모든 것은 영원한 공허 위에 덧칠해진 그림에 불과하다.",
    pageLink: "https://ru.wikipedia.org/wiki/%D0%A7%D0%B0%D0%BF%D0%B0%D0%B5%D0%B2_%D0%B8_%D0%9F%D1%83%D1%81%D1%82%D0%BE%D1%82%D0%B0"
  },
  {
    id: 25,
    title: "소네치카",
    originalTitle: "Сонечка",
    author: "류드밀라 울리츠카야",
    year: "1992년",
    era: "era-modern",
    format: "format-short",
    genres: ["genre-love"],
    similarAuthors: ["author-han"],
    summary: "책과 문학의 세계에 푹 빠져 평생을 살았던 순박한 여인 소네치카의 헌신적인 사랑과 노년의 배신, 그럼에도 불구하고 영혼 깊이 간직한 문학적 위안과 따스한 시선을 고스란히 담아냈습니다.",
    quote: "책은 나에게 단순한 종이가 아닌, 들이쉬고 내쉬는 진정한 삶의 호흡이었다.",
    pageLink: "https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D0%BD%D0%B5%D1%87%D0%BA%D0%B0_(%D0%BF%D0%BE%D0%B2%D0%B5%D1%81%D1%82%D1%8C)"
  },
  {
    id: 26,
    title: "러시아의 맥베스 부인",
    originalTitle: "Леди Макбет Мценского уезда",
    author: "니콜라이 레스코프",
    year: "1865년",
    era: "era-tsar",
    format: "format-short",
    genres: ["genre-psychology", "genre-love"],
    similarAuthors: ["author-shakespeare"],
    summary: "지루하고 가혹한 상인 집안의 며느리 카테리나가 매력적인 일꾼 세르게이와 치명적인 불륜에 빠지며, 그 사랑을 지키기 위해 살인도 서슴지 않는 광적인 집착과 잔혹함을 다룬 셰익스피어 오마주작입니다.",
    quote: "내 사랑은 오직 죽음만이 끝낼 수 있는 지독한 독약이다.",
    pageLink: "https://ko.wikipedia.org/wiki/%EB%9F%AC%EC%8B%9C%EC%95%84%EC%9D%98_%EB%A7%A5%EB%B2%A0%EC%8A%A4_%EB%B6%80%EC%9D%B8"
  },
  {
    id: 27,
    title: "바보 이반",
    originalTitle: "Сказка об Иване-дураке",
    author: "레프 톨스토이",
    year: "1886년",
    era: "era-tsar",
    format: "format-short",
    genres: ["genre-humor", "genre-philosophy"],
    similarAuthors: ["author-tolstoy"],
    summary: "약삭빠른 형제들과 달리 우직하게 땀 흘려 일하는 바보 이반이 마귀들의 온갖 유혹을 물리치고, 진정한 노동과 무소유의 평화로운 공동체를 이룩하는 우화적인 철학 소설입니다.",
    quote: "일하지 않는 자는 먹지도 마라. 손에 굳은살이 박인 자만이 식탁의 주인이 된다.",
    pageLink: "https://ko.wikipedia.org/wiki/%EB%B0%94%EB%B3%B4_%EC%9D%B4%EB%B0%98"
  },
  {
    id: 28,
    title: "삶과 운명",
    originalTitle: "Жизнь и судьба",
    author: "바실리 그로스만",
    year: "1980년(사후 복원 출판)",
    era: "era-soviet",
    format: "format-novel",
    genres: ["genre-history", "genre-politics"],
    similarAuthors: ["author-tolstoy", "author-han"],
    summary: "스탈린그라드 전투를 배경으로 전체주의 국가(나치 독일과 소련 스탈린 체제) 하에서 짓밟히는 평범한 개인들의 삶과 가족애를 다룬 20세기의 《전쟁과 평화》로 일컬어지는 기념비적 역작입니다.",
    quote: "인간은 국가를 위해 태어난 것이 아니라, 자유를 위해 태어났다.",
    pageLink: "https://ru.wikipedia.org/wiki/%D0%96%D0%B8%D0%B7%D0%BD%D1%8C_%D0%B8_%D1%81%D1%83%D0%B4%D1%8C%D0%B1%D0%B0"
  },
  {
    id: 29,
    title: "콜리마 이야기",
    originalTitle: "Колымские рассказы",
    author: "바를람 샬라모프",
    year: "1978년",
    era: "era-soviet",
    format: "format-short",
    genres: ["genre-politics", "genre-philosophy"],
    similarAuthors: ["author-han", "author-camus"],
    summary: "극동 콜리마 광산 강제 수용소에서 17년간 복역한 생생한 체험을 극한의 서늘하고 객관적인 문체로 써내려간 단편 연작집입니다. 극한 상황 속 인간성 파멸과 내면을 냉엄히 보여줍니다.",
    quote: "수용소에서는 가장 고결한 성품을 지닌 자들이 제일 먼저 죽어 나갔다.",
    pageLink: "https://ko.wikipedia.org/wiki/%EC%BD%9C%EB%A6%AC%EB%A7%88_%EC%9D%B4%EC%95%BC%EA%B8%B0"
  },
  {
    id: 30,
    title: "메트로 2033",
    originalTitle: "Метро 2033",
    author: "드미트리 글루홉스키",
    year: "2005년",
    era: "era-modern",
    format: "format-novel",
    genres: ["genre-psychology", "genre-history"],
    similarAuthors: ["author-haruki"],
    summary: "핵전쟁 이후 인류의 마지막 피난처가 된 모스크바 지하철(메트로) 터널 속에서 벌어지는 기괴한 괴생명체와의 투쟁과 고립된 인간들의 군상, 그리고 주인공 아르티옴의 숨막히는 여정을 그린 포스트 아포칼립스 걸작입니다.",
    quote: "지상에 햇빛이 완전히 꺼졌을 때, 우리 마음속의 빛도 서서히 바스러지기 시작했다.",
    pageLink: "https://ko.wikipedia.org/wiki/%EB%A9%94%ED%8A%B8%EB%A1%9C_2033"
  }
];

// ==========================================
// 2. STATE MANAGEMENT & MATCHING ALGORITHM
// ==========================================
let currentStep = 0; // 0: Intro, 1: Genre, 2: Author, 3: Format, 4: Era, 5: Result
const selectedAnswers = {
  genre: "",
  author: "",
  format: "",
  era: ""
};

// Calculate weights and score
function getRecommendations() {
  const scoredBooks = BOOKS.map(book => {
    let score = 0;
    
    // 1. Genre match (+4)
    if (book.genres.includes(selectedAnswers.genre)) {
      score += 4;
    }
    
    // 2. Similar Author match (+3)
    if (book.similarAuthors.includes(selectedAnswers.author)) {
      score += 3;
    }
    
    // 3. Format match (+2)
    if (book.format === selectedAnswers.format) {
      score += 2;
    }
    
    // 4. Era match (+1)
    if (book.era === selectedAnswers.era) {
      score += 1;
    }
    
    return { ...book, score };
  });

  // Sort by score descending. Ties are broken by standard ID (classic status).
  scoredBooks.sort((a, b) => b.score - a.score || a.id - b.id);
  
  return scoredBooks.slice(0, 3);
}

// ==========================================
// 3. DOM INTERACTION & SCREEN NAVIGATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  const steps = [
    document.getElementById("step-intro"),
    document.getElementById("step-genre"),
    document.getElementById("step-author"),
    document.getElementById("step-format"),
    document.getElementById("step-era"),
    document.getElementById("step-result")
  ];

  const nextBtn = document.getElementById("next-btn");
  const prevBtn = document.getElementById("prev-btn");
  const restartBtn = document.getElementById("restart-btn");
  const stepTracker = document.getElementById("step-tracker");
  const trackerFill = document.getElementById("tracker-fill");
  const currentStepNum = document.getElementById("current-step-num");
  
  // Navigation functions
  function navigateTo(stepIndex) {
    // Hide all steps
    steps.forEach((step, idx) => {
      if (step) {
        step.classList.remove("active");
        if (idx === stepIndex) {
          step.classList.add("active");
        }
      }
    });

    currentStep = stepIndex;
    updateNavigationControls();
    updateProgressTracker();
  }

  function updateNavigationControls() {
    // Controls container visibility
    const navControls = document.getElementById("nav-controls");
    if (currentStep === 0 || currentStep === 5) {
      navControls.style.display = "none";
    } else {
      navControls.style.display = "flex";
    }

    // Toggle Next button state based on selection
    validateStepSelection();
  }

  function updateProgressTracker() {
    if (currentStep > 0 && currentStep < 5) {
      stepTracker.style.display = "block";
      const percentage = ((currentStep - 1) / 3) * 100;
      trackerFill.style.width = `${percentage}%`;
      currentStepNum.textContent = currentStep;
    } else {
      stepTracker.style.display = "none";
    }
  }

  function validateStepSelection() {
    let isValid = false;
    if (currentStep === 1 && selectedAnswers.genre) isValid = true;
    if (currentStep === 2 && selectedAnswers.author) isValid = true;
    if (currentStep === 3 && selectedAnswers.format) isValid = true;
    if (currentStep === 4 && selectedAnswers.era) isValid = true;

    if (isValid) {
      nextBtn.removeAttribute("disabled");
      nextBtn.classList.remove("disabled");
    } else {
      nextBtn.setAttribute("disabled", "true");
      nextBtn.classList.add("disabled");
    }
  }

  // Handle option selection
  const optionButtons = document.querySelectorAll(".option-btn");
  optionButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const type = btn.getAttribute("data-type");
      const value = btn.getAttribute("data-value");

      // Clear siblings active status
      const container = btn.parentElement;
      container.querySelectorAll(".option-btn").forEach(sibling => {
        sibling.classList.remove("selected");
      });

      // Select clicked
      btn.classList.add("selected");
      selectedAnswers[type] = value;

      validateStepSelection();
    });
  });

  // Start Button Click
  const startBtn = document.getElementById("start-btn");
  if (startBtn) {
    startBtn.addEventListener("click", () => navigateTo(1));
  }

  // Next Button Click
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (currentStep < 4) {
        navigateTo(currentStep + 1);
      } else if (currentStep === 4) {
        // Last step finished -> show results
        renderResults();
        navigateTo(5);
      }
    });
  }

  // Prev Button Click
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (currentStep > 1) {
        navigateTo(currentStep - 1);
      }
    });
  }

  // Restart Button Click
  if (restartBtn) {
    restartBtn.addEventListener("click", () => {
      // Reset values
      selectedAnswers.genre = "";
      selectedAnswers.author = "";
      selectedAnswers.format = "";
      selectedAnswers.era = "";

      optionButtons.forEach(btn => btn.classList.remove("selected"));

      navigateTo(0);
    });
  }

  // Render Results Page
  function renderResults() {
    const recommendations = getRecommendations();
    const resultsContainer = document.getElementById("recommendation-cards");
    if (!resultsContainer) return;

    resultsContainer.innerHTML = "";

    recommendations.forEach((book, index) => {
      const card = document.createElement("div");
      card.className = "book-card constructivism-border";
      // Constructivism-style index badge (01, 02, 03)
      const formattedIndex = `0${index + 1}`;
      
      card.innerHTML = `
        <div class="card-badge">${formattedIndex}</div>
        <div class="card-content">
          <h3 class="book-title">${book.title}</h3>
          <p class="book-author">${book.author}</p>
          <div class="book-meta">
            <span class="meta-tag red-bg">${formatEraLabel(book.era)}</span>
            <span class="meta-tag black-bg">${formatFormatLabel(book.format)}</span>
          </div>
          <p class="book-brief">${book.summary.substring(0, 65)}...</p>
          <button class="detail-btn btn-sm text-bold" data-id="${book.id}">DETAILS / ЧИТАТЬ</button>
        </div>
      `;

      resultsContainer.appendChild(card);
    });

    // Add listeners to detail buttons
    document.querySelectorAll(".detail-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = parseInt(btn.getAttribute("data-id"));
        openBookModal(id);
      });
    });
  }

  // Helpers for labels
  function formatEraLabel(era) {
    if (era === "era-tsar") return "차르 시대";
    if (era === "era-soviet") return "소련 시대";
    if (era === "era-modern") return "근현대";
    return era;
  }

  function formatFormatLabel(format) {
    if (format === "format-essay") return "수필";
    if (format === "format-pure") return "순수 문학";
    if (format === "format-poetry-novel") return "운문 소설";
    if (format === "format-novel") return "장편 소설";
    if (format === "format-short") return "단편 소설";
    if (format === "format-poem") return "시";
    if (format === "format-play") return "희곡";
    return format;
  }

  // Modal logic
  const modal = document.getElementById("book-modal");
  const modalClose = document.getElementById("modal-close");

  function openBookModal(bookId) {
    const book = BOOKS.find(b => b.id === bookId);
    if (!book || !modal) return;

    document.getElementById("modal-title-kr").textContent = book.title;
    document.getElementById("modal-title-ru").textContent = book.originalTitle;
    document.getElementById("modal-author").textContent = book.author;
    document.getElementById("modal-year").textContent = book.year;
    document.getElementById("modal-era").textContent = formatEraLabel(book.era);
    document.getElementById("modal-format").textContent = formatFormatLabel(book.format);
    
    // Render genres list
    const genresList = book.genres.map(g => {
      if (g === "genre-love") return "사랑";
      if (g === "genre-politics") return "정치/사회";
      if (g === "genre-history") return "전쟁/역사";
      if (g === "genre-psychology") return "추리/심리";
      if (g === "genre-philosophy") return "철학/존재";
      if (g === "genre-humor") return "유머/풍자";
      return g;
    }).join(", ");
    document.getElementById("modal-genres").textContent = genresList;
    
    document.getElementById("modal-summary").textContent = book.summary;
    document.getElementById("modal-quote").textContent = `"${book.quote}"`;

    const wikiBtn = document.getElementById("modal-wiki-btn");
    if (wikiBtn && book.pageLink) {
      wikiBtn.href = book.pageLink;
      wikiBtn.style.display = "inline-block";
    } else if (wikiBtn) {
      wikiBtn.style.display = "none";
    }

    modal.classList.add("show");
  }

  if (modalClose) {
    modalClose.addEventListener("click", () => {
      modal.classList.remove("show");
    });
  }

  // Close modal when clicking outside contents
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("show");
      }
    });
  }

  // Initial step setup
  navigateTo(0);
});
