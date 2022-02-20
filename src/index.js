productArr = [];

$(document).ready(function () {
  $(".success").hide();
  $(".error").hide();
  $("#update_product").hide();
  $(".edit").on("click", function () {
    alert("hello")
    $("#add_product").hide();
    $("#update_product").show().
      onEdit();
  });


  $("#add_product").on("click", function () {
    add_product();
    clearform();
    $(".success").show().fadeOut(3000);
  });

  $("#update_product").on("click", function () {
    update();
    $("#add_product").show();
    $("#update_product").hide();
    $(".success").show().fadeOut(3000);

  })


});

function add_product() {
  var id = document.getElementById("product_sku").value;
  var name = document.getElementById("product_name").value;
  var price = document.getElementById("product_price").value;
  var qunatity = document.getElementById("product_quantity").value;

  if (isNaN(id) || id == "") {
    $(".error").show().fadeOut(2000);
    $("#product_sku").css("border-color", "red");
    // $("#product_sku").hide().css("bordeer-color", "red")
  } else if (name == "") {
    $(".error").show().fadeOut(3000);
    $(".error").css("border-color", "red");
  } else if (price == "") {
    $(".error").show().fadeOut(3000);
    $(".error").css("border-color", "red");
  } else if (qunatity == "") {
    $(".error").show().fadeOut(3000);
    $(".error").css("border-color", "red");
  } else {
    var obj = {
      id: id,
      name: name,
      price: price,
      qunatity: qunatity,
    };

    productArr.push(obj);
  }
  console.log(productArr);
  add();

}

function add() {
  var tab =
    "<table><th>SKU</th><th>Name</th><th>Price</th><th>Quantity</th><th>Action</th>";
  for (var i = 0; i < productArr.length; i++) {
    tab +=
      "<tr><td>" +
      productArr[i].id +
      "</td><td>" +
      productArr[i].name +
      "</td><td>" +
      productArr[i].price +
      "</td><td>" +
      productArr[i].qunatity +
      '</td><td><a href = "#" onClick = "onEdit(this)" class = "edit"> Edit </a><a href = "#" onclick = "deleteRow(' +
      parseInt(productArr[i].id) +
      ')" class= "delete" > Delete </a></td></tr>';
  }

  tab += "</table>";
  document.getElementById("product_list").innerHTML = tab;
}

function update() {
  var v_id = document.getElementById("product_sku").value;
  var v_name = document.getElementById("product_name").value;
  var v_price = document.getElementById("product_price").value;
  var v_quantity = document.getElementById("product_quantity").value;

  for (var i = 0; i < productArr.length; i++) {
    if (productArr[i].id == v_id) {
      productArr[i].id = v_id;
      productArr[i].name = v_name;
      productArr[i].price = v_price;
      productArr[i].qunatity = v_quantity;
    }
  }
  add();
}


function deleteRow(y) {

  for (var i = 0; i < productArr.length; i++) {
    if (productArr[i].id == y) {
      alert("Are you sure you want to delete it")
      productArr.splice(i, 1);
    }
  }
  add();

}

function onEdit(td) {

  $("#add_product").hide();
  $("#update_product").show();
  var selectedRow = td.parentElement.parentElement;
  document.getElementById("product_sku").value = selectedRow.cells[0].innerHTML;
  document.getElementById("product_name").value =
    selectedRow.cells[1].innerHTML;
  document.getElementById("product_price").value =
    selectedRow.cells[2].innerHTML;
  document.getElementById("product_quantity").value =
    selectedRow.cells[3].innerHTML;

  add();

}



function clearform() {
  document.getElementById("product_sku").value = "";
  document.getElementById("product_name").value = "";
  document.getElementById("product_price").value = "";
  document.getElementById("product_quantity").value = "";

}
