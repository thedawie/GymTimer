import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }
  //event model
  public event = {
    timeStarts: '00:01:00',
    countDown: '00:00',
    interval: 1,
    restTime: '00:01:00',
    repetitions: 1
  }

  //start functionality
  start(event) {
    var fiveMinutes = 60 * 5

    var min = event.timeStarts.substr(3, 2);
    var sec = event.timeStarts.substr(6, 2);
    var mininsec = min * 60;
    var total = parseInt(mininsec.toString()) + parseInt(sec);

    this.startTimer(total, event);
  }

  //reset functionaity
  reset() {
    clearInterval(this.event.interval);
    this.event.countDown = '00:00'
  }

  //start timer functionaity
  startTimer(duration, event) {

    var timer = duration, minutes, seconds;

    event.interval = setInterval(function () {
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
          event.repetitions = event.repetitions - 1;

          if (event.repetitions == 0) {
            clearInterval(event.interval);
            alert('done!');
          }
        }
      }
    }, 1000);
  }

}
