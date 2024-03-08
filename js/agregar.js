const selectImage = document.querySelector('.select-image');
const inputFile = document.querySelector('#file');
const imgArea = document.querySelector('.img-area');

selectImage.addEventListener('click', function () {
    inputFile.click();
})

inputFile.addEventListener('change', function () {
    const image = this.files[0]
    console.log(image);
    if(image.size < 449654){
        const reader = new FileReader();
        reader.onload = () => {
            const allImg = imgArea.querySelectorAll('img');
            allImg.forEach(item => item.remove());
            const imgUrl =reader.result;
            const img = document.createElement('img');
            img.src = imgUrl;
            imgArea.appendChild(img);
            imgArea.classList.add('active');
            imgArea.dataset.img = image.name;
        }
        reader.readAsDataURL(image);
    }else{
        alert("Imagen con medidas mayor a 1300 x 1768");
    }
});















// let uploadButton = document.getElementById("upload-button");
// let chosenImage = document.getElementById("chosen-image");
// let fileName = document.getElementById("file-name");

// uploadButton.onchange = () => {
//     let reader = new FileReader();
//     reader.readAsDataURL(uploadButton.files[0]);
//     reader.onload = () => {
//         chosenImage.setAttribute("src", reader.result);
//     };
//     fileName.textContent = uploadButton.files[0].name;
// };