import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HeaderSelectType} from '../shared/enums';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output()
  featureSelected = new EventEmitter<HeaderSelectType>();

  selectTypes = HeaderSelectType;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelect = (type: HeaderSelectType): void => this.featureSelected.emit(type);
}
