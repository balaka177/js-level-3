const posts=[{title:'post1',data:'Post1 created'},{title:'post2',data:'post2 created'}];

const p1=new Promise((resolve,reject) =>{
    posts.forEach((post) => {
        console.log(post);
    })
    resolve();
})
const p2= new Promise((resolve, reject) =>{
    
            const ulat=new Date();
            console.log(ulat);
            resolve();
    
})



const p5= new Promise((resolve,reject) => {
        const pt={title:'New post',data:'New post created'};
        posts.push(pt);
        console.log(pt)
        console.log(new Date());
        
        
        
        resolve();
        
        
        
    })

    
const p3=new Promise((resolve,reject) => {
        let x=posts.pop();
        //console.log(x)
        resolve();
})
    
const p4=new Promise((resolve,reject) =>{
        posts.forEach((post) => {
            console.log(post);
        })
        resolve();
});


Promise.all([p1,p2,p3,p4,p5])
