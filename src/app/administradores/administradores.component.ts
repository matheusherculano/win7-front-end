import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import swal from "sweetalert2";
import { PasswordValidation } from "../forms/validationforms/password-validator.component";
import { MyErrorStateMatcher } from "../forms/validationforms/validationforms.component";
import { AdministradorService } from "src/app/core/services/administrador.service";
import Swal from "sweetalert2";
import * as _ from "lodash";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";

declare const $: any;

@Component({
  selector: "app-administradores",
  templateUrl: "./administradores.component.html",
})

export class AdministradoresComponent implements OnInit, AfterViewInit {
  form: FormGroup;
  validTextType: boolean = false;
  validEmailType: boolean = false;
  validNumberType: boolean = false;
  validSourceType: boolean = false;
  validDestinationType: boolean = false;
  matcher = new MyErrorStateMatcher();
  dataSource: MatTableDataSource<UserData>;
  displayedColumns = ['nome', 'login', 'email', 'whatsapp', 'timeStamp', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private formBuilder: FormBuilder,
    private administradorService: AdministradorService
  ) {
    this.carregarTabela();
  }

  usuarioFormControl = new FormControl("", [Validators.required]);
  nomeCompletoFormControl = new FormControl("", [Validators.required]);
  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email,
  ]);
  whatsappFormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(13),
  ]);

  textValidationType(e) {
    if (e) {
      this.validTextType = true;
    } else {
      this.validTextType = false;
    }
  }

  numberValidationType(e) {
    if (e) {
      this.validNumberType = true;
    } else {
      this.validNumberType = false;
    }
  }

  emailValidationType(e) {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(e).toLowerCase())) {
      this.validEmailType = true;
    } else {
      this.validEmailType = false;
    }
  }

  sourceValidationType(e) {
    if (e) {
      this.validSourceType = true;
      this.form.patchValue({ confirmPassword: "" });
    } else {
      this.validSourceType = false;
    }
  }
  confirmDestinationValidationType(e) {
    if (e) {
      this.validDestinationType = true;
    } else {
      this.validDestinationType = false;
    }
  }

  displayFieldCss(form: FormGroup, field: string) {
    return {
      "has-error": this.isFieldValid(form, field),
      "has-feedback": this.isFieldValid(form, field),
    };
  }

  isFieldValid(form: FormGroup, field: string) {
    return !form.get(field).valid && form.get(field).touched;
  }

  cadastrar() {
    const dto = this.form.value;
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.administradorService
        .cadastrarUsuario(dto)
        .toPromise()
        .then(
          (resp) => {
            swal.fire({
              title: "Tudo certo!",
              text: "Usuário cadastrado!",
              buttonsStyling: false,
              customClass: {
                confirmButton: "btn btn-success",
              },
              icon: "success",
            });

            this.limparModal();
            $(".modal").modal("hide");
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
  }

  limparModal() {
    var campos = {
      nomeCompleto: "",
      login: "",
      whatsapp: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
    this.form.patchValue(campos);
  }

  public excluirUsuario(row) {
    console.log(row);
    swal
      .fire({
        title: "Você tem certeza que quer excluir o usuário " + row[0] + " ?",
        text: "Essa ação não poderá ser revertida.",
        icon: "warning",
        showCancelButton: true,
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        confirmButtonText: "Sim",
        cancelButtonText: "Não",
        buttonsStyling: false,
      })
      .then((result) => {
        if (result.value) {
          swal.fire({
            title: "Excluido!",
            text: row[0] + " foi excluido",
            icon: "success",
            customClass: {
              confirmButton: "btn btn-success",
            },
            buttonsStyling: false,
          });
        }
      });
  }

  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {

    this.form = this.formBuilder.group(
      {
        // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
        nomeCompleto: [null, Validators.required],
        login: [null, Validators.required],
        whatsapp: [null, Validators.required],
        email: [
          null,
          [
            Validators.required,
            Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"),
          ],
        ],
        password: ["", Validators.required],
        confirmPassword: ["", Validators.required],
      },
      {
        validator: PasswordValidation.MatchPassword, // your validation method
      }
    );


    var mainPanel = document.getElementsByClassName("main-panel")[0];
    $(".modal").on("shown.bs.modal", function () {
      mainPanel.classList.add("no-scroll");
    });
    $(".modal").on("hidden.bs.modal", function () {
      mainPanel.classList.remove("no-scroll");
    });
  }


  ngAfterViewInit() {
    this.initPaginate();
  }

  private initPaginate(){
    if(this.dataSource != undefined){
      this.dataSource['paginator'] = this.paginator;
      this.dataSource['sort'] = this.sort;
    }
  }

  private carregarTabela() {
    //essa declaração carrega ai iniciar o pag sozinho
     this.administradorService.getAllUsuariosByAmbiente().subscribe((data) => {
      const users: UserData[] = [];
      _.each(data, item =>{
        users.push(dtoToUserData(item));
      });
      this.dataSource = new MatTableDataSource(users);
      this.initPaginate();
    });
  }
}

function dtoToUserData(dto): UserData {
  return {
    nome: dto.nome,
    login: dto.login,
    email: dto.email,
    whatsapp: dto.whatsapp,
    timeStamp: dto.timeStamp
  };
}

export interface UserData {
  nome: string;
  login: string;
  email: string;
  whatsapp: string;
  timeStamp: string;
}