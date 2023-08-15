function uploadImage(){
    const input =document.getElementById('image-input');
    const container =document.getElementById('uploaded-img');
    const file = input.files[0];

    if (file){
        const reader = new FileReader();
        reader.onload =function(event){
        const imageUrl = event.target.result;
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        imgElement.innerHTML='';
        container.appendChild(imgElement);    
        };
        reader.readAsDataURL(file);
    }
}