/*
*/
const b = JSON.parse($response.body);
if(b.data && b.data.article_list) {
  for(const article of b.data.article_list) {
    article.is_purchased = "1";
  }
}
const body = JSON.stringify(b);

$done({ body });
