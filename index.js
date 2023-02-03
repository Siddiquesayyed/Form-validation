let validemail = false;
let validmobile = false;
let validadhar = false;
let validfirstname = false;
let validaddress = false;
let validlastname = false;

$(".firstName").blur(function (e) {
    let reg = /^[A-Z]([a-zA-Z]){2,10}$/
    let str = $(".firstName").val();
    if (reg.test(str)) {
        $(".firstName").removeClass('is-invalid')
        $(".firstName").addClass('is-valid')
        validfirstname = true;
    } else {
        $(".firstName").removeClass('is-valid')
        $(".firstName").addClass('is-invalid')
    }
    e.preventDefault();
});
$(".secondName").blur(function (e) {
    let reg = /^[A-Z]([a-zA-Z]){2,10}$/
    let str = $(".secondName").val();
    if (reg.test(str)) {
        $(".secondName").removeClass('is-invalid')
        $(".secondName").addClass('is-valid')
        validlastname = true;
    } else {
        $(".secondName").removeClass('is-valid')
        $(".secondName").addClass('is-invalid')
    }
    e.preventDefault();
});
$(".Address").blur(function (e) {
    let reg = /([a-zA-Z\.\-\_0-9]){10,50}$/
    let str = $(".Address").val();
    if (reg.test(str)) {
        $(".Address").removeClass('is-invalid')
        $(".Address").addClass('is-valid')
        validaddress = true
    } else {
        $(".Address").removeClass('is-valid')
        $(".Address").addClass('is-invalid')
    }
    e.preventDefault();
});
$(".emailId").blur(function (e) {
    let reg = /^([\-\.\_a-zA-Z0-9]+)@([a-z]+)\.([A-Za-z]){2,7}$/
    let str = $(".emailId").val();
    if (reg.test(str)) {
        $(".emailId").removeClass('is-invalid')
        $(".emailId").addClass('is-valid')
        validemail = true;
    } else {
        $(".emailId").removeClass('is-valid')
        $(".emailId").addClass('is-invalid')
    }
    e.preventDefault();
});
$(".mobileNo").blur(function (e) {
    let reg = /^[7-9]([0-9]){9}$/
    let str = $(".mobileNo").val();
    if (reg.test(str)) {
        $(".mobileNo").removeClass('is-invalid')
        $(".mobileNo").addClass('is-valid')
        validmobile = true
    } else {
        $(".mobileNo").removeClass('is-valid')
        $(".mobileNo").addClass('is-invalid')
    }
    e.preventDefault();
});
$(".adharNo").blur(function (e) {
    let reg = /^[1-9]([0-9]){11}$/
    let str = $(".adharNo").val();
    if (reg.test(str)) {
        $(".adharNo").removeClass('is-invalid')
        $(".adharNo").addClass('is-valid')
        validadhar = true
    } else {
        $(".adharNo").removeClass('is-valid')
        $(".adharNo").addClass('is-invalid')
    }
    e.preventDefault();
});
$(".submit").click(function (e) {
    if (validfirstname && validlastname && validemail && validaddress && validmobile && validadhar) {
        funAlert('success', 'successsfully submitted', 'success')
        $('.submit').attr('disabled', true);
    } else {
        funAlert('danger', 'first complete the form', 'sorry !')
        $('.submit').attr('disabled', false);
    }
    e.preventDefault();
});
$(".agree").change(function (e) {
    if (validfirstname && validlastname && validemail && validaddress && validmobile && validadhar) {
        $(".agree").addClass('is-valid')
        $(".agree").removeClass('is-invalid')
    } else {
        $(".agree").addClass('is-invalid')
        $(".agree").removeClass('is-valid');
    }
    e.preventDefault();
});
function funAlert(type, reason, prob) {
    let Html = ` <div class="alert alert-${type}" role="alert"><strong>${prob}</strong> ${reason}</div>`
    $(".alert").html(Html)
}
$(".add").click(function () {
    location.reload()
});


