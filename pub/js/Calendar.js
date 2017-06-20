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

    "<div class = 'calendar-body'  ref=\"calendar_body\" >" +

    "<div v-for=\"row in calendarDays\" class = 'calendar-row'>" +
    "<div v-for=\"cell in row\" class = 'calendar-cell'>" +
    "<span class='day-wrapper' :id='cell.cellID' v-html=\"cell.text\"></span>" +
    "</div>" +
    "</div>" +

    "</div>" +

    "</div>" +

    '</div>',
    created: function () {
        var me = this;

        me.createDefaultMonthContext();

        window.addEventListener('resize', me.onWindowResize);

        setTimeout(function () { //таймаут для рендеринга шаблона
            me.onWindowResize();
        }, 100);


        me.loadMonthDocuments();

    },

    data: function () {
        if (!this.monthContext) {
            this.createDefaultMonthContext();
        }
        return {
            calendarDays: this.getCGrid(),
            docs: {}
        }
    },

    beforeDestroy: function () {
        window.removeEventListener('resize', this.getWindowSize);
    },

    methods: {
        createDefaultMonthContext: function () {
            var me = this;
            var date = new Date();
            me.monthContext = {
                year: date.getFullYear(),
                month: date.getMonth()
            };
        },

        onWindowResize: function (event) {

            var newHeight = this.$el.clientHeight - this.$refs.calendar_head.clientHeight - 30; //$el - элемент DOM для экземпляра компонента (calendar_grid)

            this.$refs.calendar_body.setAttribute("style", "height:" + newHeight + "px"); //по ссылке из ref берем calendar_body и передаем ему высоту

        },

        getCGrid: function () {
            var me = this;
            var date = new Date();//текущая дата
            var monthContext = me.monthContext;

            //первый и последний день месяца
            var firstDay = new Date(monthContext.year, monthContext.month, 1);
            var lastDay = new Date(monthContext.year, monthContext.month + 1, 0); //последний день предыдущего месяца

            var rows = [], //массив значений для ячеек календаря
                count = 1, //счетчик ячеек для текущего месяца
                delay = firstDay.getDay(), //отступ от начала недели для текущего месяца. номер дня недели для первого числа месяца
                cellID = 1;//сквозная нумерация ячеек


            var createCellText = function (nDate) {
                var cellText = "<span class = 'cell-date'>" + nDate + "</span>";

                if (me.docs && me.docs[nDate]) {
                    for (num in me.docs[nDate]) {
                        var letter = me.docs[nDate][num];
                        cellText += "<span class='cell-letter'>" +
                            letter.subject + " " +
                            letter.number + " " +
                            letter.content + " from " +
                            letter.from + " to " +
                            letter.to +
                            "</span>"
                    }
                }
                return cellText;
            };

            console.log(me.docs);

            console.log(this);

            for (var row = 0; row < 6; row++) { //генерация строк
                rows.push([]);
                for (var cell = 0; cell < 7; cell++) { //генерация ячеек
                    delay--;
                    var cellObj = {
                        cellID: "cell-" + cellID,
                        text: ""
                    };
                    if (delay <= 0 && count <= lastDay.getDate()) {
                        var cd = new Date(monthContext.year, monthContext.month, count); //создается объект Date для текущей ячейки
                        cellObj.text = createCellText(cd.getDate());
                        count++;
                    }
                    rows[row].push(cellObj);
                    cellID++;
                }
            }
            return rows;
        },

        loadMonthDocuments: function () {
            var me = this;

            var url = "https://anniemalysheva.github.io/dumb-data/" + me.monthContext.year + "-" + (me.monthContext.month + 1) + '.json';
            axios.get(url).then(function (response) {
                me.$data.docs = response.data; //сохраняем данные о документах
                me.$data.calendarDays = me.getCGrid(); //переинициализируется поле calendarDays, его модификация вызовет ререндеринг шаблона
            }).catch(function (error) {
                console.log(error);
            });
        }
    }
});