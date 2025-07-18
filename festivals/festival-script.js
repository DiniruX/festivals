const params = new URLSearchParams(window.location.search);
const slug = params.get("id");

if (slug && festivals[slug]) {
  const fest = festivals[slug];
  document.getElementById("festival-title").textContent = fest.name;
  document.getElementById("festival-name").textContent = fest.name;
  document.getElementById("festival-subtitle").textContent = fest.subtitle;
  document.getElementById("festival-type").textContent = fest.type;
  document.getElementById("festival-date").textContent = fest.date;
  document.getElementById("festival-img").src = fest.image;
  document.getElementById("festival-img").alt = fest.name;
  document.getElementById("festival-desc").textContent = fest.desc;
} else {
  document.body.innerHTML = `<h2 style="text-align:center">Festival not found.</h2>`;
}