function Loading(params) {
  this.params = params;
}
Loading.prototype.start = function () {
  let loading = document.getElementsByClassName("example-loading-container");
  if (loading.length) return;
  let loadingContainer = document.createElement("div");
  let div = document.createElement("div");
  loadingContainer.setAttribute("class", "example-loading-container");
  loadingContainer.setAttribute('style', 'width: 100%; height: 100%; position: fixed; top: 0; left: 0; background-color: rgba(0, 0, 0, .7);');
  div.setAttribute("class", "example-loading");
  div.setAttribute('style', 'position: fixed; top: 50%; left: 50%; margin: -20px 0 0 -20px; width: 40px; height: 40px; border: 2px solid; border-color: #1e81d2 #1e81d2 transparent; border-radius: 50%; box-sizing: border-box; animation: loading 1s linear infinite;');
  loadingContainer.appendChild(div);
  document.body.appendChild(loadingContainer);
}
Loading.prototype.end = function () {
  let loading = document.getElementsByClassName("example-loading-container");
  if (loading.length) {
    loading[0].remove()
  }
}
export default Loading;
