import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { AnsiTableOrdered } from "./ansi-table-ordered/ansi-table-ordered.component";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, AnsiTableOrdered],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {
  protected title = "ansi_table";
  isDark = false;

  toggleTheme(dark: boolean) {
    this.isDark = dark;
    console.log(this.isDark);
    const body = document.body;
    if (this.isDark) {
      body.classList.add("dark-theme");
    } else {
      body.classList.remove("dark-theme");
    }
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("darkMode", dark.toString());
    } else if (typeof sessionStorage !== "undefined") {
      sessionStorage.setItem("darkMode", dark.toString());
    } else {
      console.log("Web storage not suported");
    }
  }

  ngOnInit() {
    if (typeof localStorage !== "undefined") {
      const darkMode = localStorage.getItem("darkMode") === "true";
      this.toggleTheme(darkMode);
    } else if (typeof sessionStorage !== "undefined") {
      const darkMode = sessionStorage.getItem("darkMode") === "true";
      this.toggleTheme(darkMode);
    } else {
      console.log("Web storage not suported");
    }
  }
}
