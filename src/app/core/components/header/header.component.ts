import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input({required: true}) userImg: string = ''; 
  navlist = ["Home", "TV Shows", "News and Popular", "My List", "Browse by Language"];
}
