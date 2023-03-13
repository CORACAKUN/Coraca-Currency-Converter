function convert() {
    let amount = parseFloat(document.getElementById("amount").value);
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let result = document.getElementById("result");
    let rate;
  
    if (from == "USD") {
      if (to == "PHP") {
        rate = 50.13;
      } else if (to == "JPY") {
        rate = 113.21;
      } else if (to == "INR") {
        rate = 74.30;
      } else if (to == "EUR") {
        rate = 0.85;
      } else {
        rate = 1;
      }
    } else if (from == "PHP") {
      if (to == "USD") {
        rate = 0.02;
      } else if (to == "JPY") {
        rate = 2.25;
      } else if (to == "INR") {
        rate = 1.48;
      } else if (to == "EUR") {
        rate = 0.02;
      } else {
        rate = 1;
      }
    } else if (from == "JPY") {
        if (to == "USD") {
        rate = 0.009;
        } else if (to == "PHP") {
        rate = 0.44;
        } else if (to == "INR") {
        rate = 0.66;
        } else if (to == "EUR") {
        rate = 0.007;
        } else {
        rate = 1;
        }
        } else if (from == "INR") {
        if (to == "USD") {
        rate = 0.013;
        } else if (to == "PHP") {
        rate = 0.67;
        } else if (to == "JPY") {
        rate = 1.51;
        } else if (to == "EUR") {
        rate = 0.012;
        } else {
        rate = 1;
        }
        } else if (from == "EUR") {
        if (to == "USD") {
        rate = 1.18;
        } else if (to == "PHP") {
        rate = 57.90;
        } else if (to == "JPY") {
        rate = 130.22;
        } else if (to == "INR") {
        rate = 85.63;
        } else {
        rate = 1;
        }
        }
        
        let converted = amount * rate;
        result.innerHTML = converted.toFixed(2) + " " + to;
        }