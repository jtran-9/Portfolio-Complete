function validateFields() {
    document.getElementById('error').style.display = "none";
    document.getElementById('info').style.display = "none";
    document.getElementById('error').textContent = "";
    document.getElementById('info').textContent = "";
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const comments = document.getElementById('comments').value.trim();
  
    if (!name || !email) {
        document.getElementById('error').style.display = "block";
        document.getElementById('error').textContent = "Please fill out all required fields!";
        return;
    }
  
    const formData = {
        name: name,
        email: email,
        comments: comments
    };
  
    fetch('https://httpbin.org/post', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
        'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        clearFields();
        document.getElementById('info').style.display = "block";
        document.getElementById('info').textContent = "Thank you!";
    })
    .catch(error => {
        document.getElementById('error').style.display = "block";
        document.getElementById('error').textContent = "Submission failed. Please try again.";
    });
}

function clearFields() {
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('comments').value = "";
}