const user = document.getElementById("user");
const nameInput = document.getElementById("name");
const modalInput = document.getElementById("myModal");
const submitBtn = document.getElementById("submit");
const form = document.getElementById("myForm");
const nameError = document.getElementById("name-error");
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
  nameInput.value = nameInput.value.replace(/[^a-zA-ZÀ-ÿ ]/g, "");
  nameInput.value = nameInput.value.replace(/\b\w/g, function (match) {
    return match.toUpperCase();
  });
};

submitBtn.onclick = (event) => {
  event.preventDefault(); // Ngăn chặn hành vi mặc định của nút submit
  if (nameInput.value.trim() === "") {
    nameError.textContent =
      "Chắc tao cho ăn cây quá! Nhập lại cho tao liền chưa";
  } else {
    user.innerText = nameInput.value;
    modalInput.style.display = "none";

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
inputBox.onkeyup = (e) => {
  let userData = e.target.value; //user enetered data
  let emptyArray = [];
  if (userData) {
    emptyArray = suggestions.filter((data) => {
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });
    emptyArray = emptyArray.map((data) => {
      // passing return data inside li tag
      return (data = `<li>${data}</li>`);
    });
    searchmyForm.classList.add("active"); //show autocomplete box
    showSuggestions(emptyArray);
    let allList = suggBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
      //adding onclick attribute in all li tag
      allList[i].setAttribute("onclick", "select(this)");
    }
  } else {
    searchmyForm.classList.remove("active"); //hide autocomplete box
  }
};

function select(element) {
  let selectData = element.textContent;
  inputBox.value = selectData;

  searchmyForm.classList.remove("active");
}

function showSuggestions(list) {
  let listData;
  if (!list.length) {
    userValue = inputBox.value;
    listData = `<li>${userValue}</li>`;
  } else {
    listData = list.join("");
  }
  suggBox.innerHTML = listData;
}

// Change video
function handleVideoResult(name) {
  // Default Video src
  var defaultVideoSrc =
    "asset\\thang.mp4";
  // get Element video
  const myVideoShow = document.querySelector("#myVideo");

  switch (name) {
    case "Nguyễn Đức Thắng":
      myVideoShow.src = defaultVideoSrc;
      break;
    case "Lạc Tiến Huy":
      myVideoShow.src =
        "asset\\Huy.mp4";
      break;
    case "Nguyễn Thị Diễm Quỳnh":
      myVideoShow.src =
        "asset\\Thanh.mp4";
      break;
    case "Phạm Ngọc Trân":
      myVideoShow.src =
       "asset\\Tran.mp4";
      break;
    case "Trần Thiện Thanh":
      myVideoShow.src =
        " asset\\Thanh.mp4";
      break;
    case "Bùi Trương Mạnh Thông":
      myVideoShow.src =
        "asset\\Thong.mp4";
      break;
    case "Võ Anh Kiệt":
      myVideoShow.src =
        "asset\\Kiet.mp4";
      break;
    case "Lê Duy Linh":
      myVideoShow.src =
        "asset\\Linh.mp4";
    case "Lê Thị Kiều Hoa":
      myVideoShow.src =
        "asset\\hoa.mp4";
      break;
    case "Lê Thị Phương Thảo":
      myVideoShow.src ="asset\\Thao.mp4";
      break;
    case "Văn Bảo Nguyên":
      myVideoShow.src =
        "asset\\Nguyen.mp4";
      break;
    default:
      myVideoShow.src = defaultVideoSrc;
      break;
  }
}
