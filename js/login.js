const mobileInput = document.getElementById('mobileInput');
const sendOtpBtn = document.getElementById('sendOtpBtn');
const errorText = document.getElementById('errorText');

function validateMobile() {
  const mobile = mobileInput.value.trim();
  const isValid = /^[6-9]\d{9}$/.test(mobile);
  if (isValid) {
    sendOtpBtn.classList.add('enabled');
    sendOtpBtn.disabled = false;
    sendOtpBtn.style.cursor = 'pointer';
    errorText.style.display = 'none';
  } else {
    sendOtpBtn.classList.remove('enabled');
    sendOtpBtn.disabled = true;
    sendOtpBtn.style.cursor = 'not-allowed';
    errorText.style.display = mobile.length > 0 ? 'block' : 'none';
  }
}

mobileInput.addEventListener('input', validateMobile);
sendOtpBtn.addEventListener('click', () => {
  if (!sendOtpBtn.disabled) {
    alert("OTP sent to +91 " + mobileInput.value);
  }
});
