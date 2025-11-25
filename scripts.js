// Scroll event to add/remove 'visible' class to tags
$(document).on("scroll", function () {
var pageTop = $(document).scrollTop();
var pageBottom = pageTop + $(window).height();
var tags = $(".tag");

// Loop through tags to check visibility
for (var i = 0; i < tags.length; i++) {
var tag = tags[i];

if ($(tag).position().top < pageBottom) {
$(tag).addClass("visible");
} else {
$(tag).removeClass("visible");
}
}
});

// Disable right-click context menu
document.addEventListener("contextmenu", function (e) {
e.preventDefault();
});

// Function to check for Ctrl + Shift + Key press
function ctrlShiftKey(e, keyCode) {
return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

// Prevent F12, Ctrl + Shift + I, J, C, and U
document.onkeydown = function (e) {
if (
e.keyCode === 123 || // F12
ctrlShiftKey(e, "I") || // Ctrl + Shift + I
ctrlShiftKey(e, "J") || // Ctrl + Shift + J
ctrlShiftKey(e, "C") || // Ctrl + Shift + C
(e.ctrlKey && e.keyCode === "U".charCodeAt(0)) // Ctrl + U
) {
return false; // Prevent action
}
};
