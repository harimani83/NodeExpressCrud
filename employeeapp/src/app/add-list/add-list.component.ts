import { Component, OnInit,  Output, EventEmitter } from '@angular/core';
import { List } from '../models/list';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})

export class AddListComponent implements OnInit {
  private newList :List;
  constructor(private listServ: ListService) { }
@Output() addList: EventEmitter<List> = new EventEmitter<List>();
  ngOnInit() {
    this.newList = {
        empid:'',
        empname: '',
         mobile: '',
         email:'',
         adress: '',
         department: '',
         experience: '',
         skill: ''
  }
  }

  public onSubmit() {
    this.listServ.addList(this.newList).subscribe(
        response=> {
          console.log(response);
          if(response.success== true)
              this.addList.emit(this.newList);
        },
    );

    }
}
