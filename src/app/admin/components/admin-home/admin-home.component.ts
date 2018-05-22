import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(({ data }) => {
      console.log(data);
      if (!data.success) {
        this.router.navigate(['/']);
      }
    });
  }
}
