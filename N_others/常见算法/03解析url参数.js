const url_string = "https://www.example.com/page?name=mick&age=20";
function getQueryString(name,url_string) {
    const params = url_string.split('?')[1];
    if (!params) return null;
    const vars = params.split("&");
    for (let i = 0; i < vars.length; i++) {
      const pair = vars[i].split("=");
      const key = pair[0];
      const value = pair[1];
      if (name === key) {
        return value;
      }
    }
    return null;
  }
  