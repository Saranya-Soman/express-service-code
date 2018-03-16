import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookSerService } from '../book-ser.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  bookList: Book[];
  userList: any[];
  msg: string;
  constructor(private userService: BookSerService) {
    this.bookList = [{'bookNumber': 101, 'bookName':'Intro to Java', 'price':500},
                      {'bookNumber': 102, 'bookName':'Intro to Node js', 'price':600}];   
  }

  ngOnInit() {
    // this.userService.getUser().subscribe(data => this.userList = data);
    // console.log('userList:'+this.userList);
    this.userService.getBooks().subscribe(res => this.bookList = res);
  }
  submit(id: number){
    console.log('Inside func');
    this.msg = 'one request with'+ id +' received';
  }
}
