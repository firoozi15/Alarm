const clock = document.querySelector("#Time");
const setbtn = document.querySelector(".setbtn");

const Hour = document.querySelector("#Hour");
const Minute = document.querySelector("#Minutes");
const AmPm = document.querySelector("#AmPm");

const msgbox = document.querySelector("#msgback");
const closeBtn = document.querySelector("#closeok");
const textstatus = document.querySelector("#textstatus");
const status = document.querySelector("#status");
const alarm = document.querySelector("#audio");


setbtn.addEventListener("click",setAlarm);
closeBtn.addEventListener("click",closebtn)
setInterval(() => {
    
    const date = new Date();
    let H = date.getHours();
    let M = date.getMinutes();
    let S = date.getSeconds();
    let A_P = "AM";

    if (H == 12){
        H = 12;
        A_P = "PM";
    }
    else if (H > 12){
        H -= 12;
        A_P = "PM";
    }

    if (S == 60)
    {
        S = 0;
        M += 1;
    }
    H.toString().length == 1 ? H = "0"+H : H ;
    M.toString().length == 1 ? M = "0"+M : M ;
    S.toString().length == 1 ? S = "0"+S : S ;

    clock.innerText = `${H} : ${M} : ${S} ${A_P}`;

    checkAlarm(H,M,A_P);
}, 1000);

function setAlarm() {
    if (Hour.value == "null" || Minute.value == "null" || AmPm.value == "null" ) {
        msgbox.style.display = "flex";
        msgbox.style.animation = "0.3s fadeShow";
        textstatus.innerText = "Error";
        status.innerHTML = '<svg width="70px" height="70px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#f44336" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"/><path fill="#fff" d="M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z"/><path fill="#fff" d="M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z"/></svg>'; 
    }
    else{
        msgbox.style.display = "flex";
        msgbox.style.animation = "0.3s fadeShow";
        textstatus.innerText = "Successfully";
        status.innerHTML = '<svg width="70px" height="70px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"> <path fill="#4caf50" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z" /> <path fill="#ccff90" d="M34.602,14.602L21,28.199l-5.602-5.598l-2.797,2.797L21,33.801l16.398-16.402L34.602,14.602z" /> </svg>'; 
    }
}

function checkAlarm(h,m,a_p) {
    if (h == Hour.value && m == Minute.value && a_p == AmPm.value) {
        msgbox.style.display = "flex";
        msgbox.style.animation = "0.3s fadeShow";
        textstatus.innerText = "Alarm";
        status.innerHTML = '<svg id="iconVib" width="70px" height="70px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 495.44 495.44" style="enable-background:new 0 0 495.44 495.44;" xml:space="preserve"><g><path style="fill:#EE8700;" d="M247.72,495.44c42.756,0,78.637-29.963,87.756-69.995H247.72V495.44z"/><path style="fill:#FFA733;" d="M159.964,425.445c9.12,40.032,45,69.995,87.756,69.995v-69.995H159.964z"/><path style="fill:#FFCD00;" d="M455.22,385.445V328.17l-30-30v-73.54c0-79.3-52.71-148.46-127.5-170.35V50c0-27.57-22.43-50-50-50   v385.445H455.22z"/><path style="fill:#FFDA44;" d="M247.72,0c-27.57,0-50,22.43-50,50v4.28c-74.79,21.89-127.5,91.05-127.5,170.35v73.54l-30,30v57.275   h207.5V0z"/><rect x="20.22" y="385.445" style="fill:#FFB655;" width="455" height="40"/><path style="fill:#FFE477;" d="M451.993,187.696l39.377-7.035C479.48,114.107,440.198,54.564,383.597,17.298l-21.996,33.409   C409.077,81.965,442.025,131.896,451.993,187.696z"/><path style="fill:#FFEB99;" d="M133.839,50.707l-21.996-33.409C55.242,54.564,15.96,114.107,4.07,180.66l39.377,7.035   C53.415,131.896,86.363,81.965,133.839,50.707z"/></g></svg>';
        Hour.value = "null";
        Minute.value = "null";
        AmPm.value = "null";
        alarm.play();
    }
}

function closebtn() {
    msgbox.style.animation = "0.3s fadeHide";
    setTimeout(() => {
        alarm.pause();
        msgbox.style.display = "none";
    },300)
}