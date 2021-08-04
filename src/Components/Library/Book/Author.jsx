import S from './Book.module.css'
import avatar from '../../../img/avatar_author-lg.png'
import heartImg from '../../../img/heart.svg'

export const Author = ({page}) => {
  if (!page) {
    return (
      <h1>Выбери автора</h1>
    )
  }

  return (
    <div className={S.description}>
      <div className={S.top}>
        <div className={S.avatar}>
          {page.photos ?
            <img
              src={`http://covers.openlibrary.org/b/id/${page.photos[0]}-M.jpg`}
              alt='label' align='left'
              className={S.book} />
            :
            <img src={avatar} alt='автор' />
          }
        </div>
        <div className={S.content}>
          <h1 className={S.h1}>
            {page.name}
          </h1>
          <p>Лучшая работа: {page.top_work} </p>
          {/*<p>Дата смерти: </p>*/}
        </div>
      </div>
      <button>
        <img src={heartImg} alt='like' className={S.like_book} />
      </button>
      <p className={S.p}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, rem,
        velit. Ad commodi distinctio ducimus earum eius eveniet explicabo illo impedit ipsam, labore laborum magnam
        maiores maxime modi mollitia nesciunt nulla porro quia quis ratione reiciendis rem reprehenderit tenetur totam
        voluptatum! Alias at cupiditate delectus doloribus dolorum eaque error esse, et fugiat id inventore, ipsam neque
        nostrum pariatur provident quibusdam quod, repellendus rerum suscipit temporibus unde voluptas voluptates.
        Accusantium beatae dolorem dolorum ex, harum ipsa maiores pariatur quis rerum velit. A accusantium amet
        architecto autem beatae consequatur cumque doloremque ducimus eius enim error eveniet ex iste minima nulla odit
        officia pariatur perspiciatis quae quo, unde ut vel. Accusamus accusantium aliquid aperiam asperiores cum dicta
        est et fuga id impedit iste maxime minus, modi necessitatibus nisi officiis quod quos repellat repudiandae saepe
        sequi similique tempora temporibus ullam ut vel veniam voluptate! Autem, cum ea esse facere magnam maxime nobis
        optio sit ut voluptatem. Culpa cupiditate dolorem error eum harum id minima odit ratione unde! Accusamus autem,
        deserunt dignissimos dolorem dolores eligendi enim eum hic iusto nemo odit pariatur porro quae quisquam soluta
        sunt suscipit tenetur vel vero voluptatum! Adipisci aliquam amet animi aspernatur assumenda at aut beatae cum
        deserunt dolorem doloribus enim et, excepturi facere facilis fugiat hic illo in incidunt ipsum maiores, maxime
        minus mollitia natus neque numquam quaerat quidem quisquam ratione recusandae repellendus reprehenderit
        repudiandae rerum sapiente soluta veritatis voluptas. Adipisci alias ea ipsum iusto minus mollitia nam vel.
        Accusamus adipisci culpa deserunt, ducimus earum excepturi fuga iste itaque laboriosam laudantium magnam
        necessitatibus nulla odit, qui sapiente similique, ut vel velit veniam voluptatibus. Consequuntur doloremque,
        dolores ducimus ea in magnam minus. Ab assumenda earum hic, necessitatibus nobis odio tempora velit? Amet
        aspernatur commodi consequuntur esse est et excepturi explicabo, illum inventore magnam maxime odit quaerat
        quas, rem ullam voluptatibus.</p>
    </div>
  )
}