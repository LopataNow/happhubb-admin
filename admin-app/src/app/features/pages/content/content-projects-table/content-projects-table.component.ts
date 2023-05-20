import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
];

@Component({
  selector: 'app-content-projects-table',
  templateUrl: './content-projects-table.component.html',
  styleUrls: ['./content-projects-table.component.scss']
})
export class ContentProjectsTableComponent {
  displayedColumns: string[] = ['tittle', 'tags', 'created', 'akcion'];
  dataSource = ELEMENT_DATA;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  addNewPostHandle(event: any){
    event.stopPropagation();
    console.log('add new post');
  }
}
