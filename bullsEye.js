let keys = "DAAAADCBACABDAADBADCBABDDDAACAAACACCACAC";
let len = keys.length;

let i = 0;

const inter = setInterval(
  function(){
    document.querySelector(`#${keys[i]}_${i+1}`).click();
    document.querySelector("#main_div > div.tableWidthPercent > div.onlineTestLeftDiv > div.qnav > span.saveNextButton > a").click();
    i++;
    
    if(i == len){
      clearInterval(inter)
    }
  },
000);
