import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { ru_RU } from 'ng-zorro-antd/i18n';
import {NgOptimizedImage, registerLocaleData} from '@angular/common';
import ru from '@angular/common/locales/ru';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {NzPageHeaderModule} from "ng-zorro-antd/page-header";
import {RouterLink} from "@angular/router";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzAvatarModule} from "ng-zorro-antd/avatar";
import {NzBadgeModule} from "ng-zorro-antd/badge";
import {NzDescriptionsModule} from "ng-zorro-antd/descriptions";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzImageModule} from "ng-zorro-antd/image";
import {NzMenuModule} from "ng-zorro-antd/menu";
import { ListComponent } from './components/list/list.component';
import {NzSkeletonModule} from "ng-zorro-antd/skeleton";
import {NzListModule} from "ng-zorro-antd/list";
import {NzMessageService} from "ng-zorro-antd/message";
import {NzTypographyModule} from "ng-zorro-antd/typography";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzRateModule} from "ng-zorro-antd/rate";
import {NzCardModule} from "ng-zorro-antd/card";
import {IconDefinition} from "@ant-design/icons-angular";
import {
  AntDesignOutline, BookOutline, ClockCircleOutline,
  CodepenOutline, DeleteOutline, DollarOutline, EditOutline, ForkOutline,
  GitlabOutline, InfoCircleOutline,
  MediumOutline, PlusCircleOutline,
  SettingOutline, TeamOutline,
  UsergroupAddOutline
} from "@ant-design/icons-angular/icons";

registerLocaleData(ru);

const IconList: IconDefinition[] = [
  AntDesignOutline,
  GitlabOutline,
  MediumOutline,
  CodepenOutline,
  SettingOutline,
  UsergroupAddOutline,
  DollarOutline,
  ForkOutline,
  TeamOutline,
  PlusCircleOutline,
  EditOutline,
  DeleteOutline,
  BookOutline,
  ClockCircleOutline,
  InfoCircleOutline
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzPageHeaderModule,
    RouterLink,
    NzButtonModule,
    NzIconModule.forChild(IconList),
    NzAvatarModule,
    NzBadgeModule,
    NzDescriptionsModule,
    NzLayoutModule,
    NzImageModule,
    NgOptimizedImage,
    NzMenuModule,
    NzSkeletonModule,
    NzListModule,
    NzTypographyModule,
    NzFormModule,
    NzRateModule,
    NzCardModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: ru_RU },
    NzMessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
