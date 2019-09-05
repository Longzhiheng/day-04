/////1找到提交按钮
const reQuest = document.querySelector('.add');//提交按钮
let title = document.querySelector('.title');//提交的标题
let showhy = document.querySelector('.showhy');//提交问题的描述
let way = document.querySelector('.way');//提交的的解决的方案
let tbody=document.querySelector('tbody');//获取表格内容元素
let delet=document.querySelector('.delet');//获取删除元素
let chang=document.querySelector('.change');//获取修改元素

let newtitle = document.querySelector('.newtitle');//提交的标题(修改模态框的)
let newshowhy = document.querySelector('.newshowhy');//提交问题的描述(修改模态框的)
let newway = document.querySelector('.newway');//提交的的解决的方案(修改模态框的)

const updata=document.querySelector('.updata')///获取修改的元素标签



////点击按钮执行提交事件
reQuest.onclick = function () {//判断输入的值不能为空
    if (title !== '' && showhy !== '') {//最大可能给if(两个值同时存在)
        ajax({///开始传入数据（方式post）
              type:'post',
              url:'http://localhost/html1907/mywork/day-04/ph/response.php',//准备接收数据的地址
              data:{
                   Rtitle:title.value,
                   Rshowhy:showhy.value,
                   Rway:way.value,
                   check:reQuest.value
              }
        });
        location.reload(true);///缓存中刷新页面
    }
    else {
          alert('提交内容不能为空')
    }
}

////根据数据库渲染结构
ajax({
       type:'get',
       url:'http://localhost/html1907/mywork/day-04/ph/index.php',
       dataType:'json',
       success:function(d){
           console.log(d);//得到后台数据库的值进行渲染
           let Htmlstring='';
           for(let value of d){
              Htmlstring+=`
              <tr sid="${value.sid}">
                    <td>${value.sid}</td>
                    <td>${value.title}</td>
                    <td>${limtlen(value.showhy,10)}</td>
                    <td>${limtlen(value.way,10)}</td>
                    <td>${value.data}</td>
                    <td><a class="btn btn-danger btn-sm delet" href="#" role="button" sid="${value.sid}"><span
                                class="glyphicon glyphicon-remove-sign"></span>删除</a>
                        <button class="btn btn-success btn-sm change" type="submit" data-toggle="modal" data-target="#newmyModal" sid="${value.sid}"><span
                                class="glyphicon glyphicon-edit"></span>修改</button>
                    </td>
                </tr>
              
              
              `
           }
            
          tbody.innerHTML+=Htmlstring;
       }
});

///////删除模块
   
  tbody.onclick=function(ev){
     var ev =ev||window.event;
     var element=ev.target||ev.srcElement;  
    //  alert(element);
    if(element.nodeName==='A'){
        if(confirm('是否删除')){//是 传入数据进行删除

            tbody.removeChild(element.parentNode.parentNode);
          ajax({
                 type:'post',
                 url:'http://localhost/html1907/mywork/day-04/ph/delet.php/',
                 data:{
                     deletValeu:element.getAttribute('sid'),
                 }
          }) 
        }
        location.reload(true);///缓存中刷新页面

    }////点击删除执行
    else if(element.nodeName==='BUTTON'){//点击修改执行
        //    alert(element)
       ///获取修改前的数据

       ajax({
         type:'get',
         url:'http://localhost/html1907/mywork/day-04/ph/getvalue.php/',
         data:{
             oldsid:element.getAttribute('sid')
         },
         success:function(d){
             d=JSON.parse(d);
             console.log(typeof d);
              newtitle.value=d.title;
              newshowhy.value=d.showhy;
              newway.value=d.way;
         }
       })

    };

    /////修改数据
          updata.onclick=function(){
              if(confirm('是否点击修改')){////是 获取修改后的值 传入数据库
                  ajax({

                     type:'post',
                     url:'http://localhost/html1907/mywork/day-04/ph/updata.php/',
                     data:{
                         upsid:element.getAttribute('sid'),////新标签上的值
                          uptitle:newtitle.value,
                          upshowhy:newshowhy.value,
                          upway:newway.value     
                     },
                  });
              }
              location.reload(true);
          }

    

  }

