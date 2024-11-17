function time() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, 0);
  const seconds = date.getSeconds().toString().padStart(2, 0);
  
  const btn24=document.getElementById("btn24");
  const btn12=document.getElementById("btn12");
  
  if(btn24.checked){
    document.getElementById("time").textContent = `${hours}:${minutes}:${seconds}`;
  }
  else if(btn12.checked){
    let hours12 = (hours % 12 || 12).toString().padStart(2,0);
    let meridiem = (hours>12)?"pm":"am";
    document.getElementById("time").textContent=`${hours12}:${minutes}:${seconds} ${meridiem}`
  }
}

time()
setInterval(time,1000)