const form = document.getElementById("userForm");
const table = document.getElementById("userTable");

const tableBody = document.querySelector("#userTable > tbody");

// generate randomNumerID
let random_id = function() {
  let id_num = Math.random()
    .toString(9)
    .substr(2, 3);
  let id_str = Math.random()
    .toString(36)
    .substr(2, 5);
  return id_num + id_str;
};

// clear existing HTML on table body
while (tableBody.firstChild) {
  tableBody.removeChild(tableBody.firstChild);
}

//JQuery

$(document).ready(function() {
  // submit new user

  $("#userForm").submit(function(e) {
    e.preventDefault();
    let name = $("input[name='name']").val();
    let age = $("input[name='age']").val();
    let email = $("input[name='email']").val();
    let id = random_id();
    let index = tableBody.childElementCount;

    $("#userTable > tbody").append(`
      <tr id="${id}">
        <td class="border-t w-1/12 p-2">${index + 1}</td>
        <td class="border-t w-3/12 p-2">${name}</td>
        <td class="border-t w-2/12 p-2">${age}</td>
        <td class="border-t w-4/12 p-2">${email}</td>
        <td class="border-t w-auto p-2">
         <div class="flex justify-end">
            <a href="#" class="mr-2 btnEdit">
                <svg class="w-5 h-5 stroke-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-3"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
            </a>
            <a href="#" class="btnTrash">
                <svg class="w-5 h-5 stroke-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
            </a>  
         </div>
        </td>
      </tr>
      `);

    $("input[name='name']").val("");
    $("input[name='age']").val("");
    $("input[name='email']").val("");
  });

  // delete button function
  $("#userTable").on("click", ".btnTrash", function() {
    let rowIndex = $(this)
      .closest("tr")
      .index();
    console.log(`row index number: ${rowIndex} is deleted !🐱‍👤💣`);

    $(this)
      .closest("tr")
      .remove();
  });

  // edit button function

  $("body").on("click", ".btnEdit", function() {
    let rowIndex = $(this)
      .closest("tr")
      .index();

    console.log(`💭 index ${rowIndex}`);

    let name = $(this)
      .closest("tr")
      .find("td:eq(1)")
      .html();

    let age = $(this)
      .closest("tr")
      .find("td:eq(2)")
      .text();
    let email = $(this)
      .closest("tr")
      .find("td:eq(3)")
      .text();
    console.log(`${name} ${age} ${email}`);

    $(this)
      .closest("tr")
      .find("td:eq(1)")
      .html(`<input name="edit_name" value= '${name}'>`);
    $(this)
      .closest("tr")
      .find("td:eq(2)")
      .html(`<input name="edit_age" value= '${age}'>`);
    $(this)
      .closest("tr")
      .find("td:eq(3)")
      .html(`<input name="edit_email" value= '${email}'>`);


    $(this)
      .parents("tr")
      .find("div")
      .prepend(
        `<button class='w-5 h-5 stroke-current btn-update'>U</button>
        <button class='w-5 h-5  mr-2 btn-cancel'>C</button>
        `
      );
    $(this).hide();

  });

  //cancelBtn  Function

























});
