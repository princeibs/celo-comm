const content = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
laboriosam qui unde? Aut tempora consequuntur et ea, incidunt dicta
temporibus ratione repellendus a exercitationem laboriosam modi, rerum
deleniti, repudiandae quibusdam suscipit tenetur qui culpa. Quidem,
dolores. Possimus eveniet optio, veniam qui itaque in sapiente,
reiciendis, ducimus reprehenderit nobis voluptas tempora aliquam officia
fuga necessitatibus voluptatem rerum saepe obcaecati provident nulla.
Aliquam, ipsum ducimus. Dolores est adipisci delectus qui doloribus, in
ut neque numquam laboriosam esse fugit perferendis mollitia ratione,
eveniet laudantium odit distinctio perspiciatis architecto quaerat
possimus. Consequatur sequi nulla est, magni aperiam atque eligendi
minus sint culpa nesciunt eaque labore, nostrum, asperiores numquam.
Libero tenetur sequi quam ipsa eligendi beatae autem quas, iste fugit
iusto qui. Accusantium, illum distinctio. Lorem ipsum dolor sit amet
consectetur adipisicing elit. Quae praesentium quaerat saepe, soluta ut
impedit laudantium eum ea, iste sequi hic error nulla cupiditate nihil
expedita dolorum assumenda iure voluptas.`;

const data = {
  blogs: [
    {
      postId: 1,
      coverImgUrl: "https://picsum.photos/700/250",
      authorAvatarUrl: "https://picsum.photos/50/50",
      title: "Get out of Web2 now: The web is evolving into Web3.0",
      content: content,
      datePublished: "April 12",
      likesCount: 1,
      commentsCount: 16,
      comments: [
        {
          author: "Somebody",
          comment: `orem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
      laboriosam qui unde? Aut tempora consequuntur et ea, incidunt dictatemporibus ratione repellendus a exercitationem laboriosam modi, rerum
      deleniti, repudia reiciendis, ducimus reprehenderit nobis voluptas tempora aliquam officia
      fuga necessitatibus voluptatem rerum saepe obcaecati provident nulla.`,
        },
        {
          author: "Thisbody",
          comment: `orem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
      laboriosam qui unde? Aut tempora consequuntur et ea, incidunt dictatemporibus ratione repellendus a exercitationem laboriosam modi, rerum
      deleniti, repudia reiciendis, ducimus reprehenderit nobis voluptas tempora aliquam officia
      fuga necessitatibus voluptatem rerum saepe obcaecati provident nulla.`,
        },
        {
          author: "SomebodyElse",
          comment: `orem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
      laboriosam qui unde? Aut tempora consequuntur et ea, incidunt dictatemporibus ratione repellendus a exercitationem laboriosam modi, rerum
      deleniti, repudia reiciendis, ducimus reprehenderit nobis voluptas tempora aliquam officia
      fuga necessitatibus voluptatem rerum saepe obcaecati provident nulla.`,
        },
      ],
    },
    {
      postId: 2,
      coverImgUrl: "https://picsum.photos/700/250",
      authorAvatarUrl: "https://picsum.photos/50/50",
      title: "Get out of Web2 now 1",
      content: content,
      datePublished: "April 12",
      likesCount: 7,
      commentsCount: 2,
      comments: [],
    },
    {
      postId: 3,
      coverImgUrl: "https://picsum.photos/700/250",
      authorAvatarUrl: "https://picsum.photos/50/50",
      title: "Get out of Web2 now 2",
      content: content,
      datePublished: "April 12",
      likesCount: 33,
      commentsCount: 12,
      comments: [],
    },
    {
      postId: 4,
      coverImgUrl: "https://picsum.photos/700/250",
      authorAvatarUrl: "https://picsum.photos/50/50",
      title: "Get out of Web2 now 3",
      content: content,
      datePublished: "April 12",
      likesCount: 0,
      commentsCount: 0,
      comments: [],
    },
  ],
  sellersList: [
    {
      sellerAddress: "0x12345",
      message:
        "Hey, I want to sell 5RP consequuntur dignissimos vitae commodi sunt eligendi nobis officia!",
      quantity: 5,
    },
    {
      sellerAddress: "0x17433",
      message: "Hey, I want to sell 9RP",
      quantity: 9,
    },
    {
      sellerAddress: "0x34532",
      message: "Hey, I want to sell 2RP",
      quantity: 2,
    },
  ],
};

export default data;
