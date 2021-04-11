let modiDate = new Date(document.lastModified);
let showAs = modiDate.getDate() + "/" + (modiDate.getMonth() + 1) + "/" + modiDate.getFullYear();
document.getElementById('lastModified').innerHTML = `Last Modified: ${showAs}`;
