import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatetimeService {

  constructor(private date: DatePipe) { }

  getDate(departure_date: any) {
    let year = departure_date.substring(0, 4);
    let month = departure_date.substring(4, 6);
    let day = departure_date.substring(6, 8);
    let newDate = new Date(year, month - 1, day);
    return this.date.transform(newDate, 'mm/dd/yyyy');
  }

  getTime(departure_time: any) {
    return this.date.transform(departure_time, 'HH:MM');
  }

  getDateTime(departure_date: any, departure_time: any) {
    let year = departure_date.substring(0, 4);
    let month = departure_date.substring(4, 6);
    let day = departure_date.substring(6, 8);
    let hour = departure_time.substring(0, 2);
    let minute = departure_time.substring(2, 4);
    let newDate = new Date(year, month - 1, day, hour, minute);
    return this.date.transform(newDate, 'E, dd LLL yyyy - HH:mm');
  }

  convertToYYYYMMDD(departure_date: any) {
    return this.date.transform(departure_date, 'yyyyMMdd');
  }

}
