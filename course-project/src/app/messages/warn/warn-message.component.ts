import { Component } from '@angular/core';

@Component(
    {
        selector: 'app-warn-messages',
        templateUrl: './warn-message.component.html',
        styles: [`
          p {
            color: red;
          }
        `]
    }
)

export class WarnMessageComponent {}
