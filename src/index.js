productArr = [];

$(document).ready(function () {
  $(".success").hide();
  $(".error").hide();
  $("#update_product").hide();
  add(productArr);
  $("#add_product").click(function () {
    add_product();
  });
});

function add_product() {
  var id = document.getElementById("product_sku").value;
  var name = document.getElementById("product_name").value;
  var price = document.getElementById("product_price").value;
  var qunatity = document.getElementById("product_quantity").value;

  if (isNaN(id) || id == "") {
    $(".error").show().fadeOut(2000);
    $("#product_sku").css("border-color", "red");
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
  
}

function add(productArr) {
  var tab =
    "<table><th>SKU</th><th>Name</th><th>Price</th><th>Quantity</th><th>Action</th>";
  for (var i = 0; i < productArr.lenght; i++) {
    tab +=
      "<tr><td>" +
      productArr[i].sku +
      "</td><td>" +
      productArr[i].name +
      "</td><td>" +
      productArr[i].price +
      "</td><td>" +
      productArr[i].qunatity +
      '</td><td><a href = "#" onClick = "onEdit"> class = "edit"> Edit </a><a href = "#" onclick = "deleteRow(' +
      parseInt(productArr[i].sku) +
      ')" class= "delete" > Delete </a></td></tr>';
  }

  tab += "</table>";
  document.getElementById("product_list").innerHTML = tab;
}

function update(){
  var v_id = document.getElementById("id").value;
  var v_name = document.getElementById("product_name").value;
  var v_price = document.getElementById("product_price").value;
  var v_quantity = document.getElementById("product_quantity").value;

  for(var i=0; i<productArr.lenght; i++)
  if(productArr[i].id == v_id){
    productArr[i].id = v_id;
    productArr[i].name = v_name;
    productArr[i].price = v_price;
    productArr[i].qunatity= v_quantity;
  }








}






