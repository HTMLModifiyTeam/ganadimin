/* =========================================================
   ✏️ 여기만 고치면 내용이 바뀝니다.
   - 사진을 쓰고 싶으면 img 폴더에 파일을 넣고 'img/파일명.jpg' 처럼 적으세요.
   - 사진을 비워두면 회색 자리표시(+설명 글자)로 나옵니다.
   - 본문에서 [[휴대폰 잠금 패턴]] 처럼 대괄호 두 개로 감싼 글자가 휴대폰을 여는 링크가 됩니다.
   ========================================================= */

window.STORY = {
  title: "",
  paragraphs: [
    "—차주한 변호사님 되십니까?",
    "휴대폰 훔쳤습니까? [[꺼져요!]]",
  ]
};

window.PHONE = {
  time: "00:00:00",            // 휴대폰을 처음 연 순간의 시각(시:분:초). 이후 실제 시간만큼 흘러가요
  passcode: "",                // 잠금화면 암호. 비워두면 아무 숫자 4자리나 눌러도 열려요 (예: "1201")
  /* 잠금 해제 후 휴대폰 속 시간이 afterMinutes분 흐르면 걸려오는 전화 (받아도 소리는 나지 않아요) */
  incomingCall: null,
  /* 음성 사서함 (위에서부터 최신순). sea: 재생할 때 파도 소리, transcript: 재생하면 차례로 나타나는 텍스트 변환, after: 끝까지 들으면 화면 아래 떠오르는 말 */
  voicemail: [ ],

  /* 키패드에서 아무 숫자나 누르면 한 자리씩 입력되는 번호 */
  keypadNumber: "",
  /* 키패드에서 처음 누른 숫자가 단축번호면 그 사람이 뜨고, 통화 버튼으로 바로 걸림 */
  speedDial: { },

  /* 통화 기록에서 눌러 거는 전화의 대화 (who: "me" = 차주한, 없으면 상대방)
     answer: 받을 확률 (1 = 무조건), 없으면 answerRate 사용 */
  callScripts: { },
  owner: "강민재",              // 휴대폰 주인 (통화 대사에서 내 이름으로 표시)
  today: "2019-04-25",
  /* 앱 아이콘을 직접 고른 이미지로 바꾸기
     img 폴더에 이미지(정사각형 png/jpg 권장)를 넣고 "img/파일명.png" 로 적으세요.
     비워두면("") 기본 아이콘. 캘린더·시계를 이미지로 바꾸면 날짜·시곗바늘은 움직이지 않아요. */
  /* 동그란 아이콘 (네모 배경 없이 그림 그대로) */
  iconRound: ["chrome"],
  icons: {
    /* img 폴더에 insta.png, photos.png 를 올리면 그 이미지로 바뀜 (.jpg도 됨). 없으면 기본 아이콘 */
    calendar: "", photos: "img/photos.jpg",  clock: "",
    notes: "", insta: "img/insta.svg", maps: "img/maps.jpg",
    phone: "", chrome: "img/chrome.png", messages: "", kakao: ""
  },          // 휴대폰 속 오늘 날짜 (캘린더 아이콘·캘린더 앱 기준)
  /* 잠금화면 위젯: dday(월-일 기준 남은 날), alarm(다음 알람) */
  /* 홈 화면 음악 위젯 (누르면 link로 이동) */
  lockWidgets: { },
  badges: { phone: 0, mail: 0, messages: 0, kakao: 0 },

  /* 프로필 사진 (비우면 기본 아이콘) */
  avatars: { },

  /* ---------- 전화: 최근 통화 ---------- */
  /* dir: in(받은) / out(건) · missed: true → 빨간색(부재중) · count: 연속 통화 횟수 */
  calls: [ ],

  /* ---------- 크롬 ---------- */
  chrome: {
    tabs: 1,
    /* 자주 방문한 사이트 바로가기 (글자 1개 아이콘) */
    shortcuts: [ ],
    /* 최근 검색어 (위가 최신) */
    searches: [ "멸망" ],
    /* 첫 화면 기사·광고 피드. type: "news" 또는 "ad" (모두 가상 기사/가상 광고) */
    feed: [ ]
  },

  /* ---------- 메시지(iMessage) ---------- */
  messages: {
    pinned: "",
    anyReplies: { },
    replyCall: { },
    threads: [ ],
    chats: { }
  },


  /* ---------- 카카오톡 ----------
     unread: 안 읽은 메시지 수 (전부 더하면 홈 화면 배지 숫자와 같게)
     channel: true → 카카오 공식 채널(노란 아이콘) */
  kakao: {
    ad: { },
    chats: [
      {"name": " ", "preview": "", "when": ""},
    ],
    autoReplies: { },
    nudge: { },
    anyReplies: { },
    anyRepliesLoop: [],
    callTriggers: { },
    scripted: { },
    notification: null,
    rooms: {
      " ": [
        { "date": " " },
        { "text": "", "time": "00:00" }
      ]
    }
  },

  /* ---------- 메모 ---------- */
  notes: [],

  /* ---------- 번역: 저장된 번역 ---------- */
  translations: [
    // { src: "愛，這個字遠遠不足以表達愛意。", ko: "'사랑'이라는 단어는 사랑을 표현하기에 턱없이 부족합니다." },
  ],

  /* ---------- 사진 ---------- */
  photos: {
    count: "0",
    /* 실제 사진을 넣으려면 "img/1.jpg" 처럼 나열하세요. 비우면 자리표시 타일 */
    images: []
  },

  /* ---------- 지뢰찾기 ----------
     best: 원래 저장된 최고 기록(초). 보는 사람이 더 빨리 깨면 그 사람 기기에 새 기록이 저장돼요 */
  /* ---------- 인스타그램 ----------
     img에 "img/파일.jpg"를 넣으면 실제 사진, 비우면 bg 색 + emoji 로 표시 */
  insta: {
    me: "alswo_k",
    /* DM (위에서부터 최신순). status: 마지막 내 메시지 아래 표시 */
    dms: [
      {
        id: "chajuha_n", name: "차주한", preview: "회원님: 안녕하세요", when: "3년", status: "전송됨",
        msgs: [{ date: "2019년 4월 25일 오후 10:12" }, { me: true, text: "안녕하세요" }]
      }
    ],
    /* 오른쪽 아래 프로필을 누르면 보이는 민재 피드 (위에서부터 최신순) */
    profile: {
      name: "강민재", followers: "0", following: "0",
      bio: "변호사 👨‍⚖️"
    }
  },

  /* ---------- 캘린더 ----------
     cal(캘린더 종류): 업무 / 재판 / 회식 / 개인
     start·end 없으면 하루 종일 일정 */
  calendar: {
    calendars: {},
    birthdays: [],
    holidays: [],
    events: [
      { "date": "2019-12-30", "start": "00:00", "end": "12:00", "title": "멸망", "place": "전 세계" },
    ]
  }
};