// Example Of Proise Function

let ans = new Promise((res ,rej)=>{
    let n = Math.floor(Math.random()*10);
    if(n<5){
        return res()
    }
    else{
        return rej()
    }
});

ans
.then(function(){
    console.log("resolved")
})
.catch(function(){
    console.log("rejected")
});



// Example No > 2


let p1 = new Promise((res, rej) => {
  return res("Sabse Pehle Ghar Par Aao");
});

let p2 = p1.then((data) => {
  console.log(data);
  return new Promise((res, rej) => {
    return res("Gate Kholo Aur Gate Band Kro");
  });
});

let p3 = p2.then((data) => {
  console.log(data);
  return new Promise((res, rej) => {
    return res("Khana Banao Aur Khana KHao");
  });
});

let p4 = p3.then((data) => {
  console.log(data);
});
