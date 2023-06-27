import { Component, OnInit, AfterViewInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import swal from "sweetalert2";

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
  public dataTable: DataTable;
  public formUsuario: FormGroup;

  constructor(){
    
  }

  public excluirUsuario(row){
    console.log(row)
    swal
        .fire({
          title: "Você tem certeza que quer excluir o usuário "+row[0]+" ?",
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
              text: row[0]+" foi excluido",
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
