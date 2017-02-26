import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }
  public event = {
    timeStarts: '00:01:00',
    countDown: '00:00'
  }

  public interval;

  start(event) {
    var fiveMinutes = 60 * 5

    var min = event.timeStarts.substr(3, 2);
    var sec = event.timeStarts.substr(6, 2);
    var mininsec = min * 60;
    var total = parseInt(mininsec.toString()) + parseInt(sec);

    this.startTimer(total, event)
  }

  reset() {
    clearInterval(this.interval);
    this.event.countDown = '00:00'
  }

  startTimer(duration, event) {
    var timer = duration, minutes, seconds;

   var interval = setInterval(function () {
      timerfunction()
    }, 1000);

    function timerfunction() {
      var min = timer / 60;
      var sec = timer % 60;
      minutes = parseInt(min.toString(), 10);
      seconds = parseInt(sec.toString(), 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      event.countDown = minutes + ":" + seconds;

      if (--timer < 0) {
        timer = duration;

        if (event.countDown === "00:00") {
          clearInterval(interval);
          alert('done!');
        }
      }
    }

  }

}
