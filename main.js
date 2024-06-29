// 6. Function hendleGetFormData
function hendleGetFormData(){
    let name = document.getElementById("name").value;
    let city = document.getElementById("city").value;
    let email = document.getElementById("email").value;
    let zipcode = document.getElementById("zip-code").value;
    let status = document.getElementById("check").checked;
    return {name, city, email, zipcode, status};
}

// 7. Function isNumber
function isNumber(str){
    return !isNaN(str);
}

// 8. Function checkboxIsChecked
function checkboxIsChecked(){
    let checkboxStatus = document.getElementById("check");
    return checkboxStatus.checked;
}

// 9. Function validateFormData
function validateFormData(obj){
    return obj !== null && isNumber(obj.zipcode) && checkboxIsChecked();
}

// 10. Function Submit
function submit(event){
    let formData = hendleGetFormData();
    let isValid = validateFormData(formData)
    let warning = document.getElementById('warning');
    if(!isValid){
        warning.textContent = 'Periksa form anda sekali lagi'
    }
}
document.getElementById('submit-form').addEventListener("click", (event) => {
    event.preventDefault();
    submit()
});