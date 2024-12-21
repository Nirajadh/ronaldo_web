const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    const name = form.querySelector('input[name="name"]');
    const email = form.querySelector('input[name="email"]');
    const message = form.querySelector('textarea[name="message"]');

  
    if (name.value.trim() === "" ) {
      e.preventDefault(); // Prevent form submission if any field is empty
      alert("Please fill out all fields.");
  }
  else{
    alert("Submitted");
  }
});