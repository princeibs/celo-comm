import React from "react";
import "./BlogPreview.scss";

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
expedita dolorum assumenda iure voluptas. Fugit, tempore quia numquam
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
voluptate, aperiam itaque est repellat ea. Ab ex aliquid aperiam nulla,
aut, facere illum, quisquam ipsa temporibus rem totam doloribus ducimus
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
consequuntur dignissimos vitae commodi sunt eligendi nobis officia!
Adipisci, nostrum, reiciendis nulla qui in dignissimos amet architecto
natus perferendis hic officia labore non facere. Perspiciatis fugit
accusamus laborum, esse natus similique rerum animi quo magni quidem?
Commodi illo numquam laboriosam deserunt laudantium repellendus placeat
eligendi porro, praesentium nostrum dolorem odit dolorum eaque officia
soluta, sit nobis, sunt cupiditate! Officia, incidunt modi dolorem
molestias quam libero repellat omnis fugit tenetur ex recusandae aliquid
velit corrupti pariatur voluptates ducimus quasi quisquam totam debitis,
inventore rem repudiandae? Sed, illum quae.`;

const blogs = [
  {
    imgUrl: "https://picsum.photos/seed/picsum/700/250",
    authorAvatarUrl: "https://picsum.photos/seed/picsum/50/50",
    title: "Get out of Web2 now",
    content: content,
    datePublished: "April 12",
    likesCount: 5,
    commentsCount: 16,
  },
  {
    imgUrl: "https://picsum.photos/seed/picsum/700/250",
    authorAvatarUrl: "https://picsum.photos/seed/picsum/50/50",
    title: "Get out of Web2 now",
    content: content,
    datePublished: "April 12",
    likesCount: 5,
    commentsCount: 2,
  },
  {
    imgUrl: "https://picsum.photos/seed/picsum/700/250",
    authorAvatarUrl: "https://picsum.photos/seed/picsum/50/50",
    title: "Get out of Web2 now",
    content: content,
    datePublished: "April 12",
    likesCount: 5,
    commentsCount: 2,
  },
  {
    imgUrl: "https://picsum.photos/seed/picsum/700/250",
    authorAvatarUrl: "https://picsum.photos/seed/picsum/50/50",
    title: "Get out of Web2 now",
    content: content,
    datePublished: "April 12",
    likesCount: 5,
    commentsCount: 2,
  },
  {
    imgUrl: "https://picsum.photos/seed/picsum/700/250",
    authorAvatarUrl: "https://picsum.photos/seed/picsum/50/50",
    title: "Get out of Web2 now",
    content: content,
    datePublished: "April 12",
    likesCount: 5,
    commentsCount: 2,
  },
  {
    imgUrl: "https://picsum.photos/seed/picsum/700/250",
    authorAvatarUrl: "https://picsum.photos/seed/picsum/50/50",
    title: "Get out of Web2 now",
    content: content,
    datePublished: "April 12",
    likesCount: 5,
    commentsCount: 2,
  },
  {
    imgUrl: "https://picsum.photos/seed/picsum/700/250",
    authorAvatarUrl: "https://picsum.photos/seed/picsum/50/50",
    title: "Get out of Web2 now",
    content: content,
    datePublished: "April 12",
    likesCount: 5,
    commentsCount: 2,
  },
  {
    imgUrl: "https://picsum.photos/seed/picsum/700/250",
    authorAvatarUrl: "https://picsum.photos/seed/picsum/50/50",
    title: "Get out of Web2 now",
    content: content,
    datePublished: "April 12",
    likesCount: 5,
    commentsCount: 2,
  },
];

const BlogPreview = () => {
  return (
    <div className="app__blogPreview">
      <div className="app__blogPreview-body">
        {blogs.map((blog) => (
          <div className="app__blogPreview-item">
            <img src={blog.imgUrl} />
            <div className="details">
              <img src={blog.authorAvatarUrl} />
              <div className="content">
                <div>{blog.datePublished}</div>
                <p>5 mins read</p>
                <h2>{blog.title}</h2>
                <p>{blog.content.slice(0, 170)} ...</p>
                <div className="bottom">
                  <div className="likes">❤{blog.likesCount}</div>
                  <div className="comments">💬{blog.commentsCount}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPreview;
