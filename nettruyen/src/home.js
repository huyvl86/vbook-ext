load('config.js');
function execute() {
    return Response.success([
        {title: "Mới cập nhật", input: BASE_URL + "/tim-kiem-nang-cao&sort=0", script: "gen.js"},
        {title: "Truyện mới", input: BASE_URL + "/tim-kiem-nang-cao&sort=1", script: "gen.js"},
        {title: "Top all", input: BASE_URL + "/tim-kiem-nang-cao&sort=2", script: "gen.js"},
        {title: "Top tháng", input: BASE_URL + "/tim-kiem-nang-cao&sort=3", script: "gen.js"},
        {title: "Top tuần", input: BASE_URL + "/tim-kiem-nang-cao&sort=4", script: "gen.js"},
        {title: "Top ngày", input: BASE_URL + "/tim-kiem-nang-cao&sort=5", script: "gen.js"},
        {title: "Theo dõi", input: BASE_URL + "/tim-kiem-nang-cao&sort=6", script: "gen.js"},
        {title: "Bình luận", input: BASE_URL + "/tim-kiem-nang-cao&sort=7", script: "gen.js"}
    ]);
}
