$(document).ready(function() {
  $("button#hello").click(function() {
    $("#user ul").prepend("<li>Hello!</li>");
    $("#webpage ul").prepend("<li>Why hello there!</li>");

    addClickListener("user");
    addClickListener("webpage");
  });

  $("button#goodbye").click(function() {
    $("#user ul").prepend("<li>Goodbye!</li>");
    $("#webpage ul").prepend("<li>Goodbye, dear user!</li>");

    addClickListener("user");
    addClickListener("webpage");
  });

  $("button#stop").click(function() {
    $("#user ul").prepend("<li>Stop copying me!</li>");
    $("#webpage ul").prepend("<li>Pardon me, I meant no offense.</li>");

    addClickListener("user");
    addClickListener("webpage");
  });

});




function addClickListener(id) {
  $("#" + id + " ul").children("li").first().click(function() {
    $(this).after('<div id="nested"><ul><li>Nested!</li></ul></div>');
    addClickListener("nested").children().last();
  });
};
