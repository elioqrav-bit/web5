// Task 1: the profile object with different data types
const userProfile = {
    name: "Rassul",          // string
    birthYear: 2008,         // number
    isDeveloper: true,       // boolean
    hobbies: ["Coding", "Travel", "Sport"]   // array
};

// Elements
const avatar = document.getElementById("avatar");
const profileName = document.getElementById("profileName");
const birthYearOut = document.getElementById("birthYearOut");
const devOut = document.getElementById("devOut");
const ageOut = document.getElementById("ageOut");
const monthsOut = document.getElementById("monthsOut");
const hobbyCountOut = document.getElementById("hobbyCountOut");

const profileForm = document.getElementById("profileForm");
const usernameInput = document.getElementById("username");
const birthYearInput = document.getElementById("birthYear");
const formMessage = document.getElementById("formMessage");

const hobbyList = document.getElementById("hobbyList");
const emptyNote = document.getElementById("emptyNote");
const hobbyInput = document.getElementById("hobbyInput");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");

// Task 2: arithmetic calculations
function calculateAge(birthYear) {
    return new Date().getFullYear() - birthYear;
}

function calculateMonths(birthYear) {
    // approximate: full years * 12 + months passed in the current year
    return calculateAge(birthYear) * 12 + new Date().getMonth();
}

// Show the profile data on the page and in the console
function renderProfile() {
    const age = calculateAge(userProfile.birthYear);
    const months = calculateMonths(userProfile.birthYear);

    avatar.textContent = userProfile.name.charAt(0).toUpperCase();
    profileName.textContent = userProfile.name;
    birthYearOut.textContent = userProfile.birthYear;
    devOut.textContent = userProfile.isDeveloper ? "Developer" : "Not a developer";
    ageOut.textContent = age;
    monthsOut.textContent = months;
    hobbyCountOut.textContent = userProfile.hobbies.length;

    console.log("Profile:", userProfile);
    console.log("Age:", age, "| Months old (approx.):", months);
    console.log("Hobbies count:", userProfile.hobbies.length);
}

// Task 5: build the <ul> from the hobbies array
function renderHobbies() {
    hobbyList.innerHTML = "";

    userProfile.hobbies.forEach(function (hobby) {
        const li = document.createElement("li");
        li.textContent = hobby;
        hobbyList.appendChild(li);
    });

    emptyNote.hidden = userProfile.hobbies.length > 0;
    hobbyCountOut.textContent = userProfile.hobbies.length;
}

function showMessage(text, isError) {
    formMessage.textContent = text;
    formMessage.classList.toggle("error", isError);
}

// Task 3 + 4: fill the form and update the object on submit
usernameInput.value = userProfile.name;
birthYearInput.value = userProfile.birthYear;

profileForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = usernameInput.value.trim();
    const year = Number(birthYearInput.value);
    const currentYear = new Date().getFullYear();

    if (name === "") {
        showMessage("Enter a username.", true);
        return;
    }

    if (!Number.isInteger(year) || year < 1900 || year > currentYear) {
        showMessage("Enter a birth year between 1900 and " + currentYear + ".", true);
        return;
    }

    userProfile.name = name;
    userProfile.birthYear = year;

    renderProfile();
    showMessage("Profile updated.", false);
});

// Task 5: Add Item
function addHobby() {
    const hobby = hobbyInput.value.trim();

    if (hobby === "") {
        hobbyInput.focus();
        return;
    }

    userProfile.hobbies.push(hobby);
    hobbyInput.value = "";
    renderHobbies();
    console.log("Added hobby:", hobby);
    hobbyInput.focus();
}

addBtn.addEventListener("click", addHobby);

hobbyInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addHobby();
    }
});

// Task 5: Remove Item (deletes the last one)
removeBtn.addEventListener("click", function () {
    if (userProfile.hobbies.length === 0) {
        return;
    }

    const removed = userProfile.hobbies.pop();
    console.log("Removed hobby:", removed);
    renderHobbies();
});

// First render
renderProfile();
renderHobbies();