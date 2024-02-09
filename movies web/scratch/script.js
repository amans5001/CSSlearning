const dobInput = document.getElementById('dob');
const dob = new Date(dobInput.value);

// Calculate the remaining days until the next birthday
const today = new Date();
const nextBirthday = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
if (nextBirthday < today) {
    nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
}
const remainingDays = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));

// Display the countdown
const countdownElement = document.getElementById('countdown');
countdownElement.textContent = `Days until your next birthday: ${remainingDays}`;