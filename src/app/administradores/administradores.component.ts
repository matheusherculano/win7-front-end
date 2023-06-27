import { Component, OnInit, AfterViewInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import swal from "sweetalert2";
import { PasswordValidation } from "../forms/validationforms/password-validator.component";
import { MyErrorStateMatcher } from "../forms/validationforms/validationforms.component";

declare interface DataTable {
  headerRow: string[];
  footerRow: string[];
  dataRows: string[][];
}

declare const $: any;

@Component({
  selector: "app-administradores",
  templateUrl: "./administradores.component.html",
})
export class AdministradoresComponent implements OnInit, AfterViewInit {
  dataTable: DataTable;
  form: FormGroup;
  validTextType: boolean = false;
  validEmailType: boolean = false;
  validNumberType: boolean = false;
  validSourceType: boolean = false;
  validDestinationType: boolean = false;
  matcher = new MyErrorStateMatcher();
  
  constructor(private formBuilder: FormBuilder) {}

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);


  textValidationType(e) {
    if (e) {
      this.validTextType = true;
    } else {
      this.validTextType = false;
    }
  }

  numberValidationType(e){
    if (e) {
        this.validNumberType = true;
    }else{
      this.validNumberType = false;
    }
}

  emailValidationType(e){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(e).toLowerCase())) {
        this.validEmailType = true;
    } else {
      this.validEmailType = false;
    }
  }

  sourceValidationType(e){
    if (e) {
        this.validSourceType = true;
        this.form.patchValue({confirmPassword:""});
    }else{
      this.validSourceType = false;
    }
}
confirmDestinationValidationType(e){
  if (e) {
      this.validDestinationType = true;
  }else{
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

  ngOnInit() {

    this.form = this.formBuilder.group({
      // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
      nomeCompleto: [null, Validators.required],
      usuario: [null, Validators.required],
      whatsapp: [null, Validators.required],
      email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
     }, {
       validator: PasswordValidation.MatchPassword // your validation method
   });



    var mainPanel = document.getElementsByClassName("main-panel")[0];
    $(".modal").on("shown.bs.modal", function () {
      mainPanel.classList.add("no-scroll");
    });
    $(".modal").on("hidden.bs.modal", function () {
      mainPanel.classList.remove("no-scroll");
    });

    this.dataTable = {
      headerRow: [
        "Nome",
        "Login",
        "E-mail",
        "Whatsapp Business",
        "Último acesso",
        "Actions",
      ],
      footerRow: [
        "Nome",
        "Login",
        "E-mail",
        "Whatsapp Business",
        "Último acesso",
        "Actions",
      ],

      dataRows: [
        ["Airi Satou", "Andrew Mike", "Develop", "2013", "99,225", ""],
        ["Angelica Ramos", "John Doe", "Design", "2012", "89,241", "btn-round"],
        ["Ashton Cox", "Alex Mike", "Design", "2010", "92,144", "btn-simple"],
      ],
    };
  }

  ngAfterViewInit() {
    $("#datatables").DataTable({
      pagingType: "full_numbers",
      lengthMenu: [
        [10, 25, 50, -1],
        [10, 25, 50, "All"],
      ],
      responsive: true,
      language: {
        search: "_INPUT_",
        searchPlaceholder: "Pesquisar",
        lengthMenu: "Mostrar _MENU_ registros por página",
        zeroRecords: "Nenhum registro",
        info: " _PAGE_ de _PAGES_",
        infoEmpty: "Nenhum registro",
        paginate: {
          first: "Primeiros",
          last: "Anterior",
          next: "Proximo",
          previous: "Últimos",
        },
      },
    });

    const table = $("#datatables").DataTable();

    // Edit record
    table.on("click", ".edit", function (e) {
      let $tr = $(this).closest("tr");
      if ($($tr).hasClass("child")) {
        $tr = $tr.prev(".parent");
      }

      var data = table.row($tr).data();
      alert(
        "You press on Row: " +
          data[0] +
          " " +
          data[1] +
          " " +
          data[2] +
          "'s row."
      );
      e.preventDefault();
    });

    // Delete a record
    table.on("click", ".remove1", function (e) {
      // const $tr = $(this).closest("tr");
      // table.row($tr).remove().draw();
      e.preventDefault();
    });

    $(".card .material-datatables label").addClass("form-group");
  }
}
