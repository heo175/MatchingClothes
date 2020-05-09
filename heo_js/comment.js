function myFunction(x) {
  x.classList.toggle("fa-thumbs-down");
} 

var comment_area = document.querySelector('.comment-area'); // 댓글창 내용
var comment_btn = document.querySelector('.comment-btn'); // 댓글 작성 버튼
var comment_form = document.querySelector('.comment-form');

var new_comment_visible = document.querySelector('.newcomment');

var new_comment = document.querySelector('.hihi'); // 새 댓글

var choosingbtn = document.getElementById('choosingbtn'); // 옷장 속 '선택완료' 버튼

var closet_clothes = document.querySelectorAll('.cb'); // 옷장에 있는 옷
var checkedclothes = document.querySelectorAll('.checkedclothes'); // 내가 쓴 댓글 코디보기에 있을 옷
var noimg = document.getElementById('noimg'); // 옷 선택 안하면 '코디보기' 글자 안 보임
var checked = new Array(18); // 배열로 만든다.

var num = 0; // 옷 선택했는지

if(num === 0){
noimg.style.display = 'none'; // 옷 선택 하나도 안 하면 '코디 보기' 안 보임
}

function settingImg(){
checked[0] = "heo_img/clothes-img/outer1.jpg";
checked[1] = "heo_img/clothes-img/outer2.jpg";
checked[2] = "heo_img/clothes-img/outer3.jpg";
checked[3] = "heo_img/clothes-img/top1.jpg";
checked[4] = "heo_img/clothes-img/top2.jpg";
checked[5] = "heo_img/clothes-img/top3.jpg";
checked[6] = "heo_img/clothes-img/pants1.jpg";
checked[7] = "heo_img/clothes-img/pants2.jpg";
checked[8] = "heo_img/clothes-img/pants4.jpg";
checked[9] = "heo_img/clothes-img/skirt1.jpg";
checked[10] = "heo_img/clothes-img/skirt4.jpg";
checked[11] = "heo_img/clothes-img/skirt5.jpg";
checked[12] = "heo_img/clothes-img/ops1.jpg";
checked[13] = "heo_img/clothes-img/ops2.jpg";
checked[14] = "heo_img/clothes-img/ops3.jpg";
checked[15] = "heo_img/clothes-img/shoes1.jpg";
checked[16] = "heo_img/clothes-img/shoes2.jpg";
checked[17] = "heo_img/clothes-img/shoes3.jpg";
}

function falsecheckImg() {
for(var i=0; i<18; i++){
  if(closet_clothes[i].checked === false){
    checked[i] = false;
  }
}
}

function showImg(){
settingImg();
falsecheckImg()

for(var i=0;i<18;i++){
  if(checked[i]!==false){
    checkedclothes[i].src = checked[i];
    num++;
  }else{
    checkedclothes[i].style.display = 'none';
  }
}

}

comment_btn.addEventListener('click', function(event){ // function 콜백함수
event.preventDefault(); // 기본동작 : form을 엔터 쳐서 submit을 하면 다른 페이지로 가게 됨 (새로고침) -> 그 기본동작을 하지 못 하게 하는 것 
new_comment.textContent = comment_area.value;
showImg();
if(num > 0){
noimg.style.display = 'block';    
}
});

choosingbtn.addEventListener('click', function(event){ // function 콜백함수


});

