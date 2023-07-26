
const CHARGER_TYPE = {
    DC_FAST: 'DC 차데모',
    AC_SLOW: 'AC 완속',
    DC_AC_3PHASE: 'DC 차데모+AC 3상',
    DC_COMBO: 'DC 콤보',
    DC_DC_COMBO: 'DC 차데모+DC 콤보',
    DC_AC_DC_COMBO: 'DC 차데모+AC 3상+DC 콤보',
    AC_3PHASE: 'AC 3상',
};

const COMPANY_NAME = {
    AM: '아마노코리아',
    BA: '부안군',
    BG: '비긴스',
    BK: '비케이에너지',
    BN: '블루네트웍스보타리에너지',
    BT: '참빛이브이씨',
    CB: '캐스트프로',
    CP: '한국 EV 충전서비스센터',
    CS: '씨티카',
    CT: '씨어스',
    CU: '대영채비',
    DE: '대구환경공단',
    DG: '대구시',
    DP: '대유플러스',
    E0: '에너지플러스',
    EA: '에바',
    EC: '이지차저',
    EG: '에너지파튼즈',
    EH: '이엔에이치에너지',
    EK: '이노케이텍',
    EM: 'evmost',
    EN: '이엔',
    EP: '이카플러그',
    EV: '에버온',
    EZ: '차지인',
    G1: '광주시',
    G2: '광주시',
    GN: '지커넥트',
    GP: '군포시',
    GS: 'GS 칼텍스',
    HB: '에이치엘비생명과학',
    HD: '현대자동차',
    HE: '한국전기차충전서비스',
    HL: '에이치엘비일렉',
    HM: '휴맥스이브이',
    HS: '홈앤서비스',
    HW: '한화솔루션',
    IK: '익산시',
    JA: '중앙제어',
    JC: '제주에너지공사',
    JD: '제주도청',
    JE: '제주전기자동차서비스',
    JH: '종하아이앤씨',
    JJ: '전주시',
    JN: '제이앤씨플랜',
    JT: '제주테크노파크',
    JU: '정읍시',
    KA: '기아자동차',
    KC: '한국컴퓨터',
    KE: '한국전기차인프라기술',
    KI: '기아자동차',
    KL: '클린일렉스',
    KM: '카카오모빌리티',
    KN: '한국환경공단',
    KO: '이브이파트너스',
    KP: '한국전력',
    KS: '한국전기차솔루션',
    KT: '케이티',
    KU: '한국충전연합',
    LD: '롯데정보통신',
    LH: 'LG 헬로비전',
    MA: '맥플러스',
    ME: '환경부',
    MO: '매니지온',
    MT: '모던텍',
    NB: '남부솔루션',
    NE: '에너넷',
    NJ: '나주시',
    NT: '한국전자금융',
    OB: '현대오일뱅크',
    PC: '파킹클라우드',
    PI: '차지비',
    PL: '플러그링크',
    PS: '이브이파킹서비스',
    PW: '파워큐브',
    RE: '렏이엔지',
    S1: '에스이피',
    SA: '설악에너텍',
    SB: '소프트베리',
    SC: '삼척시',
    SD: '스칼라데이터',
    SE: '서울시',
    SF: '스타코프',
    SG: 'SK 시그넷',
    SJ: '세종시',
    SK: 'SK 에너지',
    SM: '성민기업',
    SN: '서울에너지공사',
    SO: '선광시스템',
    SP: '스마트포트테크놀로지',
    SR: 'SK 렌터카',
    SS: '삼성 EVC',
    ST: '에스트래픽',
    TB: '태백시',
    TD: '타디스테크놀로지',
    TL: '티엘컴퍼니',
    TM: '티맵',
    UN: '유니이브이',
    US: '울산시',
    YY: '양양군',
};

const generateRandomData = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);

    return array[randomIndex];
};

const generateRandomChargers = () => {
    const length = Math.floor(Math.random() * 4) + 1;
    const chargers = Array.from({ length }, () => ({
        type: generateRandomData([...Object.keys(CHARGER_TYPE)]),
        price: generateRandomData([200, 250, 300, 350, 400]),
        capacity: generateRandomData([3, 7, 50, 100, 200]),
        latestUpdateTime: generateRandomData([
            new Date('2016-10-27T17:13:40+00:00'),
            new Date('2023-06-27T17:18:40+00:00'),
            new Date('2023-07-18T15:11:40+00:00'),
            null,
        ]),
        state: generateRandomData([
            'AVAILABLE',
            'COMMUNICATION_ERROR',
            'STANDBY',
            'CHARGING_IN_PROGRESS',
            'OPERATION_SUSPENDED',
            'UNDER_INSPECTION',
            'STATUS_UNKNOWN',
        ]),
        method: generateRandomData(['단독', '동시']),
    }));

    return chargers;
};

const stations= Array.from({ length: 3000 }).map((_, index) => {
    return {
        stationId: index,
        stationName: `충전소 ${index}`,
        companyName: generateRandomData([...Object.values(COMPANY_NAME)]),
        contact: generateRandomData(['', '010-1234-5678', '02-000-0000']),
        chargers: generateRandomChargers(),
        isParkingFree: generateRandomData([true, false]),
        operatingTime: generateRandomData([
            '24시간',
            '09:00 ~ 19:00',
            '평일 09:00~19:00 / 주말 미운영',
        ]),
        address: generateRandomData(['동대문', '수유역', '선릉점']),
        detailLocation: generateRandomData(['지상 1층', '지하 1층', '지하 2층', '']),
        latitude: 37 + 9999 * Math.random() * 0.0001,
        longitude: 127 + 9999 * Math.random() * 0.0001,
        isPrivate: generateRandomData([true, false]),
        totalCount: generateRandomData([3, 4, 5]),
        availableCount: generateRandomData([0, 1, 2, 3]),
        stationState: generateRandomData(['yyyy-mm-dd일부터 충전소 공사합니다.', null]),
        privateReason: generateRandomData(['아파트', null]),
    };
});

/**
 * 위에 코드 일단 복붙 해버린 것임
 */

const express = require('express');
const app = express();

app.listen(8080,function(){
    console.log('listening on 8080');
});

app.get('/api/stations', function(req, res){
    console.log('/stations requested')
    res.send([]);
});
