import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { MatToolbar } from '@angular/material/toolbar';
import { MatButton } from '@angular/material/button';
@Component({
  selector: 'app-navbar',
  imports: [RouterLink, MatToolbar, MatButton],
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

}
