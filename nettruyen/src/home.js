load('config.js');
function execute() {
    return Response.success([
        {title: "Mới cập nhật", input: BASE_URL + "tim-truyen?status=", script: "gen.js"},
        {title: "Truyện mới", input: BASE_URL + "tim-truyen?status=&sort=15", script: "gen.js"},
        {title: "Top all", input: BASE_URL + "/tim-truyen?status=&sort=10", script: "gen.js"},
        {title: "Top tháng", input: BASE_URL + "/tim-truyen?status=&sort=11", script: "gen.js"},
        {title: "Top tuần", input: BASE_URL + "/tim-truyen?status=&sort=12", script: "gen.js"},
        {title: "Top ngày", input: BASE_URL + "/tim-truyen?status=&sort=13", script: "gen.js"},
        {title: "Theo dõi", input: BASE_URL + "/tim-truyen?status=&sort=20", script: "gen.js"},
        {title: "Bình luận", input: BASE_URL + "/tim-truyen?status=&sort=25", script: "gen.js"}
    ]);
}
