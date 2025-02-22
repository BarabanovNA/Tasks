var model = [
    {
        id: 0,
        title: 'Title text 1',
        text: 'Some text 1',
        user: {
            id: 0,
            name: 'user 1',
        },
    }, {
        id: 1,
        title: 'Title text 2',
        text: 'Some text 2',
        user: {
            id: 1,
            name: 'user 2',
        },
    }, {
        id: 2,
        title: 'Title text 3',
        text: 'Some text 3',
        user: {
            id: 0,
            name: 'user 1',
        },
    }, {
        id: 3,
        title: 'Title text 4',
        text: 'Some text 4',
        user: {
            id: 2,
            name: 'user 3',
        },
    }, {
        id: 4,
        title: 'Title text 5',
        text: 'Some text 5',
        user: {
            id: 0,
            name: 'user 1',
        },
    }
]


function userSort(){
    var result = [];
    let repeat = 0;
    model.forEach(element => {
        result.forEach(elem => {
            if (element.user.id==elem.id) repeat++;
        });
        if (repeat==0) {
            result.push(element.user);
        }
        repeat=0;
    });

    result.forEach(resElement => {
        resElement.posts = [];
        model.forEach(elem => {
            if (resElement.id==elem.user.id){
                resElement.posts.push({
                    id: elem.id,
                    title: elem.title,
                    text: elem.text
                });
            }
        });
    });

    model = result;

    model.forEach(element => {
        console.log(element);
    });
}

userSort();
