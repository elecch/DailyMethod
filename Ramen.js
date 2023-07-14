// 물 = {
//   온도 : 20
//   const boil = function(불, 냄비) {return 물 {온도 :100}}
//   }
  
//   const 라면 끓이기  = function() {
  
//   const 물 = 생수붇기(물)
//   const 라면 = 장보기(return 라면)
//   const 냄비 = 냄비생성(return 냄비)
//   const 불 = 가스틀기(return 불)
  
//   물.boil(불,냄비)
  
//   라면.cook(물){
//   this.물 = 물.boil(불,냄비)
  
//   return cooked 라면
//   }
  
//   }
  
//   const result = 라면끓이기()

// 물, 라면, 냄비를 생성하는 함수들
function 생수붇기() {
  return {온도 : 20};
}

function 장보기() {
  return {name: "라면", cook: function(물) {
    if(물.온도 === 100) {
      return "cooked 라면";
    } else {
      return "not cooked 라면";
    }
  }};
}

function 냄비생성() {
  return {name: "냄비"};
}

function 가스틀기() {
  return {name: "불"};
}

// 물을 끓이는 함수
function boil(물, 불, 냄비) {
  if(불.name === "불" && 냄비.name === "냄비") {
    물.온도 = 100;
  }
  return 물;
}

const 라면끓이기 = function() {
  const 물 = 생수붇기();
  const 라면 = 장보기();
  const 냄비 = 냄비생성();
  const 불 = 가스틀기();

  const 끓인물 = boil(물, 불, 냄비);
  
  return 라면.cook(끓인물);  // 라면을 끓인 물에 요리
};

const result = 라면끓이기();
console.log(result);  // "cooked 라면"이 출력됩니다.