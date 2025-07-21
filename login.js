document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const user = document.getElementById("usuario").value;
  const pass = document.getElementById("senha").value;

  if (user === "JMGELO" && pass === "JMGELO") {
    window.location.href = "painel.html";
  } else {
    alert("Usuário ou senha inválidos");
  }
});
