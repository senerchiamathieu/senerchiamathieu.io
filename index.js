window.addEventListener("DOMContentLoaded", (event) => {


 //  $console.log (document.getElementById=("coor")) ;
  
  // for(let elt of document.getElementById=("coor")){
  //   console.log(elt.children);
    
  // }




 

  });

  var correction = document. getElementsByClassName("correction ");
  var btNxt = document.getElementById("cRep");
  var nbr = 0;
  var question = document.getElementsByClassName("question ")
  
  afficher(question[nbr]);


  function afficher(y){
  y.style.display="block"
}

function cacher(y){
  y.style.display="none"
}


function fReponse(){
  afficher (correction[nbr]);
  afficher (btNxt);
  console.log(btNxt)
  }

function next(){
  cacher (correction[nbr]);
  cacher (btNxt);

  cacher(question[nbr])
  nbr++
  afficher(question[nbr]);
}










  var btnCort = document. getElementById("cCrt");
  var btnVrf = document. getElementById("cRep");
  

//  function rep () {
//   showCort[0].style.display = 'block';
//   document. getElementById("cCrt").style.display = 'none';
//   document. getElementById("cRep").style.display = 'block';

//  }

//  function next (){
//   showCort[0].style.display = 'none';
//   document. getElementById("cCrt").style.display = 'block';
//   document. getElementById("cRep").style.display = 'none';
//  }







// for(let elt of document.getElementsByTagName("body")){
//   for(let elt1 of elt.children){
//           console.log("aaza");

//       if(elt1.className == "topContent"){
//           for(let elt2 of elt1.children){

//               for(let elt3 of elt2.children){
//                   if(elt3.tagName.toLowerCase() == "img"){
//                       elt3.style.padding=( "0 " +((elt2.clientWidth -elt3.clientWidth) /2)+ "px")
//                       var c = (elt2.clientHeight - elt3.clientHeight) /2;
//                       elt3.style.paddingTop=(c+"px")
//                       //console.log(elt2);


//                   }

//               }
//           }
//       }
//   }
// }