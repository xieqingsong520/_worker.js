addEventListener(
"fetch",event => {
let url=new URL(event.request.url);
url.hostname="qingsong-65jj0tsv.b4a.run";
let request=new Request(url,event.request);
event. respondWith(
 fetch(request)
  )
  	}
   )
