scrolling =() =>{
    window.scrollTo(0,568);
     }
scrolling1 =() =>{
    window.scrollTo(0,1120);
     }
scrolling2 =() =>{
    window.scrollTo(0,1672);
     }
scrolling3 =() =>{
    window.scrollTo(0,2222);
     }     

let score = 0
let answer1_1 = document.querySelector("#answer1_1").clicked == true;
let answer1_2 = document.querySelector("#answer1_2").clicked == true;
let answer1_3 = document.querySelector("#answer1_3").clicked == true;
let answer1_4 = document.querySelector("#answer1_4").clicked == true;
let answer2_1 = document.querySelector("#answer2_1").clicked == true;
let answer2_2 = document.querySelector("#answer2_2").clicked == true;
let answer2_3 = document.querySelector("#answer2_3").clicked == true;
let answer2_4 = document.querySelector("#answer2_4").clicked == true;
let answer3_1 = document.querySelector("#answer3_1").clicked == true;
let answer3_2 = document.querySelector("#answer3_2").clicked == true;
let answer3_3 = document.querySelector("#answer3_3").clicked == true;
let answer3_4 = document.querySelector("#answer3_4").clicked == true;
let answer4_1 = document.querySelector("#answer4_1").clicked == true;
let answer4_2 = document.querySelector("#answer4_2").clicked == true;
let answer4_3 = document.querySelector("#answer4_3").clicked == true;
let answer4_4 = document.querySelector("#answer4_4").clicked == true;
let answer5_1 = document.querySelector("#answer5_1").clicked == true;
let answer5_2 = document.querySelector("#answer5_2").clicked == true;
let answer5_3 = document.querySelector("#answer5_3").clicked == true;
let answer5_4 = document.querySelector("#answer5_4").clicked == true;

const add = () =>{
    if (answer1_1 === true){
        score++;}
         else if (answer1_2 === true){
             score+=2;}
             else if (answer1_3 === true){
                 score+=3;}
                 else{
                     score+=4;}
                }














//           let getScore = () => {
//            let score = 0;
//            for (let i=0; i<tot; i++)
//            if(getCheckedValue("question"+i)===answers[i]) score += 1;
//            return score;
//   }

//   function returnScore(){
//     alert("Your score is "+ getScore() +"/"+ tot);}