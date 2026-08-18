// ==========================================
// SECTION NAVIGATION
// ==========================================

function showSection(sectionId, button) {

    const sections = document.querySelectorAll(".section");

    sections.forEach(section => {
        section.classList.remove("active-section");
    });

    document.getElementById(sectionId)
        .classList.add("active-section");


    const buttons = document.querySelectorAll(".nav-item");

    buttons.forEach(btn => {
        btn.classList.remove("active");
    });

    if (button) {
        button.classList.add("active");
    }


    const titles = {
        dashboard: "Dashboard",
        properties: "My Properties",
        bookings: "Booking Requests"
    };

    document.getElementById("pageTitle").innerText =
        titles[sectionId] || "Dashboard";
}


function showSectionById(sectionId) {

    const buttons = document.querySelectorAll(".nav-item");

    buttons.forEach(btn => {
        btn.classList.remove("active");
    });

    const matchingButton =
        Array.from(buttons).find(button =>
            button.innerText.toLowerCase().includes(
                sectionId === "properties"
                    ? "my properties"
                    : sectionId
            )
        );

    showSection(sectionId, matchingButton);
}


// ==========================================
// PROPERTY MODAL
// ==========================================

function openPropertyModal() {

    document
        .getElementById("propertyModal")
        .classList.add("show");
}


function closePropertyModal() {

    document
        .getElementById("propertyModal")
        .classList.remove("show");
}


// ==========================================
// ADD PROPERTY
// ==========================================

function addProperty(event) {

    event.preventDefault();

    const title =
        document.getElementById("propertyTitle").value;

    alert(
        "Property '" +
        title +
        "' added successfully!"
    );

    closePropertyModal();

    event.target.reset();
}


// ==========================================
// EDIT PROPERTY
// ==========================================

function editProperty(propertyName) {

    alert(
        "Edit Property:\n\n" +
        propertyName +
        "\n\nThe edit form will be connected to Oracle later."
    );
}


// ==========================================
// PROPERTY SEARCH
// ==========================================

function searchProperties() {

    const search =
        document
            .getElementById("propertySearch")
            .value
            .toLowerCase();

    const cards =
        document.querySelectorAll(".property-card");

    cards.forEach(card => {

        const text =
            card.innerText.toLowerCase();

        if (text.includes(search)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });
}


// ==========================================
// PROPERTY FILTER
// ==========================================

function filterProperties() {

    const filter =
        document.getElementById("propertyFilter").value;

    const cards =
        document.querySelectorAll(".property-card");

    cards.forEach(card => {

        const status =
            card.getAttribute("data-status");

        if (filter === "all" || status === filter) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });
}


// ==========================================
// BOOKING ACCEPT
// ==========================================

function acceptBooking(bookingId) {

    const booking =
        document.getElementById(bookingId);

    booking.style.opacity = "0.5";

    alert(
        "Booking request accepted successfully!"
    );

    setTimeout(() => {

        booking.remove();

    }, 500);
}


// ==========================================
// BOOKING REJECT
// ==========================================

function rejectBooking(bookingId) {

    const confirmReject =
        confirm(
            "Are you sure you want to reject this booking request?"
        );

    if (!confirmReject) {
        return;
    }

    const booking =
        document.getElementById(bookingId);

    booking.style.opacity = "0.5";

    setTimeout(() => {

        booking.remove();

    }, 500);

    alert(
        "Booking request rejected."
    );
}


// ==========================================
// CLOSE MODAL WHEN CLICKING OUTSIDE
// ==========================================

document
    .getElementById("propertyModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closePropertyModal();

        }

    });