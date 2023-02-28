
var sub=document.getElementById('for');
sub.addEventListener('submit',cred);
var list=document.getElementById('items');




function cred(e){
    e.preventDefault(); 
    var nm=document.getElementById('nm').value;
    var em=document.getElementById('em').value;
    var tel=document.getElementById('tell').value
     let obj={
        name:nm,
        email:em,
        phone:tel
     };
     axios.post('https://crudcrud.com/api/f92ff4811b9b4ea395f50f22e8ab34a1/data',obj)
     .then((res) => {
      console.log(res)
     })
     .catch((err) => {
      console.log(err)
     })




     //let obj_st=JSON.stringify(obj);
     //localStorage.setItem(em,obj_st);
     //document.write(nm + ' - ' +em +' - '+ tel);
     var btn=document.createElement('button');
     var li=document.createElement('li');
     btn.id=('buttonid');
     li.appendChild(document.createTextNode(nm + ' - ' +em +' - '+ tel));

     
     btn.className='button';
     btn.appendChild(document.createTextNode('Delete'));

     var ed=document.createElement('button');
     ed.id='editbtn';
     ed.appendChild(document.createTextNode('Edit'));
     li.appendChild(btn);
     li.appendChild(ed);



     list.appendChild(li);
     
    btn.addEventListener('click',function(e){
      if(e.target.id==='buttonid'){
         var li=e.target.parentElement;
         list.removeChild(li);
      }
    })
    
      ed.addEventListener('click',function(e){
         if(e.target.id==='editbtn'){
            let myobj=JSON.parse(obj_st);
            document.getElementById('nm').value=nm;
            document.getElementById('em').value=em;
            document.getElementById('tell').value=tel;
            console.log(myobj.name)
            localStorage.removeItem(em);
            var li=e.target.parentElement;
            list.removeChild(li);
            

         }
      })

}



