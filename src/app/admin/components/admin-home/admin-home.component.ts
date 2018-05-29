import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../../core/data.service';


@Component({
  selector: 'admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private dataService: DataService) { }

  ngOnInit() {
    let userList = this.route.snapshot.data;
    if (userList && userList.data && !userList.data.success) {        
        this.router.navigate(['/']);
      } else {
        this.dataService.updateUsers(userList.data.data);
      }
  }
}
