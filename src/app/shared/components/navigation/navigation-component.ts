import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { MenubarModule } from 'primeng/menubar';

@Component({
    selector: 'app-navigation-component',
    imports: [RouterOutlet, DrawerModule, ButtonModule, MenubarModule],
    templateUrl: './navigation-component.html',
    styleUrl: './navigation-component.css',
})
export class NavigationComponent {
    visible: boolean = false; // mobile drawer toggle
    drawerVisible: boolean = true;
}
