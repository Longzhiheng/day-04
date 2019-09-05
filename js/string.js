///限制长度的函数
function limtlen(string,lengt){
       if(string.length>lengt){
          return string.substring(0,lengt)+'***'
       }
       else{
           return string
       }
     
}