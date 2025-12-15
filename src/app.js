const btn = document.getElementById("menuBtn");
if (btn) {

    const menu = document.getElementById("mobileMenu");

    btn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
    });
}



let signBtn = document.getElementById("s-btn");

if (signBtn) {
    let signUpName = document.getElementById("s-name");
    let signUpEmail = document.getElementById("s-email");
    let signUpPassword = document.getElementById("s-password");

    signBtn.addEventListener("click", () => {
        let newUser = {
            name: signUpName.value,
            email: signUpEmail.value,
            password: signUpPassword.value,
        }

        if (newUser.password.length < 8) {
            Swal.fire({
                icon: "error",
                title: "Weak Password ❌",
                text: "Password must be at least 8 characters",
            });
            return;
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        Swal.fire({
            icon: "success",
            title: "Welcome!",
            text: "Signup completed successfully 🎉",
            showConfirmButton: false,
            timer: 2000
        }).then(() => {
            location.href = "login.html"

        })

        signUpName.value = "";
        signUpEmail.value = "";
        signUpPassword.value = "";
    });

}

let loginBtn = document.getElementById("l-btn");

if (loginBtn) {
    let loginEmail = document.getElementById("l-email");
    let loginPassword = document.getElementById("l-password");


    loginBtn.addEventListener("click", () => {
        let users = JSON.parse(localStorage.getItem("users")) || [];

        let foundUser = users.find(user => {
            return user.email === loginEmail.value && user.password === loginPassword.value;
        })


        if (foundUser) {
            Swal.fire({
                title: "Login Successful 🎉",
                text: `Welcome back, ${foundUser.name}!`,
                icon: "success",
                confirmButtonText: "Go to Dashboard",
                confirmButtonColor: "#2563eb"
            }).then(() => {
                location.href = "index.html";
            });
        } else {
            Swal.fire({
                title: "Login Failed ❌",
                text: "Invalid email or password",
                icon: "error",
                confirmButtonText: "Try Again",
                confirmButtonColor: "#dc2626"
            });
        }


        loginEmail.value = "";
        loginPassword.value = "";
    })

}



const buttons = document.querySelectorAll('.flex.flex-wrap button');
const menuItems = document.querySelectorAll('.grid > div');


buttons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category.toLowerCase();

        menuItems.forEach(item => {
            if (item.dataset.category === category) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden'); 
            }
        });
    });
});













