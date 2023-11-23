let toggles = document.getElementsByClassName("toggle");
let togglesTwo = document.getElementsByClassName("toggle-two");
let faqDetail = document.getElementsByClassName("faq-details");
let faqDetailTwo = document.getElementsByClassName("faq-details-two");
let contentDiv = document.getElementsByClassName("content");
let icons = document.getElementsByClassName("toggle-icon");
let iconsBtn = document.getElementsByClassName("toggle-icon-btn");

for (let i = 0; i < toggles.length; i++) {
  toggles[i].addEventListener("click", () => {
    if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
      contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
      toggles[i].style.color = "#f9508c";
      faqDetail[i].style.border = "2px solid #f9508c";
      faqDetail[i].style.boxShadow = "0px 6px 16px #ffb6c1";
      icons[i].src = "/assets/images/down-faq.png";
    } else {
      contentDiv[i].style.height = "0px";
      toggles[i].style.color = "#151515";
      faqDetail[i].style.border = "2px solid transparent";
      faqDetail[i].style.boxShadow = "0px 5px 16px #080f340f";
      icons[i].src = "/assets/images/right-faq.png";
    }

    for (let j = 0; j < contentDiv.length; j++) {
      if (j !== i) {
        contentDiv[j].style.height = "0px";
        toggles[j].style.color = "#151515";
        togglesTwo[j].style.color = "#151515";
        faqDetail[j].style.border = "2px solid transparent";
        faqDetail[j].style.boxShadow = "0px 5px 16px #080f340f";
        icons[j].src = "/assets/images/right-faq.png";
      }
    }
  });
}

for (let i = 0; i < togglesTwo.length; i++) {
  togglesTwo[i].addEventListener("click", () => {
    if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
      contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
      togglesTwo[i].style.color = "#000";
      icons[i].src = "/assets/images/down-faq.png";
    } else {
      contentDiv[i].style.height = "0px";
      togglesTwo[i].style.color = "#151515";
      icons[i].src = "/assets/images/right-faq.png";
    }

    for (let j = 0; j < contentDiv.length; j++) {
      if (j !== i) {
        contentDiv[j].style.height = "0px";
        togglesTwo[j].style.color = "#151515";
        icons[j].src = "/assets/images/right-faq.png";
      }
    }
  });
}
