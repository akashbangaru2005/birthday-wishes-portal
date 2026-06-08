// =========================
// BIRTHDAY DATABASE
// =========================

const birthdays = [

    {
        name: "Akash",
        dob: "2005-10-12",

        profilePhoto: "images/akash.jpg",

        gallery: [
            "images/akash1.jpg",
            "images/akash2.jpg",
            "images/akash3.jpg"
        ],

        message:
            "🎉 Happy Birthday Akash! May your life be filled with happiness, success and wonderful memories.",

        phone: "91 7095197758",
        email: "akashbangaru227@gmail.com"
    },

    {
        name: "indhu",
        dob: "2007-09-02",

        profilePhoto: "images/indhu.jpg",

        gallery: [
            "images/indhu1.jpg",
            "images/indhu2.jpg"
        ],

        message:
            "🎂 Happy Birthday Indhu! Wishing you health, happiness and success.",

        phone: "91 7095197758",
        email: "akashbangaru227@gmail.com"
    },

    {
        name: "sunny",
        dob: "2007-04-11",

        profilePhoto: "images/sunny.jpg",

        gallery: [
            "images/sunny1.jpg",
            "images/sunny2.jpg"
        ],

        message:
            "🎂 Happy Birthday Sunny! Wishing you health, happiness and success.",

        phone: "91 7095197758",
        email: "akashbangaru227@gmail.com"
    },
     {
        name: "deva",
        dob: "2006-02-28",

        profilePhoto: "images/deva.jpg",

        gallery: [
            "images/deva1.jpg",
            "images/deva2.jpg"
        ],

        message:
            "🎂 Happy Birthday Deva! Wishing you health, happiness and success.",

        phone: "91 7095197758",
        email: "akashbangaru227@gmail.com"
    },
     {
        name: "Trisha",
        dob: "2008-05-27",

        profilePhoto: "images/trisha.jpg",

        gallery: [
            "images/trisha1.jpg",
            "images/trisha2.jpg"
        ],

        message:
            "🎂 Happy Birthday Trisha! Wishing you health, happiness and success.",

        phone: "91 7095197758",
        email: "akashbangaru227@gmail.com"
    },
     {
        name: "ashok",
        dob: "1994-01-31",

        profilePhoto: "images/ashok.jpg",

        gallery: [
            "images/ashok1.jpg",
            "images/ashok2.jpg"
        ],

        message:
            "🎂 Happy Birthday Ashok! Wishing you health, happiness and success.",

        phone: "91 7095197758",
        email: "akashbangaru227@gmail.com"
    },
     {
        name: "varsha var var",
        dob: "2006-03-04",

        profilePhoto: "images/varsha.jpg",

        gallery: [
            "images/varsha1.jpg",
            "images/varsha2.jpg"
        ],

        message:
            "🎂 Happy Birthday Varsha! Wishing you health, happiness and success.",

        phone: "91 7095197758",
        email: "akashbangaru227@gmail.com"
    },
    {
        name: "durga (dp)",
        dob: "2006-12-03",

        profilePhoto: "images/durga.jpg",

        gallery: [
            "images/durga1.jpg",
            "images/durga2.jpg"
        ],

        message:
            "🎂 Happy Birthday Durga! Wishing you health, happiness and success.",

        phone: "91 7095197758",
        email: "akashbangaru227@gmail.com"
    },
     {
        name: "arun",
        dob: "2007-04-07",

        profilePhoto: "images/arun.jpg",

        gallery: [
            "images/arun1.jpg",
            "images/arun2.jpg"
        ],

        message:
            "🎂 Happy Birthday Arun! Wishing you health, happiness and success.",

        phone: "91 7095197758",
        email: "akashbangaru227@gmail.com"
    },
         {
        name: "bamardhi",
        dob: "2006-01-03",

        profilePhoto: "images/venkat.jpg",

        gallery: [
            "images/venkat1.jpg",
            "images/venkat2.jpg"
        ],

        message:
            "🎂 Happy Birthday Bamardhi! Wishing you health, happiness and success.",

        phone: "91 7095197758",
        email: "akashbangaru227@gmail.com"
    },
         {
        name: "ghouse",
        dob: "2006-02-04",

        profilePhoto: "images/ghouse.jpg",

        gallery: [
            "images/ghouse1.jpg",
            "images/ghouse2.jpg"
        ],

        message:
            "🎂 Happy Birthday Ghouse! Wishing you health, happiness and success.",

        phone: "91 7095197758",
        email: "akashbangaru227@gmail.com"
    },
         {
        name: "manu",
        dob: "2006-10-02",

        profilePhoto: "images/manu.jpg",

        gallery: [
            "images/manu1.jpg",
            "images/manu2.jpg"
        ],

        message:
            "🎂 Happy Birthday Manu! Wishing you health, happiness and success.",

        phone: "91 7095197758",
        email: "akashbangaru227@gmail.com"
    }



];

// =========================
// SEARCH FUNCTION
// =========================

function searchBirthday() {

    const selectedDate =
        document.getElementById("dob").value;

    const result =
        document.getElementById("result");

    if (!selectedDate) {

        result.innerHTML = `
            <div class="error-message">
                Please select a date first.
            </div>
        `;

        return;
    }

    const person =
        birthdays.find(
            birthday => birthday.dob === selectedDate
        );

    if (!person) {

        result.innerHTML = `
            <div class="error-message">
                ❌ No Birthday Record Found
            </div>
        `;

        return;
    }

    const age =
        calculateAge(person.dob);

    let galleryHTML = "";

    person.gallery.forEach(photo => {

        galleryHTML += `
            <img src="${photo}"
                 alt="${person.name}">
        `;

    });

    result.innerHTML = `

        <div class="birthday-card">

            <h2>
                🎉 Happy Birthday ${person.name}
            </h2>

            <img
                src="${person.profilePhoto}"
                alt="${person.name}"
                class="profile-image">

            <p>
                <strong>Name:</strong>
                ${person.name}
            </p>

            <p>
                <strong>Date of Birth:</strong>
                ${formatDate(person.dob)}
            </p>

            <p>
                <strong>Age:</strong>
                ${age} Years
            </p>

            <p>
                ${person.message}
            </p>

            <div class="gallery">

                ${galleryHTML}

            </div>

            <div class="contact-buttons">

                <a
                    href="https://wa.me/${person.phone}"
                    target="_blank"
                    class="whatsapp-btn">

                    📱 WhatsApp

                </a>

                <a
                    href="mailto:${person.email}"
                    class="email-btn">

                    📧 Email

                </a>

            </div>

        </div>

    `;

    launchConfetti();
}

// =========================
// AGE CALCULATOR
// =========================

function calculateAge(dob) {

    const birthDate =
        new Date(dob);

    const today =
        new Date();

    let age =
        today.getFullYear() -
        birthDate.getFullYear();

    const monthDifference =
        today.getMonth() -
        birthDate.getMonth();

    if (
        monthDifference < 0 ||
        (
            monthDifference === 0 &&
            today.getDate() < birthDate.getDate()
        )
    ) {
        age--;
    }

    return age;
}

// =========================
// DATE FORMATTER
// =========================

function formatDate(dateString) {

    const options = {
        day: "numeric",
        month: "long",
        year: "numeric"
    };

    return new Date(dateString)
        .toLocaleDateString(
            "en-IN",
            options
        );
}

// =========================
// CONFETTI EFFECT
// =========================

function launchConfetti() {

    if (typeof confetti === "undefined") {
        return;
    }

    const duration = 3000;

    const animationEnd =
        Date.now() + duration;

    const defaults = {

        startVelocity: 30,
        spread: 360,
        ticks: 60,
        zIndex: 1000

    };

    function randomInRange(min, max) {

        return Math.random() *
            (max - min) + min;

    }

    const interval = setInterval(function () {

        const timeLeft =
            animationEnd - Date.now();

        if (timeLeft <= 0) {

            clearInterval(interval);

            return;
        }

        const particleCount =
            50 * (timeLeft / duration);

        confetti({

            ...defaults,

            particleCount,

            origin: {

                x: randomInRange(0.1, 0.3),
                y: Math.random() - 0.2

            }

        });

        confetti({

            ...defaults,

            particleCount,

            origin: {

                x: randomInRange(0.7, 0.9),
                y: Math.random() - 0.2

            }

        });

    }, 250);
}

// =========================
// ENTER KEY SUPPORT
// =========================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const dateInput =
            document.getElementById("dob");

        dateInput.addEventListener(
            "keypress",
            function (event) {

                if (event.key === "Enter") {

                    searchBirthday();

                }

            }
        );

    }
);