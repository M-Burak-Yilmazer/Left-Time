function startCountdown(event) {
  if (
    document.querySelector("#event1Description").value &&
    document.querySelector("#event1Date").value
  ) {
    var eventDescription = document.getElementById(event + "Description").value;
    var eventDateInput = document.getElementById(event + "Date");
    var eventDate = new Date(eventDateInput.value).getTime();
    var countdownId = "countdown" + (event === "event1" ? "1" : "2");

    var countdownInterval = setInterval(function () {
      var currentDate = new Date().getTime();
      var remainingTime = eventDate - currentDate;

      var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
      var minutes = Math.floor(
        (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      var hours = Math.floor(
        (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

      document.querySelector(
        ".countdown-item"
      ).innerHTML = `<h1 style="color:red;">Time Left to: <span class="span" style="font-size:3rem;color:#fb8500"> ${eventDescription.toUpperCase()} </span></h1>
     <div id="countdownbox">
    <div class="box">${days}
    </div>
    <span>gün</span>
    <div class="box">${hours}
    </div>
    <span>saat</span>
    <div class="box">${minutes}
    </div>
    <span>dakika</span>
    <div class="box">${seconds}
    </div>
    <span>saniye</span>
</div>
<div><button class="reset"
>Reset</button></div>

    
    `;
      document.querySelector(".countdown-item").style =
        "display:flex;flex-direction:column;justify-content:space-around;align-items:center;";
      document.querySelector(".reset").addEventListener("click", () => {
        location.reload();
      });

      // eventDescription +
      // " için kalan süre: " +
      // days +
      // " gün " +
      // hours +
      // " saat " +
      // minutes +
      // " dakika " +
      // seconds +
      // " saniye ";

      if (remainingTime < 0) {
        clearInterval(countdownInterval);
        document.getElementById(countdownId).innerHTML =
          eventDescription + " başladı!";
      }
    }, 1000);
  } else {
    Swal.fire({
      title: "Invalid Value",
      text: "Please fill the all inputs ",
      icon: "error",
      theme: "dark",
    });
  }
}
