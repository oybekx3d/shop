function updatemenu() {
  if (document.getElementById('responsive-menu').checked == true) {
    document.getElementById('menu').style.borderBottomRightRadius = '0';
    document.getElementById('menu').style.borderBottomLeftRadius = '0';
  }else{
    document.getElementById('menu').style.borderRadius = '0';
  }
}

function loadMenu() {
fetch('menu.txt')
    .then(response => response.text())
    .then(data => {
      $('#menu').html(data)
      });
}
function loadFooter() {
fetch('footer.txt')
    .then(response => response.text())
    .then(data => {
      $('footer').html(data)
      });
}
function getCookie(name) {
const value = `; ${document.cookie}`;
const parts = value.split(`; ${name}=`);
if (parts.length === 2)
  return parts.pop().split(';').shift();
}
function letsKnowPopUp() {
fetch('data/global.json')
    .then(response => response.json())
    .then(data => {
      let letsKnowCont = document.createElement("div");
      letsKnowCont.id = "unavailableDiscordPopUp";
      let letsKnowCloseBtn = document.createElement("button");
      $(letsKnowCloseBtn).text("X");
      $(letsKnowCloseBtn).attr("onclick","$('#unavailableDiscordPopUp').hide(); document.cookie = 'blockPopUp=1; expires=; path=/';");
      $(letsKnowCloseBtn).attr("id", "popUpCloseBtn");
      let letsknowtext = document.createElement("h3");
      $(letsknowtext).text(data.letsKnowText);
      let letsKnowPar = document.createElement("p");
      $(letsKnowPar).text(data.letsKnowPar);
      let letsKnowBtnLink = document.createElement("button");
      $(letsKnowBtnLink).text(data.letsKnowBtnText);
      $(letsKnowBtnLink).attr("onclick", "window.open('" + data.letsKnowLink+"'); document.cookie = 'blockPopUp=1; expires=; path=/'; $('#unavailableDiscordPopUp').hide();");
      letsKnowCont.appendChild(letsKnowCloseBtn);
      letsKnowCont.appendChild(letsknowtext);
      letsKnowCont.append(letsKnowPar);
      letsKnowCont.appendChild(letsKnowBtnLink);
      document.body.appendChild(letsKnowCont);
      });
}
function updateAnnouncement() {
fetch('data/global.json')
    .then(response => response.json())
    .then(data => {
      $("#announcement").html(data.announcement);
      $("#announcement").attr("href", data.announcementLink);
      });
}

function updateGlobal() {
loadMenu();
loadFooter();
updateAnnouncement();
if (getCookie("blockPopUp") == 1){return}else{letsKnowPopUp();}
}
updateGlobal()