console.log("Script Loaded")


var dataInput= document.getElementById("data_input")
var button1= document.getElementById("button")
var listData= document.getElementById("list_data")
var listWrapper= document.getElementById("list_wrapper")
var listItem=document.getElementById("lit_item")
// var deleteIcon=document.getElementById("delete_icon")



listWrapper.addEventListener("submit",function(e){
  e.preventDefault();
})


button1.addEventListener("click",function(){
    if(dataInput.value==""||dataInput.value==" ")
    {
      alert("Please Enter ToDo Item")
      return;
    }
    

     message= dataInput.value;
     var List= localStorage.getItem("todo-List")===null? []: JSON.parse(localStorage.getItem("todo-List"))
     
    for(var i=0;i<List.length;i++)
    {
       if(List[i].message==message)
       {
         alert("You Can't have two Identical TO-DO Things")
         return;
       }
      
     }
    var currentData= new Date;
     time= "Date "+currentData.getDate()+"-"+(currentData.getMonth()+1)+"-"+currentData.
    getUTCFullYear()+"/Time "+currentData.getHours()+":"+currentData.getMinutes()+":"+currentData.getSeconds()
   
     cardRender(message,time); 

   var List= localStorage.getItem("todo-List")===null? []: JSON.parse(localStorage.getItem("todo-List"))
   List.push({
     message:message,
     date:time
   })
   localStorage.setItem("todo-List",JSON.stringify(List))

   
})


function cardRender(message1,time1){
  var card= document.createElement("div")
    card.className="list_item";
    var wrappeNameDate=document.createElement("div")
    var nameIn=document.createElement("h3")
    var paraIn=document.createElement("p")
    nameIn.innerHTML=message1;
    paraIn.innerHTML=time1;
    wrappeNameDate.appendChild(nameIn);
    wrappeNameDate.appendChild(paraIn);
    paraIn.className="date_time"
    card.appendChild(wrappeNameDate);
    var wrapIcon=document.createElement("div")
    wrapIcon.className="delete_icon"
    var deleteIcon=document.createElement("i")
    deleteIcon.className="far fa-trash-alt"
    wrapIcon.appendChild(deleteIcon)
    card.appendChild(wrapIcon)
    deleteIcon.addEventListener("click",function(){
      var listLocalStorage = localStorage.getItem("todo-List") === null ? []: JSON.parse(localStorage.getItem("todo-List"));
for(var i=0;i<listLocalStorage.length;i++)
{
  if(nameIn.innerHTML==listLocalStorage[i].message)
  {
    listLocalStorage.splice(i,1)
    
  }
}
localStorage.setItem("todo-List",JSON.stringify(listLocalStorage))
      card.remove();
    })
    nameIn.addEventListener("dblclick",function(){
      nameIn.remove();
      var nameIn1=document.createElement("input")
      wrappeNameDate.prepend(nameIn1);
      nameIn1.className="data_input"
      name1=nameIn.innerHTML;
      nameIn1.value=nameIn.innerText;
      nameIn1.addEventListener("blur",function(){
       
        if(nameIn1.value==""||nameIn1.value==" ")
    {
      alert("Please Enter ToDo Item")
      return;
    } 
     
    
        nameIn1.remove();
        nameIn.innerHTML=nameIn1.value;
        var listLocalStorage = localStorage.getItem("todo-List") === null ? []: JSON.parse(localStorage.getItem("todo-List"));
        for(var i=0;i<listLocalStorage.length;i++)
       {
       if(name1==listLocalStorage[i].message)
       {
       
        listLocalStorage[i].message=nameIn.innerText;
        var currentData= new Date;
        paraIn.innerHTML= "Date "+currentData.getDate()+"-"+(currentData.getMonth()+1)+"-"+currentData.
    getUTCFullYear()+"/Time "+currentData.getHours()+":"+currentData.getMinutes()+":"+currentData.getSeconds()
        listLocalStorage[i].date=paraIn.innerHTML;
        
      }
      }
      localStorage.setItem("todo-List",JSON.stringify(listLocalStorage))
        
       var currentData= new Date;
        paraIn.innerHTML= "Date "+currentData.getDate()+"-"+(currentData.getMonth()+1)+"-"+currentData.
    getUTCFullYear()+"/Time "+currentData.getHours()+":"+currentData.getMinutes()+":"+currentData.getSeconds()
        wrappeNameDate.prepend(nameIn);
        wrappeNameDate.appendChild(paraIn)
    })
  })
  listData.prepend(card);
    dataInput.value="";
}


var listLocalStorage = localStorage.getItem("todo-List") === null ? []: JSON.parse(localStorage.getItem("todo-List"));
for(var i=0;i<listLocalStorage.length;i++)
{
  cardRender(listLocalStorage[i].message,listLocalStorage[i].date);
}