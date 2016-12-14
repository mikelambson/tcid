// navigation.component.ts
import { Component } from '@angular/core';

@Component({
    selector: 'navigation',
    template: `
        <nheader>
            <nav class='navbar navbar-sticky-top navbar-dark bg-inverse'>
                <span class='navbar-brand'><img src="/assets/images/logo.png" /></span>
                <ul class='nav navbar-nav pull-xs-right'>
                    <li class='nav-item'>
                        <a class='nav-link' routerLink="/home">Home</a>
                    </li>
                    <li class='nav-item'>
                        <a class='nav-link' routerLink="/schedule">Schedule</a>
                    </li>
                    <li class='nav-item'>
                        <a class='nav-link' routerLink="/manage">Manage</a>
                    </li>
                    <li class='nav-item'>
                        <a class='nav-link' routerLink="/profile">Profile</a>
                    </li>
                </ul>
            </nav>
        </nheader>
    `,
})
export class NavigationComponent {}