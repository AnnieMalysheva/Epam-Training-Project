/**
 * Created by Anna on 20.06.2017.
 */

Vue.component('calendar-grid', {
    template: '<div class="calendar-grid">' +

    "<div class = 'calendar-wrapper'>" +
    //шапка календаря
    "<div class = 'calendar-header-wrapper' ref=\"calendar_head\">" +
    //переключение месяцев
    "<div class = 'calendar-head'>" +
    "<a href='#' class='prev-month'></a>" +
    "<a href='#' class='next-month'></a>" +
    "<span class='month-name'>june 2017</span>" +
    "</div>" +
    //дни недели
    "<div class = 'calendar-header-row'>" +
    "<div class = 'calendar-cell cell-header'>Monday</div>" +
    "<div class = 'calendar-cell cell-header'>Tuesday</div>" +
    "<div class = 'calendar-cell cell-header'>Wednesday</div>" +
    "<div class = 'calendar-cell cell-header'>Thursday</div>" +
    "<div class = 'calendar-cell cell-header'>Friday</div>" +
    "<div class = 'calendar-cell cell-header'>Saturday</div>" +
    "<div class = 'calendar-cell cell-header'>Sunday</div>" +
    "</div>" +
    "</div>" +

    "<div class = 'calendar-body'>" +

    "</div>" +

    "</div>" +

    '</div>'

});



/*
 calendarHolder += "<div class = 'calendar-body'>";
 //генерим строки
 for (var row = 0; row < 6; row++) {
 calendarHolder += "<div class = 'calendar-row row-" + row + "'>";

 // генерим ячейки в строках
 for (var cell = 0; cell < 7; cell++) {
 calendarHolder += "<div class = 'calendar-cell cell-" + row + "-" + cell + "'>";
 calendarHolder += "row : " + row + "<br> cell : " + cell;
 calendarHolder += "</div>";
 }

 calendarHolder += "</div>";
 }

 calendarHolder += "</div>";

 calendarHolder += "</div>";

 calendarHolder += "</div>";

 var calendarFrame = document.getElementById("calendar");

 calendarFrame.innerHTML = calendarHolder;*/
