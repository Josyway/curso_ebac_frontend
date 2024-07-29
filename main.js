document.addEventListener('DOMContentLoaded', function(){
    const name = document.querySelector('#name');
    const username = document.querySelector('#username');
    const avatar = document.querySelector('#avatar');
    const repos = document.querySelector('#repos');
    const followers = document.querySelector('#followers');
    const following = document.querySelector('#following');
    const link = document.querySelector('#link');
    
    $(document).ready(function(){
        $('#login')
        
        $('#btn-buscar').click(function(){
            const login = $('#login').val();
            const endpoint = `https://api.github.com/users/${login}`;
            fetch(endpoint)
            .then(function(res) {
                return res.json();
            })

            .then(function(json){ 
                name.innerText= json.name;
                username.innerText = json.login;
                avatar.src = json.avatar_url;
                repos.innerText = json.public_repos;
                followers.innerText= json.followers;
                following.innerText = json.following;
                link.href = json.html_url;

            })
        })
        
        .catch(function(erro){
            alert("Occorreu um erro ao buscar o endereço, tente novamente mais tarde!")
        })
        
    })
})


