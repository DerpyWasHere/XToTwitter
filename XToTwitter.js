addEventListener("copy", (event => {
    var xUrl = document.getSelection().toString();
    xUrl = xUrl.replace("x", "twitter");
    event.clipboardData.setData("text/plain", xUrl);
    event.preventDefault();
}))
