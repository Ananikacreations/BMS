/* eslint-disable no-debugger */
import { TuiRoot } from "@taiga-ui/core";
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, inject } from '@angular/core';
import { TuiTabBar } from '@taiga-ui/addon-mobile';

interface Item {
  badge?: number;
  icon: string;
  text: string;
}


@Component({
  imports: [
    RouterModule,
    TuiRoot,
    NgForOf, TuiTabBar
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {


  protected activeItemIndex = 1;

  protected readonly items = [
    {
      text: 'Home',
      icon: '@tui.heart',
      badge: 3,
      route: '/home'
    },
    {
      text: 'Employees',
      icon: '@tui.user',
      route: '/employee'
    },
    {
      text: 'Contact',
      icon: '@tui.phone',
      badge: 1234,
      route: '/contact'
    },
    
    {
      text: 'About Us',
      icon: '@tui.settings',
      badge: 100,
      route: '/about'
    },
    {
      text: 'More',
      icon: '@tui.ellipsis',
    },
  ];

  protected onClick(item: Item): void {
    console.log(item);
  }
}
