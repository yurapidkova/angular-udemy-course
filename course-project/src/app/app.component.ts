import {Component} from '@angular/core';
import {HeaderSelectType} from './shared/enums';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayTypes = HeaderSelectType;
  loadedFeature = HeaderSelectType.Recipe;

  onNavigate = (type: HeaderSelectType): void => {
    this.loadedFeature = type;
  }

}
