import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatetimeService {

  constructor(private date: DatePipe) { }

  getDate(date: any) {
    let year = date.substring(0, 4);
    let month = date.substring(4, 6);
    let day = date.substring(6, 8);
    let newDate = new Date(year, month - 1, day);
    return this.date.transform(newDate, 'MM/dd/yyyy');
  }

  getTime(time: any) {
    let minute = time.substring(time.length - 2);
    let hour = time.substring(0, time.length - minute.length);
    let newTime = new Date(0, 0, 0, hour, minute);
    return this.date.transform(newTime, 'HH:mm');
  }

  getDateTime(date: any, time: any) {
    let year = date.substring(0, 4);
    let month = date.substring(4, 6);
    let day = date.substring(6, 8);
    let hour = time.substring(0, 2);
    let minute = time.substring(2, 4);
    let datetime = new Date(year, month - 1, day, hour, minute);
    return this.date.transform(datetime, 'E, dd LLL yyyy - HH:mm');
  }

  convertToYYYYMMDD(date: any) {
    return this.date.transform(date, 'yyyyMMdd');
  }

}
