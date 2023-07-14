const cherryCopter = {
  subscribe : 10000,
  content : counterstrike_online
}
const goDaeBalJob = {
  subscribe : 13000,
  content : counterstrike_online
  
}

const dolBiRadio = {
  subscribe : 600000,
  content : horror
}

const youtubeSee = function(){
  const mySubscribeChannel = [cherryCopter, goDaeBalJob, dolBiRadio];
  mySubscribeChannel.map(x => {
    subscribe(x); 
  });
  
}

const subscribe = function(channel){
  const myList = [];
  myList.push(channel)
  return myList;
}

const result = youtubeSee()

// feedback
// const cherryCopter = {
//   subscribe : 10000,
//   content : 'counterstrike_online'
// }
// const goDaeBalJob = {
//   subscribe : 13000,
//   content : 'counterstrike_online'
// }

// const dolBiRadio = {
//   subscribe : 600000,
//   content : 'horror'
// }

// let myList = []; // 전역 변수로 선언

// const subscribe = function(channel){
//   myList.push(channel); // 채널을 myList에 추가
// }

// const youtubeSee = function(){
//   const mySubscribeChannel = [cherryCopter, goDaeBalJob, dolBiRadio];
//   mySubscribeChannel.forEach(x => {
//     subscribe(x); 
//   });
  
//   return myList; // 완성된 목록 반환
// }

// const result = youtubeSee(); // 구독한 채널의 목록을 반환
// console.log(result); // 결과 출력
