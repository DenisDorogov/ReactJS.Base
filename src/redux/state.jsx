let state = {
    profile: {
        img: "https://imgaz.staticbg.com/customers_avatars/20181219104152_503.jpg",
        posts: [
            {name: 'Denis', text: 'test1', likeCount: 20},
            {name: 'Denis1', text: 'test2', likeCount: 21},
            {name: 'Denis2', text: 'test3', likeCount: 200},
          ]
    },
    dialogs: {
        img: "https://imgaz.staticbg.com/customers_avatars/20181219104152_503.jpg",
        dialogs: [
            { path: "/id1", name: "Name1" },
            { path: "/id2", name: "Name2" },
            { path: "/id3", name: "Name3" },
            { path: "/id4", name: "Name4" },
            { path: "/id5", name: "Name5" },
          ],
        messages: [
            { alt: "ava1", message: "Hello!!!", in: true },
            { alt: "ava1", message: "Hello", in: false },
            { alt: "ava1", message: "Hell", in: true },
            { alt: "ava1", message: "Hell!!!", in: true },
            { alt: "ava1", message: "Hell", in: true },
          ]
    }
}

export default state;
