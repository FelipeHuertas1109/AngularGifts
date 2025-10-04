import { Component } from '@angular/core';
import { SideMenuHeaderComponent } from './side-menu-header/side-menu-header.component';
import { SideMenuOptionsComponent } from './side-menu-options/side-menu-options.component';
@Component({
  selector: 'gifs-site-menu',
  imports: [SideMenuHeaderComponent, SideMenuOptionsComponent],
  templateUrl: './site-menu.component.html',
  styles: ``
})
export class SiteMenuComponent {

}
