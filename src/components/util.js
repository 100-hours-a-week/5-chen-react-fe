export function emptyOrUndefined(value) {
  return value === "" || value === undefined
}

export function formatDateTime(date) {
  let month = date.getMonth() + 1;
  const year = date.getFullYear();
  let day = date.getDate();
  const hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  if (month < 10) {
    month = `0${month}`
  }
  if (day < 10) {
    month = `0${day}`
  }
  if (min < 10) {
    min = `0${min}`
  }
  if (sec < 10) {
    sec = `0${sec}`
  }

  return `${year}-${month}-${day} ${hour}:${min}:${sec}`
}