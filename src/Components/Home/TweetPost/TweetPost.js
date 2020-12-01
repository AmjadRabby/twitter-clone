import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const TweetPost = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    data.name = "Tom Cruise";
    fetch("https://boiling-mountain-91364.herokuapp.com/addPost", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if(result){
          history.push('/')
        }
        console.log(result);
      });
  };

  return (
    <div className=" m-0 p-2">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex align-items-center">
          <img
            className="img-fluid profile-img"
            src="https://i.ibb.co/19NvpNR/profile4.jpg"
            alt="profile4"
            border="0"
          />
          <input
            name="post"
            ref={register}
            className="form-control border-0 m-2 post-area"
            placeholder="What's happening?"
          />
        </div>
        <div className="d-flex align-items-center mt-4 m-1">
          <input
            name="profile"
            ref={register}
            className="form-control border-0 m-1"
            placeholder="profile image url.."
          />
           <input
            name="avatar"
            ref={register}
            className="form-control border-0 m-1"
            placeholder="avatar image url.."
          />
          <input
            type="submit"
            className="btn btn-info rounded-pill px-4 "
            value="Tweet"
          />
        </div>
      </form>
    </div>
  );
};

export default TweetPost;
