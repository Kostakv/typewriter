
  const sentence = "hello there from lighthouse labs";

  let i = 0;
  
  const displayText = function (){
    process.stdout.write(sentence[i])
    i++;
    if (i >= sentence.length){
      clearInterval(display);
    }
  }
  
  let display = setInterval(displayText, 500);
  

