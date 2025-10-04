import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
interface MenuOption {
  label: string;
  subLabel?: string;
  icon: string;
  route: string;
}



@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink],
  templateUrl: './side-menu-options.component.html',
  styles: ``
})
export class SideMenuOptionsComponent {
  menuOptions: MenuOption[] = [
    {
      label: 'Trending',
      subLabel: 'Trending GIFs',
      icon: 'fa-solid fa-chart-line',
      route: '/dashboard/trending'
    },
    {
      label: 'Search',
      subLabel: 'Search GIFs',
      icon: 'fa-solid fa-magnifying-glass',
      route: '/dashboard/search'
    }
  ];

}
