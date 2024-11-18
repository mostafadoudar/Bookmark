var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");






var list = []

if (localStorage.getItem("containerWebsiteName") !== null) {

  list = JSON.parse(localStorage.getItem("containerWebsiteName"))
  displayData()

}


function addSiteName() {
 if (validationEmail() == true) {
  var website = {
    name: siteName.value,
    url: siteUrl.value,
    
  };

list.push(website)

localStorage.setItem("containerWebsiteName", JSON.stringify(list))


displayData()
  console.log(list);
  clear()
 } else{
  showCustomAlert();
 }
} 





function clear() {
  siteName.value = null
  siteUrl.value = null


  siteName.classList.remove('is-valid')
  siteUrl.classList.remove('is-valid')
  
}


function displayData() {
  document.getElementById("data").innerHTML = "";

 var cartona = "";
  for (i = 0; i < list.length; i++) {
   cartona+=`
   
    <tr>
            <td class= "text-center p-3">${i + 1}</td>
            <td class= "text-center">${list[i].name}</td>
            <td class= "text-center">
                   <a href="${list[i].url}" id="link" > <i class="fa-solid fa-eye" ></i>visite</a>

            </td>
            <td class= "text-center">
            
                                 <button onclick="deleteItem(${i})" class="btn-info" id="btn-color"><i class="fa-solid fa-trash"></i>Delete</button>

            </td>
          </tr>
     
   
   `

   document.getElementById("data").innerHTML = cartona;
    
  }
}


function deleteItem(index) {
  list.splice(index , 1 )
console.log(list);

  localStorage.setItem("containerWebsiteName", JSON.stringify(list));


  displayData()
  
}


function validationName()
{
    var text = siteName.value
    var regex = /^[a-zA-Z][a-zA-Z0-9 _-]{2,19}$/

    if(regex.test(text))
    {
      siteName.classList.add("is-valid")
      siteName.classList.remove("is-invalid")
    }else{
      siteName.classList.add("is-invalid")
      siteName.classList.remove("is-valid")
    }

}
//^https?:\/\/(?:www\.)?[a-zA-Z0-9.-]+\.com$
//^(https?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.com(?:[\/\w .-]*)?$

function validationEmail()
{
    var url = siteUrl.value
    var pattern = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.com(?:[\/\w .-]*)?$/

    if(pattern.test(url))
    {
      siteUrl.classList.add("is-valid")
      siteUrl.classList.remove("is-invalid")
      return true
    }else{
      siteUrl.classList.add("is-invalid")
      siteUrl.classList.remove("is-valid")
      return false
    }

}




function showCustomAlert() {
  const alertBox = document.getElementById("customAlert");
  alertBox.style.display = "block";
}

document.getElementById("closeAlert").onclick = () => {
  const alertBox = document.getElementById("customAlert");
  alertBox.style.display = "none";
};
