const user = document.getElementById('user');
const nameInput = document.getElementById('name');
const modalInput = document.getElementById('myModal');
const submitBtn = document.getElementById('submit');
const form = document.getElementById('myForm');
const nameError = document.getElementById('name-error');
// goi y input text
// const searchmyForm = document.querySelector(".input-text");
const searchmyForm = document.querySelector('#myForm');
const inputBox = searchmyForm.querySelector('input');
const suggBox = searchmyForm.querySelector('.autocom-box');

// get Element video
const myVideoShow = document.querySelector('#myVideo');

const apiGoogleDrive = 'https://www.googleapis.com/drive/v2/files';
const keyGoogleApis = 'AIzaSyDVxObz89sy2gbAERYP37Cw8iZhmFHfXSc';
const idVideo = '1m_Puq7HQEXctXsBVWlS-vyoS-yP1M1Mo';

const suggestions = [
    'Nguyễn Đức Thắng',
    'Nguyễn Thị Diễm Quỳnh',
    'Văn Bảo Nguyên',
    'Phạm Ngọc Trân',
    'Lê Thị Kiều Hoa',
    'Phương Thảo',
    'Trần Thiện Thanh',
    'Bùi Trương Mạnh Thông',
    'Lạc Tiến Huy',
    'Võ Anh Kiệt',
    'Lê Duy Linh',
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

const button = document.querySelector('.button');

button.addEventListener('mouseover', () => {
    button.classList.add('animate');
});

button.addEventListener('mouseout', () => {
    button.classList.remove('animate');
    setTimeout(() => {
        button.classList.remove('animate');
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
        searchmyForm.classList.add('active'); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll('li');
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute('onclick', 'select(this)');
        }
    } else {
        searchmyForm.classList.remove('active'); //hide autocomplete box
    }
};

function select(element) {
    let selectData = element.textContent;
    inputBox.value = selectData;

    searchmyForm.classList.remove('active');
}

function showSuggestions(list) {
    let listData;
    if (!list.length) {
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    } else {
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}

// function call api
async function fetchAPI(url) {
    const data = await fetch(url).then((res) => res.json());
    return data;
}

function getGoogleApiFile(key, id) {
    return `${apiGoogleDrive}/${id}?&key=${key}`;
}

async function handleVideoStream(idVide, key) {
    try {
        const data = await fetchAPI(getGoogleApiFile(key, idVide));
        let url = data.downloadUrl;

        console.log(url);
        myVideoShow.src = url;
    } catch (error) {
        console.error(error);
    }
}

handleVideoStream(idVideo, keyGoogleApis)
  .then(url => {
    console.log(url);
    // Sử dụng URL ở đây để thực hiện các thao tác tiếp theo
  })
  .catch(error => {
    console.error(error);
  });

// Change video
function handleVideoResult(name) {
    // Default Video src
    var defaultVideoSrc ='https://www.googleapis.com/drive/v2/files/1ClQ6-nt201U6U70odvdPsx4SNrpSxU4L?key=AIzaSyDVxObz89sy2gbAERYP37Cw8iZhmFHfXSc&alt=media&source=downloadUrl'

    switch (name) {
        case 'Nguyễn Đức Thắng':
            myVideoShow.src = defaultVideoSrc;
            break;
        case 'Lạc Tiến Huy':
            myVideoShow.src ='https://www.googleapis.com/drive/v2/files/1SXg-pYf586E0YFFEJI1Zse4f8OcXxi7E?key=AIzaSyDVxObz89sy2gbAERYP37Cw8iZhmFHfXSc&alt=media&source=downloadUrl';
            break;
        case 'Nguyễn Thị Diễm Quỳnh':
            myVideoShow.src = 'asset\\Thanh.mp4';
            break;
        case 'Phạm Ngọc Trân':
          myVideoShow.src ='https://www.googleapis.com/drive/v2/files/1iKsXkOaFZZZcImSzRrbjBJUTS56SaESl?key=AIzaSyDVxObz89sy2gbAERYP37Cw8iZhmFHfXSc&alt=media&source=downloadUrl';
            break;
        case 'Trần Thiện Thanh':
            myVideoShow.src ='https://www.googleapis.com/drive/v2/files/1m_Puq7HQEXctXsBVWlS-vyoS-yP1M1Mo?key=AIzaSyDVxObz89sy2gbAERYP37Cw8iZhmFHfXSc&alt=media&source=downloadUrl';
            break;
        case 'Bùi Trương Mạnh Thông':
          myVideoShow.src ='https://www.googleapis.com/drive/v2/files/1bTx_M1mhlCvhoGPuDNTQG1MzEwj9fFrS?key=AIzaSyDVxObz89sy2gbAERYP37Cw8iZhmFHfXSc&alt=media&source=downloadUrl';
            break;
        case 'Võ Anh Kiệt':
          myVideoShow.src ='https://www.googleapis.com/drive/v2/files/1G9DFy3OJWdPvn40W3Nf3rLvSD_x2mJqm?key=AIzaSyDVxObz89sy2gbAERYP37Cw8iZhmFHfXSc&alt=media&source=downloadUrl';
            break;
        case 'Lê Duy Linh':
          myVideoShow.src ='https://www.googleapis.com/drive/v2/files/1atVKYH9O2K2wUJkcNdGr2KSrXYVJliEA?key=AIzaSyDVxObz89sy2gbAERYP37Cw8iZhmFHfXSc&alt=media&source=downloadUrl';
        case 'Lê Thị Kiều Hoa':
          myVideoShow.src ='https://www.googleapis.com/drive/v2/files/1MIYPfbvjY7xvCEFM4zAWzefoCqGu0JYO?key=AIzaSyDVxObz89sy2gbAERYP37Cw8iZhmFHfXSc&alt=media&source=downloadUrl';
            break;
        case 'Phương Thảo':
          myVideoShow.src ='https://www.googleapis.com/drive/v2/files/1U5TI4p0x6PQ-TAy-7K6vI4TKHSPv0cNZ?key=AIzaSyDVxObz89sy2gbAERYP37Cw8iZhmFHfXSc&alt=media&source=downloadUrl';
            break;
        case 'Văn Bảo Nguyên':
          myVideoShow.src ='https://www.googleapis.com/drive/v2/files/168O4_xfZReQdMDyDGMPPWgQKyYRN9xsD?key=AIzaSyDVxObz89sy2gbAERYP37Cw8iZhmFHfXSc&alt=media&source=downloadUrl';
            break;
        default:
            myVideoShow.src = defaultVideoSrc;
            break;
    }
}
