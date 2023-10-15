
const user = document.getElementById('user');
const nameInput = document.getElementById('name');
const modalInput = document.getElementById('myModal');
const submitBtn = document.getElementById('submit');
const form = document.getElementById('myForm');
const nameError = document.getElementById('name-error');
// goi y input text
// const searchmyForm = document.querySelector(".input-text");
const searchmyForm = document.querySelector("#myForm");
const inputBox = searchmyForm.querySelector("input");
const suggBox = searchmyForm.querySelector(".autocom-box");

const suggestions = [
  "Nguyễn Đức Thắng",
  "Nguyễn Thị Diễm Quỳnh",
  "Văn Bảo Nguyên",
  "Phạm Ngọc Trân",
  "Lê Thị Kiều Hoa",
  "Lê Thị Phương Thảo",
  "Trần Thiện Thanh",
  "Bùi Trương Mạnh Thông",
  "Lạc Tiến Huy",
  "Võ Anh Kiệt",
  "Lê Duy Linh",
  
];

modalInput.oninput = () => {
    if (nameInput.value.length > 21) {
        nameInput.value = nameInput.value.slice(0, 21);
    }
    nameInput.value = nameInput.value.replace(/[^a-zA-ZÀ-ÿ ]/g, '');
    nameInput.value = nameInput.value.replace(/\b\w/g, function (match) {
        return match.toUpperCase();
    });
};


submitBtn.onclick = (event) => {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của nút submit
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Chắc tao cho ăn cây quá! Nhập lại cho tao liền chưa';
    } else {
        user.innerText = nameInput.value;
        modalInput.style.display = 'none';

         // When submit name => handleVideo by name
    handleVideoResult(nameInput.value);
    }
    
};

const button = document.querySelector(".button");

button.addEventListener("mouseover", () => {
  button.classList.add("animate");
});

button.addEventListener("mouseout", () => {
  button.classList.remove("animate");
  setTimeout(() => {
    button.classList.remove("animate");
  }, 600);
});
// xu ly ten 

// if user press any key and release
inputBox.onkeyup = (e)=>{
  let userData = e.target.value; //user enetered data
  let emptyArray = [];
  if(userData){
      
      emptyArray = suggestions.filter((data)=>{
  
          return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
      });
      emptyArray = emptyArray.map((data)=>{
          // passing return data inside li tag
          return data = `<li>${data}</li>`;
      });
      searchmyForm.classList.add("active"); //show autocomplete box
      showSuggestions(emptyArray);
      let allList = suggBox.querySelectorAll("li");
      for (let i = 0; i < allList.length; i++) {
          //adding onclick attribute in all li tag
          allList[i].setAttribute("onclick", "select(this)");
      }
  }else{
      searchmyForm.classList.remove("active"); //hide autocomplete box
  }
}

function select(element){
  let selectData = element.textContent;
  inputBox.value = selectData;
  
  searchmyForm.classList.remove("active");
}

function showSuggestions(list){
  let listData;
  if(!list.length){
      userValue = inputBox.value;
      listData = `<li>${userValue}</li>`;
  }else{
    listData = list.join('');
  }
  suggBox.innerHTML = listData;
}

// Change video
function handleVideoResult(name) {
  // Default Video src
  var defaultVideoSrc = 'https://rr5---sn-npoldne7.c.drive.google.com/videoplayback?expire=1697396883&ei=Yw4sZe-kOrTHrvIPhqOLwA4&ip=171.252.189.204&cp=QVROWURfVVhWRFhPOk5jRGVRZWFtTHVvLVpuX284MTZlRVRrTjJoUHNUQ0tnbHoweFdpSkRPUGg&id=3874226419700e2a&itag=18&source=webdrive&requiressl=yes&xpc=EghotM6WJ3oBAQ==&mh=7f&mm=32&mn=sn-npoldne7&ms=su&mv=m&mvi=5&pl=23&ttl=transient&susc=dr&driveid=1ClQ6-nt201U6U70odvdPsx4SNrpSxU4L&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=125.991&lmt=1697349768549287&mt=1697385891&subapp=DRIVE_WEB_FILE_VIEWER&txp=0006224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AGM4YrMwRQIgbCCFGjybjf9k44HA7nhQWpvmnW5SvRdILw6y9FkBrrsCIQDdFIzDdroPKsOmuhvShkI_R3o420CY6YDhqavNHiuqQg==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AK1ks_kwRQIhAJmxEiw1pCqCY0eFdEyalAAJkKPg_rF2x7Uub39UDaAZAiBeQymLSYicI2oi-npgDQqCkok2iinbvEevxsclmNhwTg==&cpn=gW6tk-xvS3kpnexG&c=WEB_EMBEDDED_PLAYER&cver=1.20231010.01.00';
  // get Element video
  const myVideoShow = document.querySelector('#myVideo');

  

  switch (name) {
    case 'Nguyễn Đức Thắng':
      myVideoShow.src = defaultVideoSrc;
      break;
    case 'Lạc Tiến Huy':
      myVideoShow.src = 'https://rr3---sn-npoeenlk.c.drive.google.com/videoplayback?expire=1697395931&ei=qwosZcPRKMmSrvIP7vCO0AI&ip=113.185.78.223&cp=QVROWURfVFlRQlhPOk5jRGRSenltTHVvLVptX2o2MTZlRVRrTTNjTnNUQ0tnbHkxc1VpSkRPUGg&id=bfe7b080df31e91e&itag=18&source=webdrive&requiressl=yes&xpc=EghotM6WJ3oBAQ==&mh=x9&mm=32&mn=sn-npoeenlk&ms=su&mv=m&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1SXg-pYf586E0YFFEJI1Zse4f8OcXxi7E&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=190.635&lmt=1697350716381410&mt=1697384696&subapp=DRIVE_WEB_FILE_VIEWER&txp=0001224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AGM4YrMwRgIhAJFTdY4LC6iZ_NPhz-eUCtgkSiFZRpvBNsaRF3Af0vzVAiEAvcZcny0KePIEqSlGCShwSaCozRDkOCs9Ksvx9AU_Fcg=&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AK1ks_kwRQIhANYg6BqsSg4b0eSUSq-Tqu4HuiuHiZqsWw8zovZIJsxpAiA9PKmq5S1WJArCwP5ue13_SFvqFD0Vpt56vo2l5h2Wyg==&cpn=UzqsmBmH5YRYBfSS&c=WEB_EMBEDDED_PLAYER&cver=1.20231010.01.00';
      break;
      case 'Nguyễn Thị Diễm Quỳnh':
      myVideoShow.src = 'https://rr3---sn-npoeenlk.c.drive.google.com/videoplayback?expire=1697395931&ei=qwosZcPRKMmSrvIP7vCO0AI&ip=113.185.78.223&cp=QVROWURfVFlRQlhPOk5jRGRSenltTHVvLVptX2o2MTZlRVRrTTNjTnNUQ0tnbHkxc1VpSkRPUGg&id=bfe7b080df31e91e&itag=18&source=webdrive&requiressl=yes&xpc=EghotM6WJ3oBAQ==&mh=x9&mm=32&mn=sn-npoeenlk&ms=su&mv=m&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1SXg-pYf586E0YFFEJI1Zse4f8OcXxi7E&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=190.635&lmt=1697350716381410&mt=1697384696&subapp=DRIVE_WEB_FILE_VIEWER&txp=0001224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AGM4YrMwRgIhAJFTdY4LC6iZ_NPhz-eUCtgkSiFZRpvBNsaRF3Af0vzVAiEAvcZcny0KePIEqSlGCShwSaCozRDkOCs9Ksvx9AU_Fcg=&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AK1ks_kwRQIhANYg6BqsSg4b0eSUSq-Tqu4HuiuHiZqsWw8zovZIJsxpAiA9PKmq5S1WJArCwP5ue13_SFvqFD0Vpt56vo2l5h2Wyg==&cpn=UzqsmBmH5YRYBfSS&c=WEB_EMBEDDED_PLAYER&cver=1.20231010.01.00';
      break;
    case 'Phạm Ngọc Trân':
      myVideoShow.src = 'https://drive.google.com/uc?id=1iKsXkOaFZZZcImSzRrbjBJUTS56SaESl';
      break;
    case 'Trần Thiện Thanh':
        myVideoShow.src = 'https://drive.google.com/uc?id=1m_Puq7HQEXctXsBVWlS-vyoS-yP1M1Mo ';
        break; 
    case 'Bùi Trương Mạnh Thông':
      myVideoShow.src = 'https://rr2---sn-npoldn7s.c.drive.google.com/videoplayback?expire=1697396512&ei=8AwsZdzvOe-VrvIPhZyCgAg&ip=171.252.189.200&cp=QVROWURfVVVPQ1hPOk5jRGVOeHptTHVvLVpuX2g3MTZlRVRrTjlhT3NUQ0tnbHo3cVZpSkRPUGg&id=339df97b9fef2969&itag=18&source=webdrive&requiressl=yes&xpc=EghotM6WJ3oBAQ==&mh=I8&mm=32&mn=sn-npoldn7s&ms=su&mv=m&mvi=2&pl=23&ttl=transient&susc=dr&driveid=1bTx_M1mhlCvhoGPuDNTQG1MzEwj9fFrS&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=222.029&lmt=1697356740952094&mt=1697385173&subapp=DRIVE_WEB_FILE_VIEWER&txp=0001224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AGM4YrMwRAIgKbLt5HFw-t71-4BJ_afh4_IReZiMzpxUI228HFfewq8CIBGhDB1nkkfuNCQjwS-alHqrFAcbQGCaMqGYgFN584ka&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AK1ks_kwRQIgeJC8ENBsv81tl45x_QRLxUST--KrrmMra7DQAoOcNzYCIQDAWnzJRkp0UpNnKX1PkBibKJx0Qe-N_bE0lyd_Hltyhw==&cpn=_kLcrgbOY7eW0f3F&c=WEB_EMBEDDED_PLAYER&cver=1.20231010.01.00';
      break;
    case 'Võ Anh Kiệt':
      myVideoShow.src = 'https://rr5---sn-npoe7ndl.c.drive.google.com/videoplayback?expire=1697396145&ei=gQssZfGaL6PY-LYPj4iwyAs&ip=171.252.189.204&cp=QVROWURfVVFSRlhPOk5jRGVKYWNtTHVvLVpuX2swMTZlRVRrTjVkUnNUQ0tnbHozdFlpSkRPUGg&id=e0e158c5bf721bec&itag=18&source=webdrive&requiressl=yes&xpc=EghotM6WJ3oBAQ==&mh=od&mm=32&mn=sn-npoe7ndl&ms=su&mv=m&mvi=5&pl=23&ttl=transient&susc=dr&driveid=1G9DFy3OJWdPvn40W3Nf3rLvSD_x2mJqm&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=385.706&lmt=1697349727357567&mt=1697384938&subapp=DRIVE_WEB_FILE_VIEWER&txp=0006224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AGM4YrMwRQIgAIr7O2Q9EAdrhgpSj67LoyR5qisJ-EsIzNZxi5QOLqsCIQCOfdTnl3pM5YaHwDNGbbLWO3FK7vl8GPnzOupUXvok_Q==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AK1ks_kwRgIhAIH8eW8EqbWYBxsVQ1VU3wI9iBZZFVJFqIiYwgsHgCyYAiEAwBdfgI5JJA_jAi6omm1lnE_OsroCj4K053k3ZH67tDs=&cpn=u3F8S5W63ZRa_0Gq&c=WEB_EMBEDDED_PLAYER&cver=1.20231010.01.00';
      break;
     case 'Lê Duy Linh': 
      myVideoShow.src = 'https://drive.google.com/uc?id=1atVKYH9O2K2wUJkcNdGr2KSrXYVJliEA';
      break;
    case 'Lê Thị Kiều Hoa':
      myVideoShow.src = 'https://rr4---sn-npoe7ne7.c.drive.google.com/videoplayback?expire=1697396576&ei=MA0sZf_SL5H8-LYPqputEA&ip=171.252.189.200&cp=QVROWURfVVVVR1hPOk5jRGVOZGRtTHVvLVpuX24xMTZlRVRrTjlnU3NUQ0tnbHo3d1ppSkRPUGg&id=ba3a9139ee6fefba&itag=18&source=webdrive&requiressl=yes&xpc=EghotM6WJ3oBAQ==&mh=G1&mm=32&mn=sn-npoe7ne7&ms=su&mv=m&mvi=4&pl=23&ttl=transient&susc=dr&driveid=1MIYPfbvjY7xvCEFM4zAWzefoCqGu0JYO&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=47.113&lmt=1697349481399555&mt=1697385173&subapp=DRIVE_WEB_FILE_VIEWER&txp=0001224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AGM4YrMwRQIgAfNmviHxRzEwgZUXquLdIbP_And6jApPGYA8jrRGN68CIQDg-ofPktD8bWQDAbKFPOa8fnSH_j3dmvvNUroBZmWwPg==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AK1ks_kwRAIgUOQUi7NvXglNjiBPDpn3IIQzhqlPZLkh_F5wbQpfiWACIAXCaqVb9oEzVigt0fmmDF33hLj4dP-X2jhb-YElL5q9&cpn=TWI-S0dpP8Hcreva&c=WEB_EMBEDDED_PLAYER&cver=1.20231010.01.00'
    case 'Lê Thị Phương Thảo':
      myVideoShow.src = 'https://rr4---sn-npoeenll.c.drive.google.com/videoplayback?expire=1697396673&ei=kQ0sZd6JBJfjrvIPjuKH-Ac&ip=171.252.189.204&cp=QVROWURfVVZVRFhPOk5jRGVPZGFtTHVvLVpuX244MTZlRVRrTjBnUHNUQ0tnbHo4d1dpSkRPUGg&id=6ff834cc13f743b3&itag=18&source=webdrive&requiressl=yes&xpc=EghotM6WJ3oBAQ==&mh=TW&mm=32&mn=sn-npoeenll&ms=su&mv=m&mvi=4&pl=23&ttl=transient&susc=dr&driveid=1U5TI4p0x6PQ-TAy-7K6vI4TKHSPv0cNZ&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=562.224&lmt=1697347570740657&mt=1697385173&subapp=DRIVE_WEB_FILE_VIEWER&txp=0006224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AGM4YrMwRgIhAO-SsJDlosNzTpflgNKuW6XbiELNgBYYUDwyxw41c5SzAiEAzOovsQh1YH6jYBSOzaOvkdUiQ3Pu-c5xoylxtYJO2DY=&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AK1ks_kwRQIhAP0G51gSdqEOXgLqXAX6kAtRiZSixgs1yEmq38n_q3UdAiBpKbrqeSSBwshfoUJTgVTe2dLqL2n69rIvwJuxf-5Szg==&cpn=P7gFTmxplJtLdPi-&c=WEB_EMBEDDED_PLAYER&cver=1.20231010.01.00';
    break;
    case 'Văn Bảo Nguyên':
      myVideoShow.src = 'https://rr5---sn-npoeener.c.drive.google.com/videoplayback?expire=1697396795&ei=Cw4sZbLtMtCbp84P4dex0AY&ip=171.252.189.204&cp=QVROWURfVVdXRlhPOk5jRGVQZmNtTHVvLVpuX3AwMTZlRVRrTjFpUnNUQ0tnbHo5eVlpSkRPUGg&id=8fcb671250f92233&itag=18&source=webdrive&requiressl=yes&xpc=EghotM6WJ3oBAQ==&mh=Ig&mm=32&mn=sn-npoeener&ms=su&mv=m&mvi=5&pl=23&ttl=transient&susc=dr&driveid=168O4_xfZReQdMDyDGMPPWgQKyYRN9xsD&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=359.282&lmt=1697351782474685&mt=1697385173&subapp=DRIVE_WEB_FILE_VIEWER&txp=0001224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AGM4YrMwRQIhALTrJq6m-if4VzT0Lgu7TNkhI4uhhLK7plP2cmF2I5KbAiAJwDJCOl3zAYoUOhtcgQvsgkSr6pIU_BmEh8IZPVfnqA==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AK1ks_kwRQIgH-8lGUV9ZMnVXXNaOu2BVf3cR-32eOeG3A0v7-iRoZoCIQCeZ1K5DGz7itK-STuWDCKEblMVW-3uLJkF6gmGEDe5Tg==&cpn=iPzUGoGbIX6gghc1&c=WEB_EMBEDDED_PLAYER&cver=1.20231010.01.00';
    break;
      default:
      myVideoShow.src = defaultVideoSrc;
      break;
  }
}