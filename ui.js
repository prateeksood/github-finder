class UI{
    constructor(){
        this.profile=document.getElementById('profile');
        
    }

    showProfile(user)
    {
        this.profile.innerHTML=
        `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
                    <a href="${user.html_url}" target="_blank" class="btn btn-success btn-block mb-3">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-success mb-3">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-success mb-3">Public Gists: ${user.public_gists}</span>
                    <span class="badge badge-success mb-3">Followers: ${user.followers}</span>
                    <span class="badge badge-success mb-3">Following: ${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>

                    </ul>
                </div>
            </div>
        </div>
        <hr class="page-heading mb-3">Latest Repos</hr>
        <div id="repos"></div>
        `
    }

    showRepos(repos){
        let output='';
        output+=`<ul class="list-group">`
        repos.forEach(repo=>{
            output+=`
            <li class="list-group-item">
            <div class="card-card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name} </a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-success">Public Stars: ${repo.stargazers_count}</span>
                        <span class="badge badge-secondary">Public Watches: ${repo.watchers_count}</span>
                        <span class="badge badge-primary">Forks: ${repo.forks_count}</span>     
                    </div>
                </div>
            </div>
            </li>
            `
            repos=document.getElementById('repos');
            repos.innerHTML=output;
        })
        output+=`</ul>`
    }

    clearProfile(){
        this.profile.innerHTML='';
    }
    showAlert(message,classes){
        this.clearAlert();
        const alert=document.createElement('div');
        alert.className=classes;
        alert.innerText=message;

        document.querySelector('.searchContainer').insertBefore(alert,document.querySelector('.card-body'));
        setTimeout(() => {
            alert.style.display='none';
        }, 3000);
    }
    clearAlert(){
       const alert= document.querySelector('.alert');
       if(alert){
           alert.remove();
       }
    }
}