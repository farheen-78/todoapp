
    var div=document.getElementsByClassName("container");
    var list=document.getElementById("list");
    function addItems(){
        var todoItem=document.getElementById("todo-Item");
        var li=document.createElement("li");
        li.setAttribute("class","li");

        var liTxt=document.createTextNode(todoItem.value);
        li.appendChild(liTxt);
        // for delete button
        var delBtn=document.createElement("button");
        delBtn.innerHTML="<i class='fa fa-trash'></i>"
        delBtn.classList.add("delBtn");
        delBtn.setAttribute("class","btn1");
        delBtn.setAttribute("onclick","deleteItem(this)");
        
        // for Edit button
        var editBtn=document.createElement("button");
        editBtn.innerHTML="<i class='fa fa-edit'></i>"
        editBtn.classList.add("editBtn");
       
        editBtn.setAttribute("class","btn2");
        editBtn.setAttribute("onclick","editItem(this)");
        // editBtn.appendChild(editTxt);
 
        li.appendChild(delBtn);
        li.appendChild(editBtn);    
        list.appendChild(li);
         todoItem.value=""; 
         div.appendChild(list);
         
}
function deleteItem(e){
e.parentNode.remove();

}
function editItem(e){
var editVal=prompt("Enter update value",e.parentNode.firstChild.nodeValue);
e.parentNode.firstChild.nodeValue=editVal;
}
function deleteAll(){
    list.innerHTML="";
}
