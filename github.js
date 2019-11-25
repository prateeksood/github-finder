class Github{
    constructor(){
        this.client_id='51c11075a8dd09ef2759'
        this.client_secret='59c2221444ec1b453bc0dfb1651477a1abee522c'
        this.repos_count=5;
        this.repos_sort='created:asc';
    }

    async getUser(user){
        const profileResponse=await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        const reposResponse=await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
        
        const profile=await profileResponse.json();
        const repos=await reposResponse.json();

        return {
            
            profile,
            repos

        }
    }
}