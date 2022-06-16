const form = document.getElementById("form")

  box.forEach(input => {
    input.addEventListener("focus", (e) => {
      const span = e.target.previousElementSibling;
      span.style.transform = "translateY(-5rem)";
      span.style.fontSize = "12px";
      console.log(span)
    })

  });

  box.forEach(input => {
    input.addEventListener("blur", (e) => {
      if(input.value.length > 0) return;
      const span = e.target.previousElementSibling;
      span.style = true;
      console.log(span)
    })

  });