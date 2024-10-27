var obj = {};
var arr = [];
var email = document.getElementsByName("email")[0];
var pass = document.getElementsByName("pass")[0];

function changeHandler(e, type) {
    if (type == "email") {
        obj["email"] = e.target.value
    }
    else {
        obj["password"] = e.target.value
    }
}

function clickHandler() {
    console.log(Object.values(obj))
    if (Object.keys(obj).length == 2) {
        arr.push(obj);
        sessionStorage.setItem("userData", JSON.stringify(arr))
    }
    email.value = "";
    pass.value = "";
    obj = {};

}