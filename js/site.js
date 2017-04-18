(function() {
  $(document).ready(function() {

    // TimeDisplay class
    function TimeDisplay() {
      var self = this;
      self.HOURS_OF_OPERATION = {
        "Monday": {
          "isOpen": true,
          "startTime": "9:00",
          "endTime": "19:00"
        },
        "Tuesday": {
          "isOpen": true,
          "startTime": "9:00",
          "endTime": "19:00"
        },
        "Wednesday": {
          "isOpen": true,
          "startTime": "9:00",
          "endTime": "19:00"
        },
        "Thursday": {
          "isOpen": true,
          "startTime": "9:00",
          "endTime": "19:00"
        },
        "Friday": {
          "isOpen": true,
          "startTime": "9:00",
          "endTime": "19:00"
        },
        "Saturday": {
          "isOpen": true,
          "startTime": "9:00",
          "endTime": "17:00"
        },
        "Sunday": {
          "isOpen": false
        },
      }
      self.timeDisplaySpan = $('#time-display');
      self.currentDayOfWeek = moment().format('dddd');
      self.hoursOfOperationByDay = _.pick(self.HOURS_OF_OPERATION, this.currentDayOfWeek);
      self.setDOM = function() {
        var startTime = parseInt(self.hoursOfOperationByDay[self.currentDayOfWeek].startTime);
        var endTime = parseInt(self.hoursOfOperationByDay[self.currentDayOfWeek].endTime);
        var isOpen = self.hoursOfOperationByDay[self.currentDayOfWeek].isOpen;
        var isOpenText = "Open today from "
                          + moment({hour: startTime}).format("h:mma")
                          + " to " + moment({hour: endTime}).format("h:mma");
        var isClosedText = "Closed Today";
        var html = isOpen ? isOpenText : isClosedText;
        self.timeDisplaySpan.html(html);
      }

      return {
        setDOM: self.setDOM
      }
    }

    // NavBar class
    function Navbar() {
      var self = this;
      self.listItems = $('ul.menu li');
      self.listItemAnchors = $('ul.menu li a');
      self.listItemAnchorsClick = function() {
        self.listItemAnchors.click(function() {
          self.listItems.removeClass('active');
          $(this).parent().addClass('active');
        })
      }

      return {
        bindListItemAnchorsClickEv: self.listItemAnchorsClick
      }

    }

    function init() {
      var timeDisplay = new TimeDisplay();
      var navbar = new Navbar();

      timeDisplay.setDOM()
      navbar.bindListItemAnchorsClickEv();
    }

    init();

  })
})();
