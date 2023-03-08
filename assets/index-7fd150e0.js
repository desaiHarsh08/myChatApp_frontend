(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const c=io("https://mychatapp-backend.onrender.com"),y=document.getElementById("send-container"),f=document.getElementById("messageInp"),d=document.querySelector(".container"),l=document.querySelector("#members");var a=new Audio(".././Whistle Notification.mp3"),i=new Array;const p=(e,n,o)=>{if(n==="left"&&(d.innerHTML+=`<div class=" text-black flex flex-col justify-end items-start my-5 px-2 ">
        <div class="w-3/4 md:w-1/2 border p-3 rounded-lg bg-white">
            <p class="w-full"><span class="font-medium">${o}</span></p>
            <p class="rounded-md w-full ">${e}</p>
        </div>
    </div>`,a.play()),n==="right"&&(d.innerHTML+=`<div class=" text-black flex flex-col justify-end items-end my-5 px-2 ">
        <div class="w-3/4 md:w-1/2 border p-3 rounded-lg bg-[#dcf8c6]">
            <p class="w-full"><span class="font-semibold">You</span></p>
            <p class="rounded-md w-full ">${e}</p>
        </div>
    </div>`,a.play()),n==="center"){d.innerHTML+=`<div class=" text-black flex justify-center my-2 px-2 ">
        <p class="text-center bg-[#efedec] rounded-md py-1 w-3/4"><span class="font-medium">${o}</span> ${e}</p>
    </div>`,l.innerHTML="",i.push(o);for(let s=0;s<i.length;s++)l.innerHTML+=`<div class="p-3 ">
        <p class="border-b-2 py-1">${i[s]}</p>
    </div>`;a.play()}if(n==="dis-center"){i.splice(i.indexOf(o),1),d.innerHTML+=`<div class=" text-black flex justify-center my-2 px-2 ">
        <p class="text-center bg-[#efedec] rounded-md py-1 w-3/4"><span class="font-medium">${o}</span> ${e}</p>
    </div>`,l.innerHTML="";for(let s=0;s<i.length;s++)l.innerHTML+=`<div class="p-3 ">
        <p class="border-b-2 py-1">${i[s]}</p>
    </div>`,a.play()}};y.addEventListener("submit",e=>{e.preventDefault();const n=f.value;p(`${n}`,"right","You"),c.emit("send",n),f.value=""});const m=prompt("Enter your name to join!");c.emit("new-user-joined",m);c.on("user-joined",e=>{p("joined the chat","center",e)},e=>{console.log("from arr1",e)});c.on("receive",e=>{p(`${e.message}`,"left",e.name)});c.on("left",(e,n)=>{p("left the chat","dis-center",m)});
