var blogsComponent = document.querySelector('.blogs-component'); 

db.collection('blogs').get().then(snapshot => {
    snapshot.docs.forEach(element => {
        
        var data = element.data();
        
        var blog = document.createElement('div');
        var title = document.createElement('div');
        var content = document.createElement('div');
        var author = document.createElement('div');

        blog.setAttribute('class', 'blog');
        title.setAttribute('class', 'title');
        content.setAttribute('class', 'content');
        author.setAttribute('class', 'author');

        title.textContent = data.title;
        content.textContent = data.content.slice(0, 600);
        author.textContent = 'Author: ' + data.userId;

        blog.append(title);
        blog.append(author);
        blog.append(content);
        

        // blogsComponent.append(blog);

        blogsComponent.appendChild(blog);

    });;
});