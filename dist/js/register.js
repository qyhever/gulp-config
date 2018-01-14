"use strict";var registerForm=document.querySelector(".register-form"),accountErrorTip=document.querySelector("#account_error"),passwordErrorTip=document.querySelector("#password_error"),affirmPasswordErrorTip=document.querySelector("#affirm_password_error"),phoneNoErrorTip=document.querySelector("#phone_number_error"),emailErrorTip=document.querySelector("#email_error"),validateCodeErrorTip=document.querySelector("#validate_code_error");function blurUser(){var r=document.querySelector("#account").value;return""==r||null==r||0==r.length?(document.querySelector("#form_item_account").classList.add("border-err"),accountErrorTip.innerHTML="输入不能为空",!1):r.length<4||r.length>20?(document.querySelector("#form_item_account").classList.add("border-err"),accountErrorTip.innerHTML="用户名长度为4 - 20个字符",!1):/^[a-zA-Z0-9_-]{4,16}$/.test(r)?(document.querySelector("#form_item_account").classList.remove("border-err"),accountErrorTip.innerHTML="",!0):(document.querySelector("#form_item_account").classList.add("border-err"),accountErrorTip.innerHTML="用户名为字母和数字组合",!1)}function blurPwd(){var r=document.querySelector("#password").value;return""==r||null==r||0==r.length?(document.querySelector("#form_item_password").classList.add("border-err"),passwordErrorTip.innerHTML="输入不能为空",!1):sameLetter(r)===r.length?(document.querySelector("#form_item_password").classList.add("border-err"),passwordErrorTip.innerHTML="密码为相同字符,请重新输入",!1):r.length<6||r.length>20?(document.querySelector("#form_item_password").classList.add("border-err"),passwordErrorTip.innerHTML="密码长度为6 - 20",!1):/[^\d]/g.test(r)?/[^a-zA-Z]/g.test(r)?/^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&*]+$)(?![\d!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/.test(r)?(document.querySelector("#form_item_password").classList.add("border-err"),passwordErrorTip.innerHTML="请输入符合要求的密码",!1):(document.querySelector("#form_item_password").classList.remove("border-err"),passwordErrorTip.innerHTML="",!0):(document.querySelector("#form_item_password").classList.add("border-err"),passwordErrorTip.innerHTML="密码不能为纯字母",!1):(document.querySelector("#form_item_password").classList.add("border-err"),passwordErrorTip.innerHTML="密码不能为纯数字",!1)}function blurAffirmPwd(){var r=document.querySelector("#password").value,e=document.querySelector("#affirm_password").value;return""==e||null==e?(document.querySelector("#form_item_affirm_password").classList.add("border-err"),affirmPasswordErrorTip.innerHTML="输入不能为空",!1):r!==e?(document.querySelector("#form_item_affirm_password").classList.add("border-err"),affirmPasswordErrorTip.innerHTML="密码不一致，请重新输入",!1):(document.querySelector("#form_item_affirm_password").classList.remove("border-err"),affirmPasswordErrorTip.innerHTML="",!0)}function blurPhone(){var r=document.querySelector("#phone_number").value;return""==r||null==r?(document.querySelector("#form_item_phone").classList.add("border-err"),phoneNoErrorTip.innerHTML="输入不能为空",!1):/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|17[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(r)?(document.querySelector("#form_item_phone").classList.remove("border-err"),phoneNoErrorTip.innerHTML="",!0):(document.querySelector("#form_item_phone").classList.add("border-err"),phoneNoErrorTip.innerHTML="请输入符合要求的电话号码",!1)}function blurEmail(){var r=document.querySelector("#email").value;return""==r||null==r?(document.querySelector("#form_item_email").classList.add("border-err"),emailErrorTip.innerHTML="输入不能为空",!1):/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(r)?(document.querySelector("#form_item_email").classList.remove("border-err"),emailErrorTip.innerHTML="",!0):(document.querySelector("#form_item_email").classList.add("border-err"),emailErrorTip.innerHTML="输入错误,请输入正确格式的邮箱",!1)}function blurValidateCode(){var r=document.querySelector("#validate_code").value;return""==r||null==r?(document.querySelector("#form_item_validate_code").classList.add("border-err"),validateCodeErrorTip.innerHTML="输入不能为空",!1):r!=document.querySelector(".validate-code").innerHTML?(document.querySelector("#form_item_validate_code").classList.add("border-err"),validateCodeErrorTip.innerHTML="验证码不正确",!1):(document.querySelector("#form_item_validate_code").classList.remove("border-err"),validateCodeErrorTip.innerHTML="",!0)}function checkResult(){return!!(blurUser()&&blurPwd()&&blurAffirmPwd()&&blurPhone()&&blurEmail()&&blurValidateCode())}function sameLetter(r){for(var e=0,o=r[0],t=1;t<r.length;t++)r.charAt(t)===o&&e++;return e}function getValidateCode(){for(var r="",e=0;e<6;e++)r+=parseInt(10*Math.random()).toString();return r}document.querySelector("#account").addEventListener("blur",blurUser),document.querySelector("#password").addEventListener("blur",blurPwd),document.querySelector("#affirm_password").addEventListener("blur",blurAffirmPwd),document.querySelector("#phone_number").addEventListener("blur",blurPhone),document.querySelector("#email").addEventListener("blur",blurEmail),document.querySelector("#validate_code").addEventListener("blur",blurValidateCode),document.querySelector(".validate-code").addEventListener("click",function(){this.innerHTML=getValidateCode()}),registerForm.addEventListener("submit",function(r){checkResult()&&console.log("发送请求"),r.preventDefault()});