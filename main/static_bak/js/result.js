const copyBtn = document.querySelector('.copy_btn');
const facebookShare = document.querySelector('.facebook_share');
const kakaoShare = document.querySelector('.kakao_share');
Kakao.init('1382f237492900dc939aec643009e921');

function sendLink() {
    let result_url = window.location.href;
    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
            title: '나의 제주여행?!',
            description: '나에게 꼭 맞는 여행 유형을 알아보자!!',
            imageUrl: '',
            link: {
                mobileWebUrl: '',
                webUrl: '',
            },
        },
        social: {
            likeCount: 286,
            commentCount: 45,
            sharedCount: 845,
        },
        buttons: [
        {
            title: '결과 보러가기',
            link: {
                webUrl: result_url,
                mobileWebUrl: result_url,
            },
        },
        {
            title: '테스트 하러가기',
            link: {
                webUrl: '',
                mobileWebUrl: '',
            },
        },
        ],
    });
}
/*카카오공유코드 비교
Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: '오늘의 디저트',
      description: '아메리카노, 빵, 케익',
      imageUrl:
        'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
      link: {
        mobileWebUrl: 'https://developers.kakao.com',
        androidExecutionParams: 'test',
      },
    },
    itemContent: {
      profileText: 'Kakao',
      profileImageUrl: 'https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
      titleImageUrl: 'https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
      titleImageText: 'Cheese cake',
      titleImageCategory: 'Cake',
      items: [
        {
          item: 'Cake1',
          itemOp: '1000원',
        },
        {
          item: 'Cake2',
          itemOp: '2000원',
        },
        {
          item: 'Cake3',
          itemOp: '3000원',
        },
        {
          item: 'Cake4',
          itemOp: '4000원',
        },
        {
          item: 'Cake5',
          itemOp: '5000원',
        },
      ],
      sum: '총 결제금액',
      sumOp: '15000원',
    },
    social: {
      likeCount: 10,
      commentCount: 20,
      sharedCount: 30,
    },
    buttons: [
      {
        title: '웹으로 이동',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
        },
      },
      {
        title: '앱으로 이동',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
        },
      },
    ]
  });
끝*/

$(function(){
    let url = window.location.href;
    let img = $('.result_img img').attr('src');

    $("meta[property='og\\:url']").attr('content', url);
    $("meta[property='og\\:image']").attr('content', img);
});


function copyUrl(){
    let tmp = document.createElement('input');
    let url = location.href;

    document.body.appendChild(tmp);
    tmp.value = url;
    tmp.select();
    document.execCommand("copy");
    document.body.removeChild(tmp);

    alert("URL이 복사되었습니다.");
}

function sharefacebook(){
    let url = window.location.href;
    let facebook = 'http://www.facebook.com/sharer/sharer.php?u=';
    let link = facebook + url;
    window.open(link);
}

copyBtn.addEventListener('click', copyUrl);
facebookShare.addEventListener('click', sharefacebook);

kakaoShare.addEventListener('click', sendLink);