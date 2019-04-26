export default function makeRequest(url, onSuccess, onError) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", url, true);

  xhr.onreadystatechange = () => {
    if (xhr.readyState !== 4) {
      return;
    }

    if (xhr.status !== 200) {
      onError(xhr.status + ": " + xhr.statusText);
    } else {
      onSuccess(xhr.responseText);
    }
  };

  xhr.send();
}
