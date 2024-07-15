export function formatTimestamp(timestamp) {
   const date = new Date(timestamp);
   const month = ('0' + (date.getMonth() + 1)).slice(-2);
   const day = ('0' + date.getDate()).slice(-2);
   const year = date.getFullYear();
   const hours = ('0' + date.getHours()).slice(-2);
   const minutes = ('0' + date.getMinutes()).slice(-2);

   const formattedDate = `${month}/${day}/${year} at ${hours}:${minutes}`;
   return formattedDate;
}