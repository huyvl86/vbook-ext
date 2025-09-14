load('config.js');
function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    url = url.replace("www.nettruyenvv.com","nettruyenvia.com");
    url = url.replace("www.nettruyenmax.com","www.nettruyenmanga.com");
    url = url.replace("nettruyenvia.com","www.nettruyenmanga.com");
    
    let response = fetch(url);

    if (response.ok) {
        let doc = response.html();
        let el = doc.select("div.list-chapter li.row .chapter a");
        const data = [];
        for (let i = el.size() - 1; i >= 0; i--) {
            let e = el.get(i);
            data.push({
                name: e.text(),
                url: e.attr("href"),
                host: BASE_URL
            })
        }
        return Response.success(data);
    }

    return null;
}
