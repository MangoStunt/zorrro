import {Component, OnInit} from '@angular/core';
import {catchError, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {NzMessageService} from "ng-zorro-antd/message";
import {IUserData} from "../../interfaces/data.interface";
import {ProjectConstants} from "../../constants/constants";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  startLoading = true;
  loadingMore = false;
  randomizedData: any[] = [];
  userList: Array<IUserData> = [];

  constructor(
    private http: HttpClient,
    private messageService: NzMessageService) {}

  ngOnInit(): void {
    this.getData((res: any) => {
      this.randomizedData = res.results;
      this.userList = res.results;
      this.startLoading = false;
    });
  }

  getData(callback: (res: any) => void): void {
    this.http
      .get(ProjectConstants.randomizedUserDataURL)
      .pipe(catchError(() => of({ results: [] })))
      .subscribe((res: any) => callback(res));
  }

  onLoadMore(): void {
    this.loadingMore = true;
    this.userList = this.randomizedData.concat([...Array(ProjectConstants.count)].fill({}).map(() => ({ loading: true, name: {} })));
    this.http
      .get(ProjectConstants.randomizedUserDataURL)
      .pipe(catchError(() => of({ results: [] })))
      .subscribe((res: any) => {
        this.randomizedData = this.randomizedData.concat(res.results);
        this.userList = [...this.randomizedData];
        this.loadingMore = false;
      });
  }

  hideLoaded(): void {
    this.userList.length <= 8 ? this.messageService.warning('No more users to remove!') : (this.messageService.error('The last 8 users have been removed').onClose ? this.userList = this.userList.slice(0, this.userList.length - 8) : '')
  }

  edit(item: any): void {
    this.messageService.success(item.email);
  }

  info(item: any): void {
    let fullName = `${item.name.first} ${item.name.last}`;
    this.messageService.info(fullName);
  }
}
