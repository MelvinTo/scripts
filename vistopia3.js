/*
*/
const b = JSON.parse($response.body);
if(b.data && b.data.content) {
  b.data.content.is_purchased = "1";
}
const body = JSON.stringify(b);

$done({ body });
