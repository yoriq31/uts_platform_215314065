function kirim() {
    var jumPil = document.getElementById("jumPil").value;
    var button;
    var pilihan = "";
  
    for (var i = 1; i <= jumPil; i++) {
      pilihan += "<p><label for='hobi' class='form-label'>Hobi ke - </label>" + i + "<input type='text' class='form-control' id='hobi" + i + "' aria-describedby='hobi' placeholder = 'Masukkan Hobi'>" + "</p>";
    }
    button = "<p>" + '<button type="button" class="btn btn-primary" onclick="createCheckBoxes()">Submit</button>' + "</p>";
    document.getElementById("choose1").innerHTML = pilihan;
    document.getElementById("button1").innerHTML = button;
  }
  
  function createCheckBoxes() {
    var form = document.getElementById("choose1");
    var inputs = form.getElementsByTagName("input");
    var submit;
    var checkboxes = "";
  
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].type == "text") {
        checkboxes += '<input type="checkbox" name="option" value="' + inputs[i].value + '">' + inputs[i].value + "<br>";
      }
    }
    submit = '<input type="button" class="btn btn-primary" onclick="doVal()" value="Submit">';
    document.getElementById("submit1").innerHTML = submit;
    document.getElementById("list").innerHTML = checkboxes;
  }
  
  function doVal() {
    var testName = document.getElementById("namaDep");
    var testName2 = document.getElementById("namaBel");
    var email = document.getElementById("email");
    var form = document.querySelector("form");
    var result = document.getElementById("result");
    var jumPil = document.getElementById("jumPil").value;
    var form1 = document.getElementById("choose1");
    var inputs = form1.getElementsByTagName("input");
    var checkboxes = "";
  
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].type == "checkbox" && inputs[i].checked) {
        checkboxes += inputs[i].value + ", ";
      }
    }
  
    var selectedOptions = document.querySelectorAll('input[name="option"]:checked');
  
    if (selectedOptions.length > 0) {
      var options = [];
      for (var i = 0; i < selectedOptions.length; i++) {
        options.push(selectedOptions[i].value);
      }
      result.innerHTML = "<br>Hallo, nama saya " + testName.value + " " + testName2.value + ", dengan email " + email.value + ", saya mempunyai sejumlah " + jumPil + " pilihan hobi yaitu ";
  
      for (var i = 1; i <= jumPil; i++) {
        result.innerHTML += document.getElementById("hobi" + i).value + ", ";
      }
  
      result.innerHTML += "dan saya menyukai " + options.join(", ") + ".";
    } else {
      result.textContent = "Please select an option.";
    }
  }