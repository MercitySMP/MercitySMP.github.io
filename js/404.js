const homeBtn = document.querySelector(".btn-home");
homeBtn.addEventListener("click", () => {
  redirect("/");
});

const discordBtn = document.querySelector(".btn-discord");
discordBtn.addEventListener("click", () => {
  redirect("https://discord.gg/jeeDT9PjHD");
});