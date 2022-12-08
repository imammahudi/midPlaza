
let proxy = 'https://cors-anywhere.herokuapp.com/'
let url = proxy+'https://dummy.restapiexample.com/api/v1/employees'
/// Catatan : untuk mengaktifkan Proxxy silahkan copy URL proxy dan klik button tersebut setelah itu bisa di refresh ulang di halaman tersebut


function getapi(url) {
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS,GET'
        },
        // mode: 'no-cors',
        referrer: 'no-referrer'
    }).then(function (response) {
        // The API call was successful!
        if (response.ok) {
            console.log(response);
            return response.json();
        }
    }).then(function (data) {
        // This is the JSON from our response
        hideloader();
        show(data);
        showMiddle(data);
        showHigher(data);
        // console.log(data);
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
}

getapi(url);
  
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
    let tab = 
        `<tr>
          <th>Name</th>
          <th>Age</th>
          <th>Salary</th>
         </tr>`;
         console.log(data);
    
    let a = data.data.sort(function(a, b) {
        return parseFloat(b.employee_salary) - parseFloat(a.employee_salary);
    });
    // Loop to access all rows 
    for (let r of a) {
       if (r.employee_age < 25) {
        tab += `<tr> 
        <td>${r.employee_name} </td>
        <td>${r.employee_age}</td>
        <td>${r.employee_salary}</td>         
    </tr>`;
       }
    }
    // Setting innerHTML as tab variable
    document.getElementById("employees1").innerHTML = tab;
}

function showMiddle(data) {
    let tab = 
        `<tr>
          <th>Name</th>
          <th>Age</th>
          <th>Salary</th>
         </tr>`;
         console.log(data);
    
    let a = data.data.sort(function(a, b) {
        return parseFloat(b.employee_salary) - parseFloat(a.employee_salary);
    });
    // Loop to access all rows 
    for (let r of a) {
       if (r.employee_age >= 25 && r.employee_age <= 50) {
        tab += `<tr> 
        <td>${r.employee_name} </td>
        <td>${r.employee_age}</td>
        <td>${r.employee_salary}</td>         
    </tr>`;
       }
    }
    // Setting innerHTML as tab variable
    document.getElementById("employees2").innerHTML = tab;
}

function showHigher(data) {
    let tab = 
        `<tr>
          <th>Name</th>
          <th>Age</th>
          <th>Salary</th>
         </tr>`;
         console.log(data);
    
    let a = data.data.sort(function(a, b) {
        return parseFloat(b.employee_salary) - parseFloat(a.employee_salary);
    });
    // Loop to access all rows 
    for (let r of a) {
       if (r.employee_age > 50) {
        tab += `<tr> 
        <td>${r.employee_name} </td>
        <td>${r.employee_age}</td>
        <td>${r.employee_salary}</td>         
    </tr>`;
       }
    }
    // Setting innerHTML as tab variable
    document.getElementById("employees3").innerHTML = tab;
}