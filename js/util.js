console.info("Utility file run")

/**
 * @fires window.location.href
 */

function refreshPage() {
  redirect(window.location.href);
}

/**
 * @param {URL} redirectLocation
 * @returns undefined
 */

function redirect(redirectLocation) {
  window.location.href = redirectLocation;
}

/**
 * @param {URL} redirectLocation
 * @returns undefined
 */

function openNewPage(redirectLocation) {
  parent.open(redirectLocation);
}

/**
 * @param {string} message
 * @param {string} type
 */

function notify(message, type) {

  let createdDiv = document.createElement("div");
  let id = Math.random().toString(36).substring(2, 10);

  createdDiv.setAttribute("id", id);
  createdDiv.classList.add("notification", type);

  createdDiv.innerHTML = `
<div class="cross">
  <span class="cross__spans span1"></span>
  <span class="cross__spans span2""></span>
</div>
${message}
<span class="notif notif-timer"></span>`;
  document.getElementById("notification-area").prepend(createdDiv);

  setTimeout(() => {
    let notifications = document
      .getElementById("notification-area")
      .getElementsByClassName("notification");
    for (let i = 0; i < notifications.length; i++) {
      if (notifications[i].getAttribute("id") == id) {
        notifications[i].remove();
        break;
      }
    }
  }, 5000);
  const notifCrosses = document.querySelectorAll(".notification .cross");
  notifCrosses.forEach((e) => {
    e.addEventListener("click", () => {
      e.parentElement.remove();
    });
  });
}

/**
 * @param {*} text
 */

function copyText(text) {
  navigator.clipboard.writeText(text);
}
