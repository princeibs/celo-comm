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
expedita dolorum assumenda iure voluptas.


Fugit, tempore quia numquam
adipisci saepe officiis quibusdam praesentium consequuntur consectetur
rerum omnis. Magni iure sed dolores, voluptatibus minima ratione. Lorem
ipsum dolor sit amet consectetur adipisicing elit. Eius sunt placeat
quas enim itaque incidunt quidem, vitae doloremque rem distinctio ipsum
voluptatem amet a labore commodi officia error, libero quo, omnis nihil
odio esse reprehenderit? Doloribus, animi? Totam unde facere possimus
adipisci amet dolorum ut officiis, ipsam quae autem harum laudantium
consequatur deleniti odio quasi vel quaerat voluptatibus sapiente nobis
ipsa incidunt debitis. Excepturi harum autem pariatur, facilis dolorem,
dignissimos delectus ducimus ab libero, corrupti magnam iure velit
architecto dolorum error nobis mollitia aliquid fugit quasi! Excepturi
doloribus laborum magni quibusdam est, nobis rem incidunt autem, porro
expedita natus. Lorem ipsum, dolor sit amet consectetur adipisicing
elit. Officia tempora alias suscipit aut consequatur, deserunt provident
voluptate, aperiam itaque est repellat ea. 

Ab ex aliquid aperiam nulla,aut, facere illum, quisquam ipsa temporibus rem totam doloribus ducimus
eos minima consequuntur voluptatem quos error recusandae delectus id
nemo dolores sequi consequatur? Fugiat eligendi commodi id nesciunt
ipsum consequatur rerum obcaecati a similique praesentium cupiditate
libero, repudiandae assumenda ducimus labore adipisci autem vero in
iusto corrupti! Alias facere facilis consequuntur aspernatur unde cum,
odio inventore vel tempora quia mollitia repellendus fugiat est corporis
perferendis. Autem molestiae, adipisci voluptatum at porro nostrum
repudiandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Vitae consequuntur ratione corporis nobis nemo veniam quod obcaecati
neque possimus vero quos beatae assumenda, quibusdam soluta, laborum,
rerum eaque totam. Repudiandae temporibus reprehenderit expedita,
deleniti numquam aspernatur distinctio dolor odio magnam dicta, aliquid
ab perferendis excepturi praesentium illum, nemo commodi doloremque
quasi voluptatem omnis vel. Provident, nulla necessitatibus? Eaque quas,
magni ex suscipit architecto optio voluptate molestias nesciunt
molestiae minima nam dolorum, voluptas consectetur corporis dolore eum!


Corporis iusto cumque doloremque cum deserunt minus sapiente labore
laudantium? Aspernatur similique sunt officia odit expedita alias,
dolores minus a, doloribus repellat dolore? Optio. Lorem ipsum dolor sit
amet consectetur adipisicing elit. Quaerat perspiciatis molestias modi
asperiores, eaque dolore dolor culpa libero sequi sit error odit vel
quos dicta doloremque ab rem voluptas nesciunt nisi sapiente tempora?
Iste voluptatem iure deserunt voluptatibus odio quo omnis vitae tenetur
ullam libero. Tenetur, suscipit soluta quaerat eius animi laboriosam
vitae ea atque nesciunt commodi, est quo optio aspernatur enim culpa
temporibus aliquid impedit quis quia assumenda rem. Illum ducimus amet
repudiandae magni rem qui laudantium sequi consectetur pariatur deserunt
dolorem quo earum deleniti, temporibus doloremque fugiat vitae, error
fugit soluta aliquam nemo. Perspiciatis molestias ut ipsa praesentium
assumenda atque ipsum quas, quisquam qui eum eaque omnis ea quae dolore
consequuntur dignissimos vitae commodi sunt eligendi nobis officia!`;

const data = {
  blogs: [
    {
      coverImgUrl: "https://picsum.photos/700/250",
      authorAvatarUrl: "https://picsum.photos/50/50",
      title: "Get out of Web2 now: The web is evolving into Web3.0",
      content: content,
      datePublished: "April 12",
      likesCount: 5,
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
          author: "Somebody",
          comment: `orem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
      laboriosam qui unde? Aut tempora consequuntur et ea, incidunt dictatemporibus ratione repellendus a exercitationem laboriosam modi, rerum
      deleniti, repudia reiciendis, ducimus reprehenderit nobis voluptas tempora aliquam officia
      fuga necessitatibus voluptatem rerum saepe obcaecati provident nulla.`,
        },
        {
          author: "Somebody",
          comment: `orem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
      laboriosam qui unde? Aut tempora consequuntur et ea, incidunt dictatemporibus ratione repellendus a exercitationem laboriosam modi, rerum
      deleniti, repudia reiciendis, ducimus reprehenderit nobis voluptas tempora aliquam officia
      fuga necessitatibus voluptatem rerum saepe obcaecati provident nulla.`,
        },
      ],
    },
    {
      coverImgUrl: "https://picsum.photos/700/250",
      authorAvatarUrl: "https://picsum.photos/50/50",
      title: "Get out of Web2 now 1",
      content: content,
      datePublished: "April 12",
      likesCount: 5,
      commentsCount: 2,
    },
    {
      coverImgUrl: "https://picsum.photos/700/250",
      authorAvatarUrl: "https://picsum.photos/50/50",
      title: "Get out of Web2 now 2",
      content: content,
      datePublished: "April 12",
      likesCount: 5,
      commentsCount: 2,
    },
    {
      coverImgUrl: "https://picsum.photos/700/250",
      authorAvatarUrl: "https://picsum.photos/50/50",
      title: "Get out of Web2 now 3",
      content: content,
      datePublished: "April 12",
      likesCount: 5,
      commentsCount: 2,
    },
  ],
  sellersList: [
    {
      sellerAddress: "0x12345",
      message: "Hey, I want to sell 5RP consequuntur dignissimos vitae commodi sunt eligendi nobis officia!",
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
