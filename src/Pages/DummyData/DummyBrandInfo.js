import apple from "../../logos/brandLogo-big/it/apple.png";
import microsoft from "../../logos/brandLogo-big/it/microsoft.jpg";
import intel from "../../logos/brandLogo-big/it/Intel.svg";
import AMD from "../../logos/brandLogo-big/it/Amd.png";
import Nvidia from "../../logos/brandLogo-big/it/nvidia.png";
import Dell from "../../logos/brandLogo-big/it/Dell.png";
import HP from "../../logos/brandLogo-big/it/Hp.png";
import Lenovo from "../../logos/brandLogo-big/it/lenovo.png";
import Samsung from "../../logos/brandLogo-big/it/samsung.png";
import LG from "../../logos/brandLogo-big/it/lg.png";
/*음료수*/
import cocacola from "../../logos/brandLogo-big/drink/cocacola.png";
import idiya from "../../logos/brandLogo-big/drink/idiya.jpg";
import monster from "../../logos/brandLogo-big/drink/monster.jpg";
import pepsi from "../../logos/brandLogo-big/drink/pepsi.jpg";
import redbull from "../../logos/brandLogo-big/drink/redbull.png";
import starbucks from "../../logos/brandLogo-big/drink/starbucks.png";
import twosome from "../../logos/brandLogo-big/drink/twosome.jpg";
import fanta from "../../logos/brandLogo-big/drink/Fanta.png";
import illy from "../../logos/brandLogo-big/drink/illy.png";
import chilsung from "../../logos/brandLogo-big/drink/chilsung.png";
import coffeebean from "../../logos/brandLogo-big/drink/coffeebean.jpg";
import drpepper from "../../logos/brandLogo-big/drink/drpepper.png";
import hollys from "../../logos/brandLogo-big/drink/hollys.png";
import mountainDew from "../../logos/brandLogo-big/drink/mountainDew.png";
import peik from "../../logos/brandLogo-big/drink/peik.png";
import perrier from "../../logos/brandLogo-big/drink/perrier.png";
import gongcha from "../../logos/brandLogo-big/drink/goncha.jpg";
import sprite from "../../logos/brandLogo-big/drink/sprite.png";
import toms from "../../logos/brandLogo-big/drink/toms.png";
import angelinus from "../../logos/brandLogo-big/drink/angelinus.svg";
/*자동차 */

import tesla from "../../logos/brandLogo-big/car/tesla.png";
import hyundai from "../../logos/brandLogo-big/car/hyundai.jpg";
import ferrari from "../../logos/brandLogo-big/car/ferrari.jpg";
import lamborghini from "../../logos/brandLogo-big/car/lamborghini.png";
import volvo from "../../logos/brandLogo-big/car/volvo.jpg";
import scania from "../../logos/brandLogo-big/car/SCANIA.png";
import ford from "../../logos/brandLogo-big/car/ford.png";
import chevrolet from "../../logos/brandLogo-big/car/Chevrolet.jpg";
import porche from "../../logos/brandLogo-big/car/porche.png";
import renault from "../../logos/brandLogo-big/car/renault.svg";
import man from "../../logos/brandLogo-big/car/MAN.png";
import lincoln from "../../logos/brandLogo-big/car/lincoln.jpg";
import benz from "../../logos/brandLogo-big/car/benz.png";
import bmw from "../../logos/brandLogo-big/car/bmw.svg";
import jaguar from "../../logos/brandLogo-big/car/jaguar.png";
import bentley from "../../logos/brandLogo-big/car/bentley.jpg";
import pagani from "../../logos/brandLogo-big/car/pagani.jpg";
import mclaren from "../../logos/brandLogo-big/car/mclaren.png";
import gmc from "../../logos/brandLogo-big/car/GMC.jpg";
import volkswagen from "../../logos/brandLogo-big/car/volkswagen.png";
import lada from "../../logos/brandLogo-big/car/lada.png";
import audi from "../../logos/brandLogo-big/car/audi.png";
/*
IT/미디어: 1~50
자동차: 51~100
커피 및 음료 : 101~200
*/
const DummyBrandInfo = [
  //IT/Midea
  {
    _id: 1,
    brand_id: 1,
    brand_name: "Apple",
    brand_main_image: apple,
    brand_sub_image: "",
    brand_link: "https://www.apple.com/kr/",
    category: "IT&미디어",
    contents: {
      history: "",
    },
  },
  {
    _id: 2,
    brand_id: 2,
    brand_name: "Microsoft",
    brand_main_image: microsoft,
    brand_sub_image: "",
    brand_link: "https://www.microsoft.com/ko-kr",
    category: "IT&미디어",
    contents: {
      history: `마이크로소프트는 다양한 컴퓨터 기기에 사용되는 소프트웨어 및 하드웨어 제품들을 개발, 생산, 판매, 관리한다. 마이크로소프트의 가장 유명한 제품은 마이크로소프트 윈도우라는 운영 체제이다. 1975년에 빌 게이츠와 폴 앨런이 베이직 인터프리터를 개발하여 판매하기 위해 미국 뉴멕시코주 앨버커키에 Micro-soft라는 이름으로 이 회사를 세웠다.

      2006년 6월 15일 빌 게이츠는 2008년 7월 31일에 은퇴하겠다고 선언하였으며 이후 직접 세운 자선 단체인 빌 & 멜린다 게이츠 재단에 전력하겠다고 밝혔으며, 대신 마이크로소프트의 이사회 의장을 맡고 있다.
      
      1998년부터 2000년까지 빌 게이츠의 대학 시절 친구인 스티브 발머가 사장직을 담당했다. 2009년경, 빌 게이츠가 그의 오른팔인 스티브 발머에게 회사의 최고 리더십을 양하는 과정에서 바통을 정확히 넘기는 방법에 관한 교본을 마련하기도 했다. 게이츠는 2000년 발머에게 CEO직을 넘겼다. 그러나 게이츠는 2008년 6월에야 회사의 일상 책임에서 완전히 벗어났는데 그 2년 전에 미리 이 사실을 알려 대비토록 한 바 있다. 그렇지만 게이츠는 여전히 워싱턴 주 레이먼드에 있는 회장실의 주인이다. MS는 발머의 인도 아래 세계 최고 수익성을 갖는 강력한 IT 기업으로 존재하고 있지만 2008년 여름 게이츠 퇴장 이후 주가가 30%나 떨어졌는데 발머에게 갖는 불안감 보다는 세계 경제의 어려움 탓으로 그 원인을 돌리기도 한다.[3]
      
      직원은 2013년 현재 전 세계적으로 약 10만 여 명이며, 인도, 중국, 영국 등에 컴퓨터 연구소를 운영하고 있다.
      
      2011년 5월 10일 마이크로소프트가 인터넷 전자회사 스카이프를 85억 달러(약 10조 원)에 인수하였다. 더불어 2013년 9월 2일, 마이크로소프트는 핀란드의 휴대전화 생산 업체인 노키아의 휴대전화 사업 부문을 54억 4,000만 유로(약 7조 8,654억 원)에 인수한다고 발표했다.
      
      2013년 8월, 마이크로소프트 CEO 스티브 발머가 12개월 안에 은퇴한다고 밝혔다. 2014년 2월 4일, 사티아 나델라를 CEO로, 존 W. 톰슨을 회장으로 임명했다.
      
      2015년 11월, 마이크로소프트는 HPE와 클라우드 사업부문에서 협력을 한다고 밝혔다. 특히 프라이빗 클라우드에 집중하고 퍼블릭 클라우드 서비스는 MS와 같은 파트너 솔루션을 제공할 것으로 전망된다.`,
    },
  },
  {
    _id: 3,
    brand_id: 3,
    brand_name: "Intel",
    brand_main_image: intel,
    brand_sub_image: "",
    brand_link: "https://www.intel.co.kr/content/www/kr/ko/homepage.html",
    category: "IT&미디어",
    contents: {
      history: `인텔 코퍼레이션(Intel Corporation, 나스닥: INTC)은 반도체의 설계와 제조를 하는 미국의 다국적 기업이다. 세계에서 가장 큰 반도체 제조사[3][4]로 본사는 캘리포니아주 샌타클래라에 있다.

      1968년 7월 18일에 고든 무어와 로버트 노이스가 인텔을 설립하였다. 인텔은 Integrated Electronics의 혼성어이다. 그러나 'intelligence'라는 영어 단어에서 유래하였다고 오해하는 경우도 있다.
      
      레슬리 배다스의 감독 하에, 1971년 최초의 마이크로프로세서인 인텔 4004를 만들었으며, 이후 만들어진 인텔 8088은 IBM PC에 장착되어 유명해졌다. 이때 만들어진 x86 명령어 아키텍처는 확장을 통해 지금까지 데스크탑 시장에서 널리 쓰이게 되었으며, 일반적으로 PC는 x86 호환 프로세서를 사용하는 IBM PC 호환기종을 칭하는 말이기도 하다.
      
      이뿐 아니라 메인보드 칩셋, 네트워크 카드, 집적 회로, 플래시 메모리, 그래픽 프로세서, 임베디드 프로세서 등의 통신과 컴퓨팅에 관련된 장치도 만든다.`,
      chart: "",
      insight: "",
    },
  },
  {
    _id: 4,
    brand_id: 4,
    brand_name: "AMD",
    brand_main_image: AMD,
    brand_sub_image: "",
    brand_link: "https://www.amd.com/ko",
    category: "IT&미디어",
    contents: {
      history: `어드밴스드 마이크로 디바이시스 주식회사(영어: Advanced Micro Devices, Inc.) 또는 AMD는 미국의 집적회로 설계 기업으로, 캘리포니아주 샌타클래라 카운티 서니베일에 위치하고 있다. 1969년 페어차일드 반도체 출신들이 주축이 되어 세워진 AMD는, 인텔에 이어 두 번째로 큰 x86 아키텍처 호환 프로세서 제조사이며 플래시 메모리 분야에서도 주도적인 위치에 서 있다. 2008년 7월에 헥터 루이츠 박사(Dr. Héctor Ruiz)로부터 더크 마이어가 CEO 및 회장직을 이어받았다. 더크 마이어는 불도저 문제와 퀄컴에 Aderno 매각 등 문제로 이사회에서 해임되고, 로리 리드가 새로운 CEO가 되었다. 현재 CEO 및 회장은 리사 수 박사이다.

      AMD는 애슬론, 애슬론 64, 옵테론, 튜리온 64, 셈프론, 듀론 등의 x86-호환 프로세서로 잘 알려져 있다. 또한 AMD는 지오드와 같은, 노트북에 쓰이기 쉬운 낮은 클럭의 모바일용 CPU도 제작하고 있다. 2006년 6월 24일, AMD는 54억 달러에 ATI를 인수 합병하기로 합의했다.
      
      또, 2007년에는 페넘을 출시했으며, 페넘 II, 애슬론 II 등의 모델들이 출시하였다. 2011년 CPU와 GPU를 하나의 칩셋에 통합한 가속 처리 장치인 1세대 APU 라노와 새롭게 설계된 불도저를 출시, 2012년에는 불도저에서 약간 개선된 파일드라이버와 2세대 APU 트리니티를 선보였다. 또 2013년에는 2세대 APU 트리니티에서 CPU와GPU의 클럭을 높인 3세대 APU 리치랜드를 출시하고 파일드라이버기반의 기존제품에서 동작클럭만 증가시킨 FX-9XXX시리즈를 출시한다. 2014년에는 3세대 APU 리치랜드에서 CPU개선과 GCN으로의 GPU세대 교체가 이루어진 스팀롤러 아키텍처기반 4세대 APU 카베리가 출시되었다.
      
      AMD는 (x86 기반) 개인용 컴퓨터 CPU 시장에서 인텔의 유일한 중대 라이벌이다. AMD가 ATI를 2006년 합병한 이후에 AMD는 그래픽 처리 장치(GPU,그래픽 카드) 시장에서도 높은 점유율을 얻고 있다.`,
    },
  },
  {
    _id: 5,
    brand_id: 5,
    brand_name: "Nvidia",
    brand_main_image: Nvidia,
    brand_sub_image: "",
    brand_link: "https://www.nvidia.com/ko-kr/",
    category: "IT&미디어",
    contents: {
      history: `엔비디아(NVIDIA, 나스닥: NVDA, /ɪnˈvɪdiə/)는 컴퓨터용 그래픽 처리 장치와 멀티미디어 장치를 개발, 제조하는 회사이다.
      엑스박스와 플레이스테이션 3과 같은 비디오 게임기에 그래픽 카드 칩셋을 공급하였으며 2005년 12월 14일, 엔비디아는 ULI를 인수했다. 본사는 캘리포니아주의 샌타클라라에 있다.
      
      주요 제품
      엔비디아의 주요 제품에는 '지포스'(GeForce) 시리즈 브랜드로 유명한 그래픽 카드 칩셋과 '엔포스'(nForce) 브랜드로 알려진 메인보드 칩셋이 있다. 이밖에 컴퓨터 그래픽 전문가를 위해 만든 그래픽 카드 칩셋 '쿼드로'(Quadro) 시리즈와 고성능 컴퓨팅용 카드인 '테슬라'(Tesla) 시리즈, 닌텐도 스위치 라이트 등에 들어가는 애플리케이션 프로세서(AP)인 '테그라'(Tegra)등이 있다
      
      역사
      크리스 말라초스키, 커티스 프리엠와 대만 이중 국적의 화교인 젠슨황(황인훈)은 1993년 1월 회사를 세웠으며, 1993년 4월 캘리포니아에서 사업을 시작했다. 리바 계열 그래픽 칩셋을 만들기까지 이 회사는 잘 알려져 있지 않았다. 1999년 나스닥에 상장하였고, 그 해 5월에 천만 번째 그래픽 칩셋을 생산하였다. 2000년, 부두 시리즈로 잘 알려진 3dfx 사를 인수하였다. 엔비디아는 실리콘 그래픽스 같은 OEM 회사들과 친한 관계를 맺기 시작했으며 2002년 2월, 1억 번째 그래픽 칩셋을 생산했다.
      현재 엔비디아와 AMD는 많은 컴퓨터에 사용되고 있는 그래픽 칩셋을 생산하고 있다. 엔비디아의 주 제품인 지포스 시리즈는 1999년 지포스 256으로 시작되었다. 현재 지포스 시리즈는 데스크톱, 지포스 Go 시리즈는 노트북용으로 사용되고 있다. 한편, PDA 등의 장치를 위한 고포스 시리즈도 있다.
      그래픽 카드 회사인 AMD와 다르게 자체 공장이 없기 때문에 칩 제작은 TSMC,삼성 LSI 등의 회사에서 한다. 이로 인해 공급과 수요의 물량에 차이가 나기도 한다.
      2016년 8월 기준으로 서버시장에 진출한데 이어 자율주행차 전용 반도체를 공개하며 인공지능기술과 관련된 사업영역을 점점 확대하고 있다. 시장 점유율은 AMD 그 다음 순위로 점유율을 유지하고 있다.
      `,
    },
  },
  {
    _id: 6,
    brand_id: 6,
    brand_name: "Dell",
    brand_main_image: Dell,
    brand_sub_image: "",
    brand_link: "https://www.dell.com/ko-kr",
    category: "IT&미디어",
    contents: {
      history: `델 주식회사(영어: Dell Inc.)는 미국의 전자제품 제조 및 판매 기업이다. 처음에는 1984년 11월 4일에 'PC's Limited'라는 이름으로 회사가 세워지다가, 사명을 바꾸어 새로 설립되었다. 또, 1980년대에서 1990년대 동안 델은 개인용 컴퓨터와 서버 분야에서 가장 큰 판매사였다. 2008년의 경우 컴퓨터 판매 분야에서 HP의 뒤를 이어 2위를 이어가고 있다.
      주 제품은 개인용 컴퓨터, 서버, 기억 장치, 네트워크 스위치, 소프트웨어, 텔레비전, 컴퓨터 주변기기 등이며, 기술 관련 제품을 제조하여 시장에 내놓아 판매하고 지원하고 있다.
      
      역사
      2006년에 포춘지는 포춘 500에 델을 25번째로 가장 큰 회사로 순위를 올렸다.
      2013년 2월 5일 마이클 델은 실버 레이크 파트너에 마이크로소프트의 추가 자금 조달과 더불어 차입매수되었다고 선언했다.`,
    },
  },
  {
    _id: 7,
    brand_id: 7,
    brand_name: "HP",
    brand_main_image: HP,
    brand_sub_image: "",
    brand_link: "https://www8.hp.com/kr/ko/home.html",
    category: "IT&미디어",
    contents: {
      history: `HP 주식회사(영어: HP Inc.)는 미국의 개인용 컴퓨터 제조 및 판매 회사이다. 2015년 11월 1일에 휴렛 팩커드의 기업용 클라우드 사업 분야와 개인용 컴퓨터 사업이 분할되면서 새로 설립된 컴퓨터 회사이다. 클라우드 사업 분야는 휴렛 팩커드 엔터프라이즈로 새로 설립되어 이어진다.

      2017년 11월, HP는 삼성의 프린터 부문을 10억 5천만 달러에 인수하였다.2019년 11월부터 2020년 3월 31일까지 미국의 복사기 회사 제록스로부터 강제 인수합병 시도에 시달렸다.
    
      현재로는 HP는 개인용 컴퓨터(PC), 프린터, 복합기, 3D프린터 등을 개발, 생산하고 있다.`,
    },
  },
  {
    _id: 8,
    brand_id: 8,
    brand_name: "Lenovo",
    brand_main_image: Lenovo,
    brand_sub_image: "",
    brand_link: "https://www.lenovo.com/kr/ko/",
    category: "IT&미디어",
    contents: {
      history: `레노버 그룹 주식회사(영어: Lenovo Group Ltd., 중국어: 联想集团有限公司)은 중화인민공화국 최대의 다국적 민영 기업이다. 스마트폰, 노트북 컴퓨터, 프로젝터, 데스크톱 컴퓨터, 워크스테이션, 서버, 스토리지 드라이브, IT 관리 소프트웨어 및 관련 서비스등 다양한 제품을 제조하고 판매하고있다.
      2001년 휴대폰 사업에 진출하였으며, 2005년에 IBM의 PC 부문을 인수 합병한 뒤부터 노트북 판매를 시작하였다.
      레노버는 미화 460억 달러 규모의 포춘 500대 기업이고 혁신적인 개인용, 기업용, 엔터프라이즈 기술을 제공하고 있는 업계 선도주자이다. 레노버의 고품질의 안정된 제품과 서비스 포트폴리오는 전설적인 PC 브랜드인 씽크 브랜드와 멀티 모드의 요가 브랜드, 워크스테이션, 서버, 스토리지, 스마트 TV, 모토롤라 브랜드를 포함한 스마트폰 제품군, 태블릿, 앱등으로 구성된다.
      
      
      제품
      PCG(PC Group)
      씽크(THINK) 시리즈
      레노버의 씽크(THINK) 제품군에는 씽크패드(ThinkPad) 노트북, 씽크센터(ThinkCentre) 데스크톱, 씽크비전(ThinkVision) 모니터, 씽크스테이션(ThinkStation) 워크스테이션, 씽크서버(ThinkServer), 리젼(LEGION)이 포함된다.
      오랜 기간 동안 혁신성과 우수성이 입증된 씽크패드는 20여 년 동안 PC 업계의 아이콘이 되었으며 현재까지 1억대 대 이상의 씽크패드가 판매되었다. 씽크패드 디자인은 계속해서 진화해왔으며, 레노버의 고객들은 저명한 씽크패드의 일관성과 신뢰성, 내구성에 대해 지속적으로 높게 평가하고 있다. 레노버는 씽크패드의 명성을 이어가기 위해 일상적 사용환경보다 훨씬 더 엄격한 군용 사양의 테스트를 시행한다. 씽크패드의 빨간 트랙포인트(이른바 빨콩), 멀티 터치 터치패드, 인체 공학적 키와 편리한 멀티미디어 버튼은 최고의 입력장치로도 유명하다.`,
    },
  },
  {
    _id: 9,
    brand_id: 9,
    brand_name: "Samsung",
    brand_main_image: Samsung,
    brand_sub_image: "",
    brand_link: "https://www.samsung.com/sec/",
    category: "IT&미디어",
    contents: {
      history: `삼성(Samsung)은 대한민국에 본사를 둔 다국적 기업이다.
      처음에는 이병철 창업주가 삼성물산이라는 이름으로 자본금 3만 원(현재가치 3억 원)에 지금의 삼성그룹을 창립하였다. "몸100세 근로(노동)환경을 만듭니다. 하루 최대 근로시간은 4시간으로 합니다. 복장(의복)은 자유복으로 합니다. 지구의 육식업을 채식업으로 이향합니다."
      "삼성그룹"이라는 상호의 회사는 실제로 존재하는 것이 아니며, 삼성전자를 중심으로, 삼성물산, 삼성생명 등 다수의 자회사를 두고 있다. 공정거래위원회는 삼성전자와 그 계열사를 1987년 대규모 기업집단으로 지정하였다. 
      1938년에 이병철이 대구에서 삼성상회를 창립하였고 그 탓인지 삼성 라이온즈가 대구에서 창단될 당시 대구에 거점을 둔 삼성그룹 계열사가 제일모직 밖에 없었던 것 때문에 김재하 전 대구 FC 단장 등 임원들이 제일모직에서 삼성 라이온즈로 대거 차출됐으며 대구를 연고로 한 제일모직 축구단 선수 중 한 명이었던 김호는 뒷날  수원 삼성 블루윙즈 초대감독을 역임했는데 이 팀은 대구가 한때 연고지 물망에 올랐었고 제일모직 부지 안에 잔디축구장이 조성된 데다 대구시민운동장이 바로 옆에 붙어있었던 탓인지 제일모직 축구단은 제일모직 잔디축구장과 대구시민운동장을 모두 이용했다. 이후 "삼성"이라는 상호 아래 여러 계열사를 설립하면서 그 규모를 키웠으며, 1950년대 후반, 인수합병의 대표주자로 나서면서 오늘날 재계 서열 1위의 거대 기업집단으로 성장하였다.
      또한 삼성그룹은 2013년 380조원 규모의 매출을 올렸다. 한국은행에 따르면 같은 해 대한민국의 명목 국내총생산(GDP)은 1428조 원이다. 해외 매출 비중이 훨씬 큰 삼성의 매출액은 GDP와 직접 비교하기 어렵지만, 그럼에도 삼성의 매출액이 대한민국 GDP의 26.6%나 차지한다는 점은 시사하는 바가 크다. 삼성의 수출은 2013년 1572억 달러로 한국 전체 수출액 6171억 달러의 25%에 해당한다.삼성그룹은 브랜드 파이낸스에서 선정하는 글로벌 브랜드가치순위 500대 기업에서 2018년 기준 4위에 올랐다. 브랜드 파이낸스는 매년 세계 기업의 브랜드가치를 평가하여 보고서를 작성, 브랜드가치 500대기업을 발표하고있는데, 브랜드 파이낸스는 2018년 삼성의 브랜드가치가 92289백만달러(약 104조원)의 가치를 지녔다고 평가했다.
      `,
    },
  },
  {
    _id: 10,
    brand_id: 10,
    brand_name: "LG",
    brand_main_image: LG,
    brand_sub_image: "",
    brand_link: "https://www.lge.co.kr/lgekor/main.do",
    category: "IT&미디어",
    contents: {
      history: `LG는 LG그룹의 지주회사이다. 
      1947년 1월 5일 락희화학공업사로 설립하였으며, 1974년 2월 1일 (주)럭키로 상호를 바꾸었다. 이후 1995년 2월 1일 LG화학으로 상호를 변경하였으며, 2000년 11월 현대석유화학 PVC/VCM 사업 부문을 인수하였다. 2001년 4월 LG CI(존속법인), LG화학(신설법인)으로 분리하였고, 2003년 3월 LG EI를 흡수합병, LG MRO를 분할 합병하면서 현재의 상호로 변경하였고 2004년 7월 GS홀딩스로 정유, 유통, 홈쇼핑 부분 및 임대사업 부문을 인적분할하였다.
      `,
    },
  },
  //커피, 음료
  {
    _id: 51,
    brand_id: 1,
    brand_name: "Idiya_Coffee",
    brand_main_image: idiya,
    brand_sub_image: "",
    brand_link: "https://www.ediya.com/",
    category: "커피&음료",
    contents: {
      history: `이디야커피(Ediya Coffee)는 대한민국 커피 전문 체인점이다. 매장 수 규모로 카페베네에 이어 대한민국에서 두 번째였지만 최근 매장 수 규모 1위로 올라섰다. 이디야는 에티오피아 말로 ‘대륙의 황제’를 의미한다.2001년 첫 매장(중앙대점)을 낸 이후로, 2003년 8월에 100번째, 2006년 10월에 200번째, 2009년 3월에 300번째 점포를 열었다. 2016년 9월 현재 2,000여 개에 이르는 점포를 두고 있다.
      2018년 4월 27일 2,500점을 돌파했다. 
      2005년 9월 중국 베이징에 지점을 열었다. 2011년 2월 사옥을 강남구 역삼동으로 이전했다. 2018년 요기요를 통해 커피 프랜차이즈 최초로 배달 서비스를 시작했다.
      `,
    },
  },
  {
    _id: 52,
    brand_id: 2,
    brand_name: "StarBucks",
    brand_main_image: starbucks,
    brand_sub_image: "",
    brand_link: "https://www.starbucks.co.kr/index.do",
    category: "커피&음료",
    contents: {
      history: `스타벅스(영어: Starbucks Corporation)는 세계에서 가장 큰 다국적 커피 전문점이다. 64개국에서 총 23,187개의 매점을 운영하고 있다. 나라별로 미국에서 12,973개, 중국에 1,897개, 캐나다에 1,550개, 일본에는 1,088개, 영국에는 927개, 대한민국에 1,000개, 멕시코에 356개 등을 운영하고 있다.
      최초의 스타벅스 점은 동업자 제리 볼드윈과 고든 보커, 지브 시글이 1971년 미국 워싱턴주 시애틀에서 개점하였다. 이때는 커피 원두를 판매하는 소매점이었으며, 1987년에 하워드 슐츠가 인수하고 커피 전문점으로서 새롭게 탄생시켰다. 스타벅스는 이후 급속도로 성장하였는데 1990년대에는 모든 평일마다 새로운 매점을 개점했으며, 이 속도는 2000년대까지 유지가 되었다. 북아메리카 지역을 제외한 첫 개점은 1990년대 중반에 이루어졌으며, 지금은 해외 매점들이 전체 매점의 3분의 1 가량 차지한다. 스타벅스는 2009년도에 해외에 900개의 새로운 매점을 개점하겠다고 선언했지만, 2008년도 부터 미국에서는 300개의 매점들이 문을 닫고 있다.
      드립형 커피와 각종 에스프레소 커피 외에도 차와 병음료수, 원두, 샌드위치, 샐러드, 파니니, 케이크, 그리고 보온병이나 머그컵과 같은 물품 등을 판매한다. 메뉴는 매점의 위치에 따라 다를 수 있고, 계절에 따라 상시로 바뀐다. 스타벅스 브랜드의 커피가 슈퍼마켓이나 편의점에서 판매되기도 한다. 주로 건물의 1층에 독립된 가게의 형태로 있지만, 쇼핑몰이나 은행, 서점과 함께 영업하기도 한다.
      최초의 스타벅스 매점은 1971년 미국 시애틀에서 개점하였다. 영어 교사 제리 볼드윈, 역사 과목 교사 제프 시글, 작가 고든 보커라는 세 명의 동업자가 점포를 낸 것이었다. 그들은 개인적으로 친분이 있던 알프레드 핏에게서 영감을 얻은 것이었는데, 알프레드 핏은 당시 파이크 플레이스 마켓에서 고품질 커피 원두와 장비를 판매하고 있던 업자였다. 스타벅스 1호점 매장의 위치는 1971년부터 1976년까지 웨스턴 애비뉴 2000번지였다. 이 자리에 있던 1호점 매장은 파이크 플레이스 1912번지로 나중에 이동하였다. 영업 첫해, 세 명의 동업자들은 그린(green) 커피 원두를 ‘피츠 커피 & 티’(피츠)에서 사들였으며, 나중에는 커피 원두를 커피 재배 업자에게 바로 사들이기 시작하였다.
1982년 사업가였던 하워드 슐츠가 스타벅스에 합류하였다. 밀라노로 여행을 다녀온 뒤 하워드 슐츠는 커피 원두뿐만 아니라 커피 및 에스프레소 드링크도 판매해야 한다고 주장하고 나섰다. 스타벅스의 창업주들은 그 의견에 반대하였다. 음료 시장에 진출한다는 것은 당시 스타벅스 기업의 핵심 사업에서 벗어난다는 까닭이었다. 창업주들의 생각으로는 커피란 것은 집에서 만들어 먹는 것이었다. 늘 바쁘고 편한 것을 추구하는 미국인에게라면, 커피 음료를 팔아 잇속을 챙길 수 있다고 확신한 하워드 슐츠는 1985년 “일 조르날레”(IL Giornale)라는 커피 바 체인을 차려 사업을 시작했다.
1984년 제리 볼드윈이 수장으로 있던 스타벅스사에 기회가 찾아왔다. 피츠(볼드윈은 현재 여기서 일한다)를 인수할 수 있는 기회였다. 1987년 스타벅스 창업자들은 스타벅스 체인을 슐츠의 일 기오날레에 팔아버렸다. 슐츠는 일 기오날레 매장의 브랜드를 전부 스타벅스로 재빨리 바꾸었다. 스타벅스는 크게 확장하기 시작했다. 시애틀 지역 외 매장으로서 캐나다  밴쿠버에 첫 매장을 내었다(워터프론트 역 (밴쿠버) 근처). 같은 해   시카고에도 매장을 내었다. 1992년 기업 공개를 할 당시에는 스타벅스는 165개의 점포를 소유한 커피점 체인으로 성장하였다.
1995년 하워드 슐츠는 라이트 매세이를 고용하여 매장을 완전히 재디자인(redesign)하도록 시켰다. 라이트 메세이는 시너지스틱 롤아웃 프로그램을 개발하여 하루에 한 매장씩 개장하도록 함으로써 스타벅스 사가 1년에 2천만 미국 달러를 절감할 수 있도록 하였다. 매세이는 또한 크레이티브 서비스 그룹(Creative Services Group)이라는 조직을 꾸려서, 그 조직이 단일 브랜드 스토리를 갖고 브랜드 정체성을 만들도록 시켰으며 또한 매장 디자인을 해 나가도록 시켰다. 《스타벅스 성공의 비결(원제:Pour Your Heart On It)》라는 책에서 하워드 슐츠는 이렇게 밝혔다.

스타벅스는 그 당시 고유의 비주얼 브랜드 언어를 창조해 나갔다. 스타벅스의 비주얼 브랜드 언어는 눈에 띄는 것이었으며 또한 남들과 구별되는 것이었다. 코카콜라가 100년 이상 붉은 색을 썼고, 스펜세리언 서체를 썼고, 녹색이 나는 병을 쓴 것과 마찬가지 식이었다. 스타벅스의 비주얼 브랜드 언어는 스타벅스 도안(graphic)의 룩 앤 필(look and feel)을 전달해 줄 수 있는 아이콘, 이야기(story), 컬러 팔레트(color palette) 등으로 구성되었다.

스타벅스는 북미 지역을 뛰어넘어서 해외 최초로 일본 도쿄에서 1996년 스타벅스 매장을 냈다. 1998년에는 영국 커피점 체인 시장에 진입하였다. 60여 개의 시애틀 커피 컴패니의 매장을 인수하고 간판을 스타벅스로 바꿔달면서 말이다. 창업자인 하워드 슐츠에 의해 2000년 CEO에 임명된 오린 스미스는 경영을 맡으면서 “2005년 은퇴할 것”이라고 미리 선언한 후 염두에 둔 후임에게 착실한 경영 수업을 시켰다. 청과매매 체인인 패스마크 CEO이던 짐 도널드를 2002년 영입해 북미시장 담당 사장을 시키면서 CEO를 맡기 전까지 ‘스타벅스 사람’이 되도록 훈련시킨 것이다. 2005년 11월까지 런던에는 맨해튼에 있던 매장보다 많은 개수의 매장이 들어서 버렸다. 이 사실은 스타벅스가 국제적 브랜드로서도 성공을 이루어 냈다는 것을 의미했다.
2003년 4월, 스타벅스는 AFC 엔터프라이지즈사로부터의 시애틀 베스트 커피와 토레파키오네 이탈리아의 인수를 완료하였다. 이로써 전 세계적으로 스타벅스 매장의 개수는 6400여 개가 되었다. 2006년 9월 14일 경쟁 체인점이었던 다이드리히 커피가 그 소유의 거의 모든 점포를 스타벅스로 매각한다고 발표하였다. 이 매각은 오리건 주 지역의 커피 피플 체인점을 넘기는 것을 포함했다. 스타벅스의 대변인은 다이드리히 커피와 커피 피플 매장을 스타벅스 매장으로 바꾸어 재개장할 것이라고 발표하였다.

      `,
    },
  },
  {
    _id: 53,
    brand_id: 3,
    brand_name: "ToSomePlace",
    brand_main_image: twosome,
    brand_sub_image: "",
    brand_link: "https://www.twosome.co.kr:7009/main.asp",
    category: "커피&음료",
    contents: {
      history: `투썸플레이스(A Twosome Place)는 CJ그룹의 디저트 카페 프랜차이즈 기업이다. 2002년 신촌점을 시작으로 2018년 현재 전국에 1,000여개의 점포를 운영하고 있다. 2009년 가맹사업을 시작하면서 2011년에는 중국 북경에 '途尚咖啡'라는 상호로 1호점을 오픈하였다. 2018년 2월 1일 CJ푸드빌 커피사업부문을 분사하여 법인화 되었다.
      투썸플레이스는 SMALL INDULGENCE '나만의 즐거움을 만날 수 있는 프리미엄 디저트 카페'라는 의미로 'A'CUP OF COFFEE(따스한 한 잔의 커피가 있는), 'TWO' OF US (우리가 함께 하는), 'SOME' DESSERT (눈과 입이 즐거운 색다를 디저트를 즐기는), 'PLACE'(작은 사치를 누릴 수 있는 행복한 공간) 라는 의미를 가진 카페이다.
      `,
    },
  },
  {
    _id: 54,
    brand_id: 4,
    brand_name: "Illy",
    brand_main_image: illy,
    brand_sub_image: "",
    brand_link: "http://www.illycaffe.co.kr/",
    category: "커피&음료",
    contents: {
      history: `제1차 세계 대전 당시 헝가리에서 이탈리아 트리에스테로 이주해 온 기술자인 프란체스코 일리(Francesco Illy)에 의해 1933년에 설립되었다.

      1935년, 프란체스코는 일레따(illleta)라고 하는 증기를 압축 공기로 대체하는 혁신적인 에스프레소 커피 기계를 발명하였다. 일레따는 곧 이탈리아 전역에 인기를 끌게 되었고, 일리의 브랜드를 널리 알리는 계기가 되었다. 이후 1946년 프란체스코는 이탈리아의 기술자인 가찌아[1]에게 의뢰하여 이것을 더욱 개량하여 보급하여, 이탈리아 전역에 새로운 방식의 에스프레소 커피를 보급하는 데 성공한다. 이후 일레따는 현대적인 에스프레소 머신에 큰 영향을 끼친 모델이라 불리고 있다.
      
      이후 사업을 확장하여 이탈리아 트리에스테 지방은 세계로 원두를 유통하는 유명한 지역으로 성장시키는 원동력이 되기도 하였다.
      `,
    },
  },
  {
    _id: 55,
    brand_id: 5,
    brand_name: "Gongcha",
    brand_main_image: gongcha,
    brand_sub_image: "",
    brand_link: "https://www.gong-cha.co.kr/brand/",
    category: "커피&음료",
    contents: {
      history: `공차(Gong cha)는 타이완 가오슝에서 2006년 설립된 밀크티 브랜드이다. 2010년대 초반 일어난 타피오카 펄이 들어간 밀크티 선풍을 타고 2012년 한국에 상륙하여 우후죽순처럼 한국에 개점한 대만 밀크티 브랜드 중 가장 많은 매장을 보유하고 있다. 2017년 1월에 공차코리아가 타이완 본사를 인수하였다.
      공차는 김여진에 의해 설립되었다. 당시 평범한 주부였으며 남편을 따라 싱가포르에 거주하다가 싱가포르 지점 '공차'에서 확신을 얻어 직접 대만 본사를 찾아갔다. 집을 담보 대출 받아, 한국 판권을 획득했다. 2012년 공차 코리아를 설립하여 대만 현지에서 공차 운영을 배워 2년 만에 전국 240개 매장을 보유한 프랜차이즈 회사로 키워냈다. 2014년 10월, 사모펀드(PEP) 유니스 캐피탈에 공차코리아 지분 65%를 340억에 매각한다. 이 당시 김여진 대표는 32세였다. 이후 체육 관련 스타트업에 종사하여 400평 규모의 '바운드 트램펄린 파크'를 만든다. 반포, 잠실, 구로에 지점을 열고 이어서 대구 신세계 백화점에도 입점하는 확장성을 보여줬던 이 사업은 주식회사 아이에스동서에 235억에 매각하는 성과를 보였다.공차 지분 23.1%는 공차를 수입한 김여진 전 공차코리아 대표의 남편 에드워드 배리가 보유하고 있는 것으로 알려졌다.
      2011년에 한국 법인을 설립하고 2012년에 1호점을 홍대에 오픈한다. 3개월 후인 7월에 신촌점에 입점하게 된다. 2013년 4월에 가맹점 1호를 성신여대에 오픈하고, 6개월 후에는 100호점이 입점한다. 2014년에는 연세대학교 세브란스 병원 소아환우에 기부금을 전달하고, 다음달 5월에는 "어린이에게 새생명을"기부금을 전달한다.
      6월에 200호점을 돌파하여 12월에는 현대백화점 전점에 입점한다. 2015년 3월에는 고용창출 100대 우수기업에 선정되고 4월에 300호점을 오픈한다. 2018년 9월부터 일본에 진출을 시작한다. (1호점 하라주쿠 오모테산도점) 2016년 3월에 매경 '100대 프랜차이즈'에 선정되고 4~5월에 일본 지점을 추가로 오픈한다. 7월엔 드라마 '함부로 애틋하게'에 공식 협찬사로 지정되고 10월부터 공차의 모델로 '이종석'을 기용한다. 2017년 3월에는 매경 '100대 프랜차이즈'에 2년 연속 선정되는 성과를 올린다.
      `,
    },
  },
  {
    _id: 56,
    brand_id: 6,
    brand_name: "Cocacola",
    brand_main_image: cocacola,
    brand_sub_image: "",
    brand_link: "http://www.ccbk.co.kr/index.jsp",
    category: "커피&음료",
    contents: {
      history: `코카-콜라(영어: Coca-Cola)는 미국의 코카-콜라 컴퍼니에서 출시한 콜라 브랜드이다. 전 세계적으로 200여 개국 이상에서 팔리고 있는 코카-콜라는 가장 인지도 높은 상표이기도 하다. 또한 코카-콜라는 미국과 자본주의를 상징하기도 한다. 코카-콜라의 경쟁사로는 펩시콜라가 있으며, 이 두 음료간의 각 시장에서의 마케팅 전쟁은 유명하다. 한편, 코카-콜라 컴퍼니가 자존심을 이로 지분을 인수인계한 페루의 고유 브랜드인 잉카 콜라는 아직도 페루 내 콜라 판매율 1위를 달리고 있다.
      1886년에 조지아주 애틀랜타의 약사인 존 펨버턴은 코카의 잎, 콜라의 열매, 카페인 등을 주원료로 하는 새로운 청량 음료를 만들어 상품화하였다. 당시에는 첨가물 없이 순수히 코카잎 추출 성분과 콜라나무 껍질 원액과 탄산수로 만들어졌었으며, 원래는 자양강장제였다고 한다. 하지만 이것만으로는 부족해서 첨가물을 더 넣고 만든 것이 오늘날의 콜라이다. 그의 약국의 소다수 판매 진열대에서 잔 당 5센트로 판매되었지만 별로 판매량이 좋지 않았고 2년 후 그는 이 청량음료에 대한 제조, 판매 등 모든 권리를 단돈 122만 2천 원에 팔아 버렸다. 이 음료의 새로운 소유주는 약제 도매상인 에이서 캔들러였다. 에이서 캔들러는 1919년에 현재의 회사 조직을 설립하고 청량 음료로서 판매를 개시하기 시작했는데 현재 코카-콜라 병의 디자인은 캔들러가 100만 달러의 현상금을 걸고 응모한 유리병 공장의 직원 루드가 디자인한 것이다. 특히 제2차 세계대전 중에는 국방성의 후원으로 매출이 대폭적으로 늘어났다. 특히, 코카-콜라는 미국에서 최대의 '셰어'를 자랑하며 국외에서도 아메리카니즘의 대명사로 쓰일 만큼 보급되어 있다. 코카-콜라는 본사에서 원액(제법 미공개)만을 제조하여 국내 및 해외의 특정 회사에게만 공급하는 프랜차이즈 방식을 채용하고 있다. 특정 회사에서는 본사에서 공급받은 원액에 물, 탄산, 설탕 등의 첨가물을 배합하여 병 또는 캔에 넣고 직매 방식에 의하여 판매한다. 국외의 회사에 대해서는 자본·종업원 등에 관하여 철저한 현지주의를 채용하고 있는 것이 특징이다. 조선민주주의인민공화국을 제외한 전 세계 200여 개국에서 1위를 오래 차지하고 있을 정도의 타이틀을 가지고 있다. 세부적으로 기업의 제조공장은 850대, 기업의 인원들은 평균 146만 명에 육박하고 운송업체 차량, 비행기 등 60만 대가 넘는다. 현재 2016년 전 세계에서 코카-콜라를 판매하는 매장만 2천만 매장이 넘는 것으로 알려진다. 하루에 소비되는 코카-콜라 제품만 해도 7억3천만 잔 정도다. 브랜드의 가치는 705억 5,200만 달러(약 80조 원) 정도 된다.
`,
    },
  },
  {
    _id: 57,
    brand_id: 7,
    brand_name: "Pepsi",
    brand_main_image: pepsi,
    brand_sub_image: "",
    brand_link: "https://www.pepsi.com/",
    category: "커피&음료",
    contents: {
      history: `펩시(영어: Pepsi)는 펩시코에서 생산하는 콜라다. 1898년 8월 28일 약사인 칼렙 브래드햄에 의해 만들어졌으며, 1903년 6월 16일에 정식으로 판매하였다.
      한편 대한민국에서는 당초 롯데칠성음료에서 계약 생산했지만 하이트진로가 1974년 12월 상표권을 인수한 동시에 1975년 6월부터 본격적으로 생산할 예정이었으나  원액공급 계약조건이 일방적이라 그 계약조건대로는 기업경영이 곤란하다는 이유 때문에 포기했다.
      펩시는 1890년대 초, 약사인 칼렙 브래드햄은 미국 노스캐롤라이나주 뉴 번이라는 곳에서 "브래드의 음료수(Brad's drink)"라는 이름으로 처음 판매를 시작하였다. 1898년 8월 28일에 "브래드의 음료수"는 "펩시 콜라(Pepsi-Cola)"로 이름을 바꾸고, 1903년 6월 16일에는 정식으로 브랜드화되었다. 펩시라는 이름의 어원에 대해서는 여러 가지 설이 있지만, 펩시코의 공식 홈페이지에 게재된 펩시라는 이름의 2가지 유래는 아래와 같다.

      `,
    },
  },
  {
    _id: 58,
    brand_id: 8,
    brand_name: "Fanta",
    brand_main_image: fanta,
    brand_sub_image: "",
    brand_link: "https://www.fanta.com/",
    category: "커피&음료",
    contents: {
      history: `환타(영어: Fanta)는 코카콜라 컴퍼니에서 출시한 과일맛 청량 음료 브랜드이다. 대한민국을 비롯한 세계 180개국에서 판매를 하고 있으나 맛은 나라마다 다르다.
      1940년 제2차 세계 대전 당시에 나치 독일이 미국과의 무역 금지 조치를 내리면서 미국의 코카콜라를 독일에서 생산하고 판매하지 못하는 일이 생겼다. 그러나 사장인 막스 카이트는 독일에서의 사업을 포기하지 않기 위해 1940년에 에센 환타를 대체 제품으로 한 화학자가 'Schetelig 1940'를 개발하여 1949년까지는 독일에서 이 음료수로 사업을 대체하였다. 1964년에는 공식적으로 출시하여 이후 환타는 코카콜라 컴퍼니에 인수되었다.
`,
    },
  },
  {
    _id: 59,
    brand_id: 9,
    brand_name: "Monster Energy",
    brand_main_image: monster,
    brand_sub_image: "",
    brand_link: "https://www.monsterbevcorp.com/",
    category: "커피&음료",
    contents: {
      history: `몬스터 에너지(영어: Monster Energy)는 2002년 몬스터 음료가 제조하기 시작한 에너지 음료이다. 검은색 캔과 초록색 발톱 모양의 M 로고가 그려진 보통 맛 음료는 로고가 "몬스터"의 발톱으로 찢어진 것처럼 보이게 했다. 또한, 이 에너지 음료 회사는 BMX, 모토크로스, 스케이트보드, 스노우보드, E스포츠 등의 익스트림 스포츠도 지원하고 있다. 또한, 몬스터 에너지는 애스킹 알렉산드리아, 월드 어라이브, 샤인다운, 이스케이프 더 페이트 등 세계적 음악 밴드를 지원하고 있다.
      현재 북미에서는 몬스터 에너지 라인, 자바 몬스터, 엑스트라, 니트로 등 34개 음료를 판매하고 있으며, 한국에서는 5개 종류의 제품을 판매하고 있다. 국내 유통되는 몬스터 에너지는 이전 전량 미국산을 수입했지만, 현재는 한국 내 제조시설에서 생산한다.
      `,
    },
  },
  {
    _id: 60,
    brand_id: 10,
    brand_name: "RedBull",
    brand_main_image: redbull,
    brand_sub_image: "",
    brand_link: "https://www.redbull.com/kr-ko/",
    category: "커피&음료",
    contents: {
      history: `레드불(Red Bull)은 오스트리아의 음료 회사인 레드불 유한회사(Red Bull GmbH)가 제조하여 판매하는 카페인 에너지 음료이다.
      레드불 에너지 드링크(250ML, 카페인 함량 62.5mg)는 알프스 산맥의 청정 수원지에서 생산된 알프스 워터에 좋은 재료를 엄선해 독특한 조합으로 제조한 무알콜 탄산 에너지음료이다. 유럽연합 국가를 포함해 전세계 167개 국에서 안전성에 대한 검증을 거쳐 판매되고 있으며 2014년에 총 56억 개 제품이 판매되었다.
      스포츠나 레저 활동 중, 공연 진행 및 관람 시, 장거리 운전 중 혹은 사무실에서의 과중한 업무에 시달릴 때 레드불 에너지 드링크는 신체와 정신을 각성시켜 그에 필요한 활력과 에너지를 제공해 준다. 레드불 에너지 드링크는 알프스 인근 오스트리아 공장에서 엄선된 고품질 재료를 원료로 제조되며, 동물 추출물 및 방부제는 전혀 포함되어 있지 않다.
      `,
    },
  },
  {
    _id: 61,
    brand_id: 11,
    brand_name: "Sprite",
    brand_main_image: sprite,
    brand_sub_image: "",
    brand_link: "https://www.perrier.co.kr/",
    category: "커피&음료",
    contents: {
      history: `스프라이트(Sprite)는 미국의 코카콜라 컴퍼니에서 생산하고 있는 카페인이 없는 무색 투명의 착향 음료이다. 1961년에 미국에 도입되었다. 1929년에 "Lithiated Lemon"로 시작한 세븐업이 인기를 끌자 이에 응한 결정이었다. 초록색이나 파란색의 용기, 또는 초록색의 투명한 병에 용액이 담겨 나오며, "초록색과 파란색의 레이블"이 붙어 있다. 중국어권에서는 셰비(중국어: 雪碧)라고 불린다.
      독일에서 출시된 음료로서 환타 Klare Zitrone("깨끗한 레몬 환타")가 기원인 스프라이트는 1961년에 미국에 도입하여 세븐업과 경쟁하기에 이르렀다. 스프라이트가 선을 보인지 여러 해가 지난 1980년대에, 코카콜라사는 세븐업을 유통하였던 대형 병 제조회사에게 경쟁사 제품을 코카콜라 제품으로 바꾸도록 압박을 주었다. 코카콜라의 영향력이 커짐에 따라, 스프라이트는 마침내 1989년에 무색 투명 음료 시장에서 선두 자리에 오르게 되었다.
      `,
    },
  },
  {
    _id: 62,
    brand_id: 12,
    brand_name: "Perrier",
    brand_main_image: perrier,
    brand_sub_image: "",
    brand_link: "",
    category: "커피&음료",
    contents: {
      history: `페리에 (Perrier)는 프랑스의 자연 광천수로 된 생수 브랜드이다. 프랑스 가르주 베르제즈 (Vergèze) 마을을 수원지로 삼고 있다. 페리에는 자연 탄산수라는 점과 탄산 함유량이 높다는 점, 그리고 특유의 초록색 병 디자인으로 널리 알려져 있다.
      예전에는 프랑스의 '페리에 비텔 그룹' (Perrier Vittel Group SA)이라는 곳에서 생산하였으나 1992년 네슬레 사가 인수한 뒤로는 네슬레 워터 프랑스 사가 생산하고 있다. 네슬레 워터 프랑스는 비텔, 산 펠레그리노, 콩트렉스 등의 브랜드를 생산하는 것으로도 유명하다.
      페리에가 생산되는 수원지의 물은 자연 탄산수이다. 처음에는 물과 자연 탄산가스 모두 각각 따로 추출한다. 물을 정수한 뒤 병에 채우는 과정에서 탄산가스를 다시 그대로 첨가한다. 이 때문에 페리에 병에 담긴 탄산의 농도는 베르제즈 마을 수원지의 탄산 농도와 같은 수준으로 되어 있다.페리에 병은 그 특유의 '눈물방울' 모양을 하고 있으며 뚜렷한 녹색을 띈다. 한국에서는 330ml 병만 주로 수입되지만, 유럽에서는 750ml, 330ml, 200ml 병은 물론 330ml 캔으로도 판매하고 있다. 유럽 이외의 시장에서는 250ml짜리 캔 제품도 찾아볼 수 있다. 페리에는 보통맛, 레몬맛, 라임맛 등으로 나뉘어 판매된다. 2007년 미국에서는 시트론 레몬라임과 팡플무스 로스 (핑크 그레이프프루트)맛을 출시하기도 했다. 2015년에는 그린애플맛이 프랑스와 미국에 출시됐으며 2016년에는 프랑스에서 민트맛을 처음 선보였다.
      `,
    },
  },
  {
    _id: 63,
    brand_id: 13,
    brand_name: "Peik",
    brand_main_image: peik,
    brand_sub_image: "",
    brand_link: "http://paikdabang.com",
    category: "커피&음료",
    contents: {
      history: `2006년, 백종원이 운영하는 논현동 원조쌈밥집 점포 앞에 있던 스타벅스를 패러디한 '원조벅스'라는 이름의 커피 전문점이 들어서며 시작되었다. 홈페이지에 따르면 원조쌈밥집의 고객에게 서비스 차원의 커피를 제공하기 위해 탄생했다고 되어 있다. 보통 서비스 차원에서 커피 자판기를 놓거나 자판기형 원두분쇄 커피메이커를 들여 놓는 경우는 있지만, 백주부는 아예 서비스 차원의 커피를 위해 매장을 만들었다.

      그러다가 스타벅스로부터 상표권 침해 행위로 고소를 당하고 2007년 '원조커피'라는 이름으로 상호를 변경했으며, 2008년 지금의 명칭인 '빽다방'이라는 이름으로 상호가 변경되었다. 2008년 '빽다방'의 로고는 베트남 모자를 쓴 '백종원'의 모습이었으며, 기존에는 베트남 음식점에서나 볼 수 있었던 베트남 핀 커피를 선보였지만, 지금의 로고로 바꾸었다.
      
      2016년 들어 페이코를 도입하고 온갖 프로모션을 하고 있다. NFC 결제 가능하다. 단 카드승인 문자에는 여전히 페이코로 뜬다.
      `,
    },
  },
  {
    _id: 64,
    brand_id: 14,
    brand_name: "Mountain Dew",
    brand_main_image: mountainDew,
    brand_sub_image: "",
    brand_link: "https://www.mountaindew.com/",
    category: "커피&음료",
    contents: {
      history: `Mountain Dew(산이슬, 북미에서는 Mtn Dew). 펩시코에서 생산하는 탄산음료의 일종. 1940년에 출시되었다. 대한민국에서는 롯데칠성음료가 판매한다.

      국내산의 경우 기본적인 음료의 색상은 비타민을 연상케하는 멜론색에 가까운 노란색이었으나 병의 색상인 네온 그린을 실제 음료의 색으로 오해하는 사람이 많았다. 하지만 2020년부터 음료 페트병의 규제에 따라 색상이 들어간 병을 사용 할 수 없게 되어 북미권 제품과 유사하게 실제 음료의 색이 네온그린에 가깝게 바뀌는 계기로, 식당이나 롯데시네마 등의 펩시 드링크 바에서 따라마실 수 있는 마운틴 듀 색깔도 순차적으로 바뀌게 되었다.
      
      일단 외형은 상술했듯이 이산화탄소 거품이 나는 연두색 액체이다. 상큼하고 오묘한 향이 나는데, 표시성분에는 그냥 마운틴듀 향이라고 되어 있지만 진짜 산이슬 향[2]은 아니다. 기본적으로 시트러스(레몬-라임-오렌지 류)를 조합한 것이며 과일과 관련이 되어있다. 고로, 미국산 마운틴 듀 맛에 익숙해진 이들에겐 전혀 색다른 맛이다.
      
      산이슬이라는 이름이 붙은 이유는 마운틴 듀가 초기에는 다른 미국의 탄산 음료들처럼 금주기의 밀주 양조 겸 주류 대체 음료로서 생산되었기 때문이다.
      
      2016년 3월부터 오렌지맛의 마운틴듀 라이브와이어도 판매하고 있다. 개성있는 오리지널과 달리 라이브와이어는 전형적인 오렌지향 탄산음료로 역시 롯데칠성음료에서 제조하는 미린다 오렌지맛과도 큰 차이가 없다.`,
    },
  },
  {
    _id: 65,
    brand_id: 15,
    brand_name: "Hollys",
    brand_main_image: hollys,
    brand_sub_image: "",
    brand_link: "https://www.hollys.co.kr/",
    category: "커피&음료",
    contents: {
      history: `할리스커피(영어: Holly's Coffee)는 1998년 6월 서울특별시 강남구에 한국 최초로 에스프레소 전문점을 개점한 커피전문점이다. 할리스커피는 2017년 10월 말 500여개의 매장을 운영하고 있으며 15개국과 마스터프랜차이즈를 통해 전 세계 각국에 매장을 확장해 나가고 있는 한국 최초의 브랜드다.
      1998년 6월 서울특별시 강남구 강남역 근처에 처음 오픈하였다. 2003년에 극장 업체인 프리머스가 인수하면서 빠르게 성장하기 시작하였고, 2005년 2월 1일 주식회사 할리스에프앤비가 설립되었고,
      2005년과 2006년에는 한국일보가 주관하는 '고객서비스 만족대상'을 받았다. 2007년에는 말레이시아 쿠알라룸푸르에 1호점을 오픈하면서 해외 시장 진출에 나섰으며, 2008년에는 로스앤젤레스에도 지점을 오픈했다.
      이 후로 현재까지 많은 글로벌 지점들을 오픈하고 있다. 2010년에는 페루 리마 1호점을 오픈, 2011년에는 필리핀 ‘마닐라점’을 오픈, 2012년에는 중국 ‘심천 1호점’, ‘북경 1호점’을 오픈하였다. 계속해서, 2013년에는 '태국 방콕 1호점'을 오픈하였으며, 2014년에는 베트남 마스터 프랜차이즈와 체결하였다.
      `,
    },
  },
  {
    _id: 66,
    brand_id: 16,
    brand_name: "Dr.Pepper",
    brand_main_image: drpepper,
    brand_sub_image: "",
    brand_link: "https://www.drpepper.com/en",
    category: "커피&음료",
    contents: {
      history: `닥터페퍼(영어: Dr. Pepper)는 미국 큐릭닥터페퍼에서 나오는 탄산 음료다. 찰스 앨더튼이 1880년에 개발한 후 1904년 미국에서 판매를 시작했다. 2019년 현재 유럽, 아시아, 캐나다, 멕시코, 오스트레일리아, 뉴질랜드, 남아메리카, 남아프리카 공화국에도 판매된다. 향과 맛이 독특한 이유는 23가지 맛이 섞였기 때문이다. 
      닥터페퍼는 2008년부터 미국 내에서는 큐릭닥터페퍼가 생산 판매하며 유럽 지역과 대한민국에서는 코카콜라에서 판매권을 소지하게 되며  캐나다,오세아니아 지역은 펩시콜라가 판매권을 가지고 있다.
      `,
    },
  },
  {
    _id: 67,
    brand_id: 17,
    brand_name: "Coffe Beans",
    brand_main_image: coffeebean,
    brand_sub_image: "",
    brand_link: "https://www.coffeebeankorea.com/main/main.asp",
    category: "커피&음료",
    contents: {
      history: `커피빈 & 티리프(영어: The Coffee Bean & Tea Leaf, ‘커피 콩과 찻잎’이라는 뜻) 또는 커피빈은 미국 로스앤젤레스에 본사가 있는 인터내셔널 커피 & 티 유한책임회사(International Coffee & Tea, LLC)에서 운영하고 있는 세계에서 가장 오래된 커피 및 홍차 전문점 프랜차이즈 중의 하나이다. 최초의 매장은 1963년에 로스앤젤레스의 브렌트우드에서 허버트 B. 하이만과 모나 하이만이 개점하였다. 현재 미국 남서부와 하와이주까지 아우르는 점포망을 갖고 있다. 동남아시아에는 1996년에 총판권을 구입한 싱가포르 출신의 사업가 빅터 새순이 “커피빈스”(Coffee Beans)라는 이름의 매장을 여러 곳에 개점하였다. 전 세계적으로는 현재 14여 개국, 400여 곳이 넘는 직영 및 프랜차이즈 매장을 갖고 있다.
      커피빈은 커피뿐 아니라 여러 종류의 홍차 음료를 취급한다는 점에서 스타벅스 같은 다른 커피 전문 체인점과는 다르다. 또, 유명한 오리지널 아이스 블렌디드(Original Ice Blended)® 블렌드와 차이 라테도 취급한다.
      2003년에는 매출 1억 2천만 달러(USD)를 기록하였다. 점포 중 144여 곳에서는 와이파이 접속을 지원한다. 미국 외에서는 주로 프랜차이즈 매장이, 미국 내에는 주로 회사 소유의 매장이 위치한다. 현재 진출 국가는 싱가포르, 이스라엘, 대한민국, 아랍 에미리트, 브루나이, 오스트레일리아, 인도네시아. 말레이시아, 필리핀, 쿠웨이트, 이집트이다.2019년 9월 필리핀의 식품기업 졸리비(Jollibee Foods)가 커피빈의 브랜드를 보유한 International Coffee & Tea, LLC를 인수했다.
      `,
    },
  },
  {
    _id: 68,
    brand_id: 18,
    brand_name: "Chilsung Cyder",
    brand_main_image: chilsung,
    brand_sub_image: "",
    brand_link:
      "https://company.lottechilsung.co.kr/kor/brand/chilsungcider/contentsid/613/index.do",
    category: `칠성사이다(七星 cider)는 1950년 5월 9일에 출시된 청량음료다.최근 "칠성사이다 제로"가 새로 탄생했다
    칠성사이다 출시 이전 1945년 해방 직후에는 서울사이다, 삼성사이다, 스타사이다 등의 대한민국 기업이 생산한 제품들이 경쟁적으로 만들어지기 시작하기도 했다.
    `,
  },
  {
    _id: 69,
    brand_id: 19,
    brand_name: "TOMS",
    brand_main_image: toms,
    brand_sub_image: "",
    brand_link: "",
    category: "커피&음료",
  },
  {
    _id: 70,
    brand_id: 20,
    brand_name: "AngelInUs",
    brand_main_image: angelinus,
    brand_sub_image: "",
    brand_link: "",
    category: "커피&음료",
  },
  {
    _id: 101,
    brand_id: 1,
    brand_name: "Tesla",
    brand_main_image: tesla,
    brand_sub_image: "",
    brand_link: "",
    category: "자동차",
  },
  {
    _id: 102,
    brand_id: 2,
    brand_name: "Hyundai",
    brand_main_image: hyundai,
    brand_sub_image: "",
    brand_link: "",
    category: "자동차",
  },
  {
    _id: 103,
    brand_id: 3,
    brand_name: "Renault",
    brand_main_image: renault,
    brand_sub_image: "",
    brand_link: "",
    category: "자동차",
  },
  {
    _id: 104,
    brand_id: 4,
    brand_name: "Volvo",
    brand_main_image: volvo,
    brand_sub_image: "",
    brand_link: "",
    category: "자동차",
  },
  {
    _id: 105,
    brand_id: 5,
    brand_name: "Chevrolet",
    brand_main_image: chevrolet,
    brand_sub_image: "",
    brand_link: "",
    category: "자동차",
  },
  {
    _id: 106,
    brand_id: 6,
    brand_name: "Porche",
    brand_main_image: porche,
    brand_sub_image: "",
    brand_link: "",
    category: "자동차",
  },
  {
    _id: 107,
    brand_id: 7,
    brand_name: "Ferrari",
    brand_main_image: ferrari,
    brand_sub_image: "",
    brand_link: "",
    category: "자동차",
  },
  {
    _id: 108,
    brand_id: 8,
    brand_name: "Scania",
    brand_main_image: scania,
    brand_sub_image: "",
    brand_link: "",
    category: "자동차",
  },
  {
    _id: 109,
    brand_id: 9,
    brand_name: "Ford",
    brand_main_image: ford,
    brand_sub_image: "",
    brand_link: "",
    category: "자동차",
  },
  {
    _id: 110,
    brand_id: 10,
    brand_name: "Lamborghini",
    brand_main_image: lamborghini,
    brand_sub_image: "",
    brand_link: "",
    category: "자동차",
  },
  {
    _id: 111,
    brand_id: 11,
    brand_name: "MAN",
    brand_main_image: man,
    brand_sub_image: "",
    brand_link: "",
    category: "자동차",
  },
  {
    _id: 112,
    brand_id: 12,
    brand_name: "Lincoln",
    brand_main_image: lincoln,
    brand_sub_image: "",
    brand_link: "",
    category: "자동차",
  },
  {
    _id: 113,
    brand_id: 13,
    brand_name: "Benz",
    brand_main_image: benz,
    brand_sub_image: "",
    brand_link: "",
    category: "자동차",
  },
  {
    _id: 114,
    brand_id: 14,
    brand_name: "BMW",
    brand_main_image: bmw,
    brand_sub_image: "",
    brand_link: "",
    category: "자동차",
  },
  {
    _id: 115,
    brand_id: 15,
    brand_name: "Jaguar",
    brand_main_image: jaguar,
    brand_sub_image: "",
    brand_link: "",
    category: "자동차",
  },
  {
    _id: 116,
    brand_id: 16,
    brand_name: "Bentley",
    brand_main_image: bentley,
    brand_sub_image: "",
    brand_link: "",
    category: "자동차",
  },
  {
    _id: 117,
    brand_id: 17,
    brand_name: "Pagani",
    brand_main_image: pagani,
    brand_sub_image: "",
    brand_link: "",
    category: "자동차",
  },
  {
    _id: 118,
    brand_id: 18,
    brand_name: "Mclaren",
    brand_main_image: mclaren,
    brand_sub_image: "",
    brand_link: "",
    category: "자동차",
  },
  {
    _id: 119,
    brand_id: 19,
    brand_name: "GMC",
    brand_main_image: gmc,
    brand_sub_image: "",
    brand_link: "",
    category: "자동차",
  },
  {
    _id: 120,
    brand_id: 20,
    brand_name: "Volkswagen",
    brand_main_image: volkswagen,
    brand_sub_image: "",
    brand_link: "",
    category: "자동차",
  },
  {
    _id: 121,
    brand_id: 21,
    brand_name: "Audi",
    brand_main_image: audi,
    brand_sub_image: "",
    brand_link: "",
    category: "자동차",
  },
  {
    _id: 122,
    brand_id: 22,
    brand_name: "Lada",
    brand_main_image: lada,
    brand_sub_image: "",
    brand_link: "",
    category: "자동차",
  },
  {
    _id: 123,
    brand_id: 23,
    brand_name: "Volkswagen",
    brand_main_image: volkswagen,
    brand_sub_image: "",
    brand_link: "",
    category: "자동차",
  },
];

export default DummyBrandInfo;
