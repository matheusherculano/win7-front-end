import { Component, OnInit, ElementRef, OnDestroy } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/core/services/auth.service";
import Swal from "sweetalert2";

declare var $: any;

@Component({
  selector: "app-login-cmp",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit, OnDestroy {
  test: Date = new Date();
  private toggleButton: any;
  private sidebarVisible: boolean;
  private nativeElement: Node;

  public formLogin: FormGroup;

  private gerarBgAleatorio(){
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
      }

      var rand = getRandomInt(1,17);

      return "./assets/img/login/"+rand+".jpg"
  }
  background: any = this.gerarBgAleatorio();

  constructor(
    private element: ElementRef,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.nativeElement = element.nativeElement;
    this.sidebarVisible = false;
    this.formLogin = this.criarFormLogin();
  }

  logar() {
    const { ambiente, usuario, senha } = this.formLogin.value;

    // this.authService.getUserPrincipal().subscribe(resp=>{
    // },err=>{});

    this.authService.logar(ambiente, usuario, senha).subscribe(
      (resp) => {
        this.router.navigate(["dashboard"]);
      },
      (err) => {
        Swal.fire({
          title: "Atenção!",
          text: err,
          icon: "warning",
          customClass: {
            confirmButton: "btn btn-danger",
          },
        });
      }
    );
  }

  ngOnInit() {
    var navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName("navbar-toggle")[0];
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("login-page");
    // body.classList.add('off-canvas-sidebar');
  }
  // sidebarToggle() { }
  ngOnDestroy() {}

  public criarFormLogin(): FormGroup {
    return this.fb.group({
      ambiente: ["", [Validators.required]],
      usuario: ["", [Validators.required]],
      senha: ["", [Validators.required]],
    });
  }
}
