$(document).ready(function() {
    //placeholder 

    // Submit button's onclick
    $("#submitBtn").click(function() {
        let username = $("#usernameInput").val();
        let password = $("#passwordInput").val();

        // Input validation
        if (!username || !username.trim()) {
            alert("No username input");
            return;
        } 
        if (!password || !password.trim()) {
            alert("No password input");
            return;
        }

        let userData = {};
        userData.username = username;
        userData.password = password;

        // post login call test implementation
        $.ajax({
            type: "POST",
            url: 'https://g11-workout-server.herokuapp.com/api/v1/login',
            data: JSON.stringify(userData),
            crossDomain: true,
            contentType: "application/json",
            success: function(res) {
                //Cookies.set...
            },
            error: function(xhr, status, err) {
                console.log(xhr, status, err);
                if (xhr.status === 400) {
                    alert("Invalid credentials, status 400");
                    $("#usernameInput").val("");
                    $("#passwordInput").val("");
                    return;
                }

                if (xhr.status === 500) {
                    alert("Status 500");
                    $("#usernameInput").val("");
                    $("#passwordInput").val("");
                    return;
                }

            },
        });
    
    });
});