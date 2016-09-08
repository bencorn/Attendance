var response = {};

chrome.storage.sync.get(null, function (obj) {
    response = obj;

    // Begin Monday 

    var dp = $("tr:contains('Monday')")[0].cells[2].children[0];
    var select = $(dp).find("select");
    $(select).val(response.Monday["Begin1"]);

    dp = $("tr:contains('Monday')")[0].cells[3].children[0];
    select = $(dp).find("select");
    $(select).val(response.Monday["End1"]);

    dp = $("tr:contains('Monday')")[0].cells[4].children[0];
    select = $(dp).find("select");
    $(select).val(response.Monday["Begin2"]);

    dp = $("tr:contains('Monday')")[0].cells[5].children[0];
    select = $(dp).find("select");
    $(select).val(response.Monday["End2"]);

    dp = $("tr:contains('Monday')")[0].cells[6].children[0];
    select = $(dp).find("select");
    $(select).val(response.Monday["Begin3"]);

    dp = $("tr:contains('Monday')")[0].cells[7].children[0];
    select = $(dp).find("select");
    $(select).val(response.Monday["End3"]);

    // End Monday

    // Begin Tuesday

    dp = $("tr:contains('Tuesday')")[0].cells[2].children[0];
    select = $(dp).find("select");
    $(select).val(response.Tuesday["Begin1"]);

    dp = $("tr:contains('Tuesday')")[0].cells[3].children[0];
    select = $(dp).find("select");
    $(select).val(response.Tuesday["End1"]);

    dp = $("tr:contains('Tuesday')")[0].cells[4].children[0];
    select = $(dp).find("select");
    $(select).val(response.Tuesday["Begin2"]);

    dp = $("tr:contains('Tuesday')")[0].cells[5].children[0];
    select = $(dp).find("select");
    $(select).val(response.Tuesday["End2"]);

    dp = $("tr:contains('Tuesday')")[0].cells[6].children[0];
    select = $(dp).find("select");
    $(select).val(response.Tuesday["Begin3"]);

    dp = $("tr:contains('Tuesday')")[0].cells[7].children[0];
    select = $(dp).find("select");
    $(select).val(response.Tuesday["End3"]);

    // End Tuesday

    // Begin Wednesday

    dp = $("tr:contains('Wednesday')")[0].cells[2].children[0];
    select = $(dp).find("select");
    $(select).val(response.Wednesday["Begin1"]);

    dp = $("tr:contains('Wednesday')")[0].cells[3].children[0];
    select = $(dp).find("select");
    $(select).val(response.Wednesday["End1"]);

    dp = $("tr:contains('Wednesday')")[0].cells[4].children[0];
    select = $(dp).find("select");
    $(select).val(response.Wednesday["Begin2"]);

    dp = $("tr:contains('Wednesday')")[0].cells[5].children[0];
    select = $(dp).find("select");
    $(select).val(response.Wednesday["End2"]);

    dp = $("tr:contains('Wednesday')")[0].cells[6].children[0];
    select = $(dp).find("select");
    $(select).val(response.Wednesday["Begin3"]);

    dp = $("tr:contains('Wednesday')")[0].cells[7].children[0];
    select = $(dp).find("select");
    $(select).val(response.Wednesday["End3"]);

    // End Wednesday

    // Begin Thursday

    dp = $("tr:contains('Thursday')")[0].cells[2].children[0];
    select = $(dp).find("select");
    $(select).val(response.Thursday["Begin1"]);

    dp = $("tr:contains('Thursday')")[0].cells[3].children[0];
    select = $(dp).find("select");
    $(select).val(response.Thursday["End1"]);

    dp = $("tr:contains('Thursday')")[0].cells[4].children[0];
    select = $(dp).find("select");
    $(select).val(response.Thursday["Begin2"]);

    dp = $("tr:contains('Thursday')")[0].cells[5].children[0];
    select = $(dp).find("select");
    $(select).val(response.Thursday["End2"]);

    dp = $("tr:contains('Thursday')")[0].cells[6].children[0];
    select = $(dp).find("select");
    $(select).val(response.Thursday["Begin3"]);

    dp = $("tr:contains('Thursday')")[0].cells[7].children[0];
    select = $(dp).find("select");
    $(select).val(response.Thursday["End3"]);

    // End Thursday

    // Begin Friday

    dp = $("tr:contains('Friday')")[0].cells[2].children[0];
    select = $(dp).find("select");
    $(select).val(response.Friday["Begin1"]);

    dp = $("tr:contains('Friday')")[0].cells[3].children[0];
    select = $(dp).find("select");
    $(select).val(response.Friday["End1"]);

    dp = $("tr:contains('Friday')")[0].cells[4].children[0];
    select = $(dp).find("select");
    $(select).val(response.Friday["Begin2"]);

    dp = $("tr:contains('Friday')")[0].cells[5].children[0];
    select = $(dp).find("select");
    $(select).val(response.Friday["End2"]);

    dp = $("tr:contains('Friday')")[0].cells[6].children[0];
    select = $(dp).find("select");
    $(select).val(response.Friday["Begin3"]);

    dp = $("tr:contains('Friday')")[0].cells[7].children[0];
    select = $(dp).find("select");
    $(select).val(response.Friday["End3"]);

    // End Friday

});

