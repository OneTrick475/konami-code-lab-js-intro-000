const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  document.body.addEventListener("keydown", function(e){
    const key = e.key;
     let i=0;
    if(codes[i]) === key){
      i++;
      }
      if(i === codes.length){
        console.alert('wp');
      }
      else{
        i=0;
      }

    }
  }
