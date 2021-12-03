function chose_win(_event) {
    switch (_event) {
        case "1p":
            $(".window span").html("Жирновск")
            $(".window h2").html("Памятная стела Скважина №1")
            $(".window p").html("Памятная стела свидетельствует о начале " +
                "промышленной добычи нефти " +
                "в Волгоградской области и становлению Жирновска столицей " +
                "нефтяного края Нижнего Поволжья.")
            $(".window").show();
            break;
        case "2p":
            $(".window span").html("Линёво")
            $(".window h2").html("sight")
            $(".window p").html("description")
            $(".window").show();
            break;
    }
}

function cls_wn() {
    $(".window").hide();
};

$(document).ready(function () {
    $(".point").click(function () {
        chose_win(event.target["id"]);
    });
});