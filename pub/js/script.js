/**
 * Created by Anna on 05.06.2017.
 */

var calendarHolder = "<div class='calendar-grid'>";
calendarHolder += "<div class = 'calendar-wrapper'>";
calendarHolder += "<div class = 'calendar-head'>";
calendarHolder += "<a href='#' class='prev-month'></a>";
calendarHolder += "<a href='#' class='next-month'></a>";
calendarHolder +="<span class='month-name'>june 2017</span>";
calendarHolder += "</div>";
calendarHolder += "<div class = 'calendar-header-row'>";
calendarHolder += "<div class = 'calendar-cell cell-header'>Monday</div>";
calendarHolder += "<div class = 'calendar-cell cell-header'>Tuesday</div>";
calendarHolder += "<div class = 'calendar-cell cell-header'>Wednesday</div>";
calendarHolder += "<div class = 'calendar-cell cell-header'>Thursday</div>";
calendarHolder += "<div class = 'calendar-cell cell-header'>Friday</div>";
calendarHolder += "<div class = 'calendar-cell cell-header'>Saturday</div>";
calendarHolder += "<div class = 'calendar-cell cell-header'>Sunday</div>";
calendarHolder += "</div>";

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

calendarFrame.innerHTML = calendarHolder;