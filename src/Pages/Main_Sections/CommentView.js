import comments from "../DummyData/fakeComment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";
const CommentView = () => {
  return (
    <section className="home_view_container3">
      <aside className="view3_left">
        <div className="view3_left_box">
          <h3 data-aos="fade-right" className="left_title">
            브랜썸을 만나고, 어떠셨나요?
          </h3>
        </div>
      </aside>

      <aside className="view3_right">
        <ul className="comments_container">
          {comments.map((data, idx) => (
            <article key={idx} id="comments_list">
              <article className="comments_left">
                <div className="comments_profile_image_box">
                  <img
                    src={data.profileImg}
                    className="comments_profile_image"
                  />
                </div>
                <div className="comments_user_info">
                  <h2 className="comments_user">{data.user}</h2>
                  <h2 className="comments_age">{data.age}</h2>
                </div>
              </article>
              <article className="comments_right">
                <h2 className="comments_title">{data.commentsTitle}</h2>
                <p className="comments_contents">{data.contents}</p>
              </article>
            </article>
          ))}
        </ul>
      </aside>
    </section>
  );
};

export default CommentView;
