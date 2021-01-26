function slugify(string) {
    return string
      .toString()
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "");
}
if (document.getElementById("btnSignUp") != null) {
    document.getElementById("btnSignUp").addEventListener('click', e => {
        const name = document.getElementById("name").value;
        const users = encodeURIComponent(name);
        window.location.href = '?name=' + users;
    })
}
let url = new URL(location.href);
let searchParams = new URLSearchParams(url.search);
const fullname = searchParams.get('name').replace(/[-]/g,' ',)
console.log(fullname);
document.getElementById('crush').innerHTML = fullname;